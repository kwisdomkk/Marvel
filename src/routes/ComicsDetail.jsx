import { useLocation,useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ComicsDetail() {
  const [prevOpen, setPrevOpen] = useState(false);
  const [nextOpen, setNextOpen] = useState(false);
  const{
    state:{comics},
  } =useLocation()
  const{id}=useParams();

  const item = comics?.find((comic)=>comic.id === parseInt(id))

  const index = comics?.indexOf(item);
  const next=index>0?comics[index-1]:null;
  const prev=index<comics?.length-1?comics[index+1]:null;

  return (
    <Layout>
    <div className="w-full h-10 bg-main-dark flex justify-center">
      <div className="uppercase text-sm font-semibold grid grid-cols-2 gap-4 text-white">
        {/* prev */}
        <div 
          onMouseEnter={() => setPrevOpen(true)}
          onMouseLeave={() => setPrevOpen(false)}
          className="relative"
         >
          <Link to={`/comics/${prev?.id}`}>
          <div className="flex items-center cursor-pointer">
            <FaAngleLeft size="18" />
            <span>prev</span>  
          </div>
          </Link>
          <AnimatePresence>
            {prevOpen&&(
              <motion.div
              initial={{opacity:0,y:15}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:15}}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 top-10 bg-white w-40 h-72 p-2">
                <img src={`${prev?.thumbnail?.path}.${prev?.thumbnail?.extension}`}   alt="prev_image"
                className="w-full h-52 object-cover"/>
                <h2 className="text-sm py-2 text-black">{prev?.title.substr(0,28)}</h2>
              </motion.div>
              )}
          </AnimatePresence>
        </div>
          {/* next */}
          <div
           onMouseEnter={() => setNextOpen(true)}
           onMouseLeave={() => setNextOpen(false)}
           className="relative"
           >
            <Link to={`/comics/${next?.id}`}>
            <div className="flex items-center">
              <span>next</span>
              <FaAngleRight size="18" />
            </div>
            </Link>
            <AnimatePresence>
              {nextOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-0 top-10 bg-white w-40 h-72 p-2"
                >
                  <img
                    src={`${next?.thumbnail?.path}.${next?.thumbnail?.extension}`}
                    alt="next_image"
                    className="w-full h-52 object-cover"
                  />
                  <h2 className="text-sm py-2 text-black">
                    {next?.title?.substr(0, 28)}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence> 
          </div>
      </div>
    </div>
    <div className="w-full flex justify-center">디테일</div>
    </Layout>
  )
}
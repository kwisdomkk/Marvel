import { useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import NoticeDisney from "../components/NoticeDisney";
import { testimonials } from "../lib/menus";
import {motion} from "framer-motion";
import Facebook from "../assets/Facebook";
import Twitter from "../assets/Twitter";
import Insta from "../assets/Insta";

const Card=({image,title,link,text,selected,setSelected,position})=>{
  const offset = position<=selected?0:100;
  return(
    <div className="relative w-full h-full flex justify-center">
      <motion.div 
      initial={false} 
      animate={{
        x: `${offset}`
      }}
      transition={{
        duration:0.25,
        ease:"easeOut"
      }}
      style={{
        zIndex: position
      }}
      onClick={()=> setSelected(position)}
      className="absolute top-0 left-0 w-full h-full flex justify-center">
        <img className="w-full h-full object-cover" src={image} alt={title}/>
      </motion.div>
      <div className="absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
        <h1 className="text-4xl font-bold uppercase">echo comics</h1>
        <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nulla voluptate assumenda eaque quibusdam corrupti nisi fugit quisquam unde odio libero!</p>
        <Button link={link} text={text} />
      </div>
    </div>
  )
}

const SelectedBtns=({numTracks,setSelected,selected})=>{
  return(
    <div className="flex space-x-2">
      {numTracks.map((item,index,array)=>(
        <button onClick={()=>setSelected(index)} key={index} className="h-2 w-full bg-slate-300 relative">
          {
            selected === index ? (
            <motion.span 
              className="absolute top-0 left-0 w-full h-full bg-red-600"
                initial={{
                  width:"0%"
                }}
                animate={{
                  width:"100%"
                }}
                transition={{
                  duration:2,
                  ease:"easeOut"
                }}
                onAnimationComplete={()=>{
                  setSelected(selected===array.length-1? 0:selected+1)
                }}>
            </motion.span>
            ):(
            <span className="absolute top-0 left-0 bg-red-600" style={{width: selected>index? "100%":"0%"}}>

            </span>
              
            )
          }
          <p className={`w-full h-16 text-left items-start pt-4 px-1 font-semibold text-xs ${selected === index && "text-red-600"} uppercase`}>{item.title}</p>
        </button>
      ))}
    </div>
  )
}

export default function MainPage(){
  const[selected,setSelected]=useState(0);
  return(
    <>
    <Layout>
      {/* notice disney */}
      <NoticeDisney/>
      {/* 메인 슬라이드: 캐러셀 */}
      <section className="w-full flex flex-col">
          {/* 그림영역 */}
          <div className="w-full h-[450px] overflow-hidden">
            {
              testimonials.map((item,index)=>(
                //5개중의 1개 아이템
                  <Card key={index} {...item} selected={selected} setSelected={setSelected} position={index}/>
              ))
            }
          </div>
          {/* 버튼영역 */}
          <div className="w-full flex justify-center h-20">
            <div className="max-w-7xl w-full grid grid-cols-4 h-full">
              {/* 1: 75% grid grid-cols-3*/}
              <div className="col-span-3 -translate-y-10 bg-white">
                <SelectedBtns numTracks={testimonials} setSelected={setSelected} selected={selected}/>
              </div>
              {/* 2: 25% grid grid-cols-1*/}
              <div className="flex w-full h-full justify-end space-x-4 pt-2">
                <Facebook/>
                <Twitter/>
                <Insta/>
              </div>
            </div>
          </div>
      </section>
    </Layout>
    </>
  )
}


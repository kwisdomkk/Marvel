import Layout from "../components/Layout";
import Layout7 from "../components/Layout7";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import {useQuery} from 'react-query'
import { apiGetComics } from "../api";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import useMeasure from "react-use-measure";


  const ListItem=({item,CARD_WIDTH,CARD_HEIGHT,MARGIN})=>(
    <div className="shrink-0" style={{width:CARD_WIDTH,height:CARD_HEIGHT,margin:MARGIN}}>
                {/* 이미지 박스 */}
                <div className="w-full h-[280px]">
                  <img className="w-full h-full object-cover object-center"
                   src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt="comic_image"/>
                </div>
                {/* 타이틀 */}
                <div className="">
                  <h2 className="text-sm font-semibold">{item.title.substr(0,20)}</h2>
                  <h4 className="text-sm text-gray-500">{item.modified.substr(0,10)}</h4>
                </div>
              </div>
  )

  export default function MainPage() {
    let lists; //fetch 요청한 배열을 받기 위한 변수
    const { data, isLoading } = useQuery(["getComics"], apiGetComics);
    if(!isLoading){
      lists=data?.data.results
    }
    console.log(isLoading, data);

    // 모션
    const CARD_WIDTH=195;
    const CARD_HEIGHT=340;
    const MARGIN=8;
    const CARD_SIZE=CARD_WIDTH + MARGIN + 8;

    const BREAKPOINT={
      sm:640,
      lg:1024,
    };

    const [ref,{width}]= useMeasure()
    const [offset,setOffset]=useState(0)

    const CARD_BUFFER=width>BREAKPOINT.lg?3:width>BREAKPOINT.sm?2:1;

    const CAN_SHIFT_LEFT=offset<0;

    const CAN_SHIFT_RIGHT=Math.abs(offset)<CARD_SIZE*(lists?.length - CARD_BUFFER)

    const shiftLeft=()=>{
      if(!CAN_SHIFT_LEFT) return;
      setOffset((pv)=>(pv+=CARD_SIZE))
    }

    const shiftRight=()=>{
      if(!CAN_SHIFT_RIGHT) return;
      setOffset((pv)=>(pv-=CARD_SIZE))
    }

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg" />
        <section className="  w-full flex justify-center">
          <div ref={ref} className="relative max-w-7xl w-full overflow-hidden bg-white -translate-y-12 p-2">
            <motion.div
            animate={{
              x:offset,
            }}
            className="flex">
              {lists?.map((item, index) => (
                <ListItem CARD_WIDTH={CARD_WIDTH} CARD_HEIGHT={CARD_HEIGHT} MARGIN={MARGIN} item={item} key={index}/>
              ))}
            </motion.div>
            {/* left button */}
            <motion.button 
              initial={false} 
              animate={{x:CAN_SHIFT_LEFT? "0%" :"-100%"}}
              onClick={shiftLeft}
            className="absolute left-0 top-[35%]  bg-slate-500/50 duration-100 p-3 pl-2 text-4xl text-white hover:pl-3">
              <FaChevronLeft />
            </motion.button>
            {/* right button */}
            <motion.button 
              initial={false}
              animate={{x:CAN_SHIFT_RIGHT? "0%" : "100%"}}
              onClick={shiftRight}
            className="absolute right-0 top-[35%]  bg-slate-500/50 duration-100 p-3 pr-2 text-4xl text-white hover:pr-3">
              <FaChevronRight />
            </motion.button>
          </div>
        </section>
    </Layout>
  );
}

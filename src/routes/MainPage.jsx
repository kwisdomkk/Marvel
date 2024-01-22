import { FaSearch } from "react-icons/fa";
import LogoLarge from "../assets/png/logo.png"
export default function MainPage(){
  return(
    <>
    {/* 헤더 */}

    <section className="w-full flex justify-center h-12 bg-main-dark">
      <div className="max-w-7xl w-full h-full flex text-white justify-between items-center">
        {/* 왼쪽: 회원정보 */}
        <div className="flex h-full items-center text-sm space-x-2 border-x border-gray-700 px-4">
          <span className="inline-block bg-white w-5 h-5 rounded-full text-main-dark text-right italic font-extrabold pr-1">IN</span>
          <span className="text-xs font-semibold ">KWEON</span>
        </div>
        {/* 오른쪽: 검색 */}
        <div className="px-4 h-full flex items-center border-x border-gray-700 space-x-4">
          {/* subscribe */}
           <div className="h-full flex items-center space-x-2">
            {/* 이미지 */}
            <img className="h-[60%] inline-block" src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png" alt="image_marvel"/>
            <div className="inline-block uppercase text-center">
              <p className="text-sm font-semibold">marvel unlimited</p>
              <p className="text-xs font-semibold">subscribe</p>
            </div>
           </div>
          {/* 아이콘 */}
          <div className="h-full flex items-center border-l border-gray-700 pl-4"><FaSearch /></div>
        </div>
        {/* 중앙: 로고 */}
        <div className="absolute top-0 left-[50%] -translate-x-[50%]">
          <img className="h-full" src={LogoLarge} alt="logo-large"/>         
        </div>
      </div>
    </section>
    <section className="w-full border border-gray-700 flex justify-center h-10
     bg-main-dark text-white space-x-8 text-xs items-center font-semibold">
      <p>NEWS</p>
      <p>COMICS</p>
      <p>CHARACTERS</p>
      <p>MOVIES</p>
      <p>TV SHOWS</p>
      <p>GAMES</p>
      <p>VIDEOS</p>
      <p>MORE</p>
    </section>
    </>
  )
}
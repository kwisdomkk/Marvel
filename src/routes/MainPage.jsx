import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import {useQuery} from 'react-query'
import { apiGetCharacters, apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";
import Layout7 from "../components/Layout7";
import ScaleLoader from "react-spinners/ScaleLoader";
import Button from "../components/Button";


  export default function MainPage() {
    let lists; //fetch 요청한 배열을 받기 위한 변수
    let events; // events fetch 요청한 배열을 받기 위한 변수
    let characters // characters fetch 요청한 배열을 받기 위한 변수

    //코믹스 fetch
    const { data, isLoading } = useQuery(["getComics"], apiGetComics);
    if(!isLoading){
      lists=data?.data.results
    }
    
    //이벤츠 fetch
    const {data:dataEvents, isLoading:isLoadingEvents}= useQuery(["getEvents"],apiGetEvents);
    if(!isLoadingEvents){
      events=dataEvents?.data.results;
    }

    //캐릭터 fetch
    const {data:dataCharacters,isLoading:isLoadingCharacters}=useQuery(["getCharacters",{limit:30}],apiGetCharacters);
    if(!isLoadingCharacters){
      characters=dataCharacters?.data.results;
    }
    console.log(characters)

    
  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg"
       mainTitle="Available Now"
       subTitle="New on Marvel Unlimited"
       description="Read these plus 30,000+ digital comics for $9.99 a month!"
       btnTxt="Get Marvel Unlimited"
       />
      
      {/* 리스트 캐러셀 */}
      <ListCarousel lists={lists}/>

      {/* 이벤트 */}
      <section className="w-full flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-[7fr_3fr]">
          {/* 1왼쪽 */}
          <div className="w-full h-full">
            {/* 타이틀 */}
            <TitleRotate text="The Events"/>
            {/* 이벤트 API에서 불러오기 */}
            <div className="w-full">
            {events?.map((event,index)=>(
              <div key={index}>
                <div className="w-full h-[260px] my-10 flex space-x-5 ">
                  <div className="w-1/2 h-[260px]">
                    <img className="w-full h-full object-cover object-center" src={`${event.thumbnail?.path}.${event.thumbnail?.extension}`}/>
                  </div>
                  <div className="w-1/2 h-[260px] space-y-5">
                    <div className="text-sm font-semibold text-slate-500">{event.title}</div>
                    <div className="font-bold">{event.description}</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* 2 오른쪽 */}
          <div className="w-full h-full pl-8">
            <div>
              <span class="icon--svg icon--border" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55" fill="none" stroke="#C6A972" stroke-width="3"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)"></path></svg></span>
            </div>
            <div className="h-20 text-center w-full flex flex-col items-center">
              <p className="text-2xl font-semibold">The Hype Box</p>
              <p className="text-sm">Can’t-miss news and updates from<br/> across the Marvel Universe!</p>
            </div>
            <div className="w-full h-[900px] flex flex-col px-4">
              {dataEvents?.data?.results?.slice(5, 10).map((event, index)=>(
                <div key={index} className="w-full py-8 flex">
                  <div className="w-[40%]">
                    <img className="w-[90%] object-cover" src={`${event.thumbnail?.path}.${event.thumbnail?.extension}`}/></div>
                  <div className="w-[60%] px-4 space-y-2">
                    <div className=" text-sm font-semibold text-slate-500">
                      {event.title}
                    </div>
                    <div className="text-sm font-semibold">{event.description.substr(0, 80)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-end">
            <span class="icon--svg icon--border" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55" fill="none" stroke="#C6A972" stroke-width="3" transform="scale(-1,-1)"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)"></path></svg></span>
            </div>
          </div>
        </div>
      </section>

      {/* 캐릭터 */}
      <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/new_com_20240131_set_01.jpg"
      mainTitle="on sale 1/31"
      subTitle="new comics this week"
      description="Check out the newest Marvel comics coming out this week"
      btnTxt="print subscription"
      />

      {/* 캐릭터 리스트 캐러셀 */}
      {isLoadingCharacters?(
        <Layout7>
          <div className="w-full flex justify-center py-16">
            <ScaleLoader color="red" />
          </div>
        </Layout7>):
      (<ListCarousel lists={characters}/>)}

      {/* 마블 인사이더 */}
      <section className="w-full h-80 flex justify-center bg-black">
        <div className="max-w-7xl w-full h-full grid grid-cols-[4fr_6fr]">
          {/* 1 왼쪽 */}
          <div className="w-full h- full">
            <div className="w-full h-full">
              <img className="w-full h-full object-cover"
               src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg" alt="marvel_insider"/>
            </div>
          </div>
          {/* 2 오른쪽 */}
          <div className="w-full h- full flex flex-col text-white items-center justify-center space-y-2">
              <h3 className="text-red-600 font-semibold">Marvel Insider</h3>
              <h4 className="text-2xl font-bold">Watch, Earn, Redeem!</h4>
              <p>Get rewarded for doing what you already do as a fan.</p>
              <div className="py-4">
                <Button text="join now"/>
              </div>
              <p className="text-xs">Terms and Conditions Apply.</p>
          </div>
        </div>
      </section>

    </Layout>
  );
}

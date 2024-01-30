import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import {useQuery} from 'react-query'
import { apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";


  export default function MainPage() {
    let lists; //fetch 요청한 배열을 받기 위한 변수
    let events; // events fetch 요청한 배열을 받기 위한 변수

    const { data, isLoading } = useQuery(["getComics"], apiGetComics);
    if(!isLoading){
      lists=data?.data.results
    }
    
    const {data:dataEvents, isLoading:isLoadingEvents}= useQuery(["getEvents"],apiGetEvents);
    if(!isLoadingEvents){
      events=dataEvents?.data.results;
    }
  

    
  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg" />
      
      {/* 리스트 캐러셀 */}
      <ListCarousel lists={lists}/>

      {/*  */}
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
                <div className="w-full h-[260px] m-5 flex">
                  <div className="w-1/2 h-[260px]">
                    <img className="w-full h-full object-cover object-center" src={`${event.thumbnail?.path}.${event.thumbnail?.extension}`}/>
                  </div>
                  <div className="w-1/2 h-[260px] space-y-5">
                    <div>{event.title}</div>
                    <div>{event.description}</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          
          {/* 2오른쪽 */}
          <div className="w-full h-full"></div>
        </div>
      </section>
    </Layout>
  );
}

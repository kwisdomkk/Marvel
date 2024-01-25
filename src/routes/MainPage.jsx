import Layout from "../components/Layout";
import Layout7 from "../components/Layout7";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import {useQuery} from 'react-query'
import { apiGetComics } from "../api";

  export default function MainPage() {
    const { data, isLoading } = useQuery(["getComics"], apiGetComics);
    console.log(isLoading, data);

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox imgUrl="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg" />
      <Layout7>
          <div className="w-full h-60 bg-red-500">
            {data?.data?.results.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
      </Layout7>
    </Layout>
  );
}

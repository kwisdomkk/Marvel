import { useQuery } from "react-query";
import Layout from "../components/Layout";
import TitleRotate from "../components/TitleRotate";
import { apiGetComics } from "../api";
import { Link } from "react-router-dom";

export default function Comics() {
  let comics;
  const { data, isLoading } = useQuery(
    ["getComics", { limit: 100 }],
    apiGetComics
  );
  if (!isLoading) {
    comics = data?.data.results;
  }

  return (
    <Layout>
      {/* 캐릭터 서브페이지 이미지타이틀 */}
      <section className="relative w-full h-[400px]">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.marvel.com/u/prod/marvel/i/mg/b/d0/65b2b4bc56bd1.jpg"
          alt="characters_image"
         />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900 via-30% to-transparent"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center">
          <h1 className="text-4xl font-semibold py-2 uppercase">comics</h1>
          <p className="uppercase">
            The Roxxon Age of Marvel Comics Begins
          </p>
        </div>
      </section>
      <section className="w-full flex justify-center bg-white">
        <div className="max-w-7xl w-full">
          <TitleRotate text="JANUARY 31: NEW RELEASES" />
          <div className="w-full flex flex-wrap">
            {comics?.map((item, index, array) => (
              <div key={index} className="w-[195px] h-[340px] mr-[1%] mb-[5%]">
                <Link to={`/comics/${item.id}`} state={{ comics: array }}>
                  <div
                    className="w-full h-full flex flex-col"
                  >
                    {/* 이미지 */}
                    <div className="w-full h-full">
                      <img
                        className="w-[195px] h-[340px] object-cover hover:-translate-y-3 duration-300"
                        src={`${item.thumbnail?.path}.${item.thumbnail.extension}`}
                        alt="character_image"
                      />
                    </div>
                    {/* 타이틀 */}
                    <div className="">
                        <h2 className="font-semibold text-sm">{item?.title.substr(0,20)}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { apiGetCharacterDetail } from "../api";

export default function CharacterDetail() {
  let detail;

  const {id} = useParams();
  const {data,isLoading}=useQuery(["getCharacterDetail",{id}],apiGetCharacterDetail);
  
  if(!isLoading){
    detail=data?.data.results[0];
  }
  console.log(detail,isLoading)

  return (
    <Layout>
      <div className="relative w-full py-16 flex justify-center" 
      style={{
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundImage:`url('${detail?.thumbnail.path}.${detail?.thumbnail.extension}')`}}>
        {/* 필터처리 */}
        <div className="absolute top-0 left-0 w-full h-full bg-main-dark/90"></div>
        <div className="z-10 max-w-7xl w-full h-full grid grid-cols-[1fr_2fr]">
          {/* 왼쪽 */}
          <div className="w-full h-full flex">
            <img className="w-[85%] aspect-[2/3] object-cover" src={`${detail?.thumbnail.path}.${detail?.thumbnail.extension}`} alt="character_image"/>
          </div>
          {/* 오른쪽 */}
          <div className="w-full h-full flex flex-col text-white space-y-8">
            <h1 className="text-xl font-semibold">{detail?.name}</h1>
            <div>
              <h2 className="text-xl font-semibold">Published</h2>
              <p>{detail?.modified?.substr(0,10)}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Comics</h2>
              {detail?.comics?.items?.slice(0,3).map((item,index)=>(
                <p key={index}>{item?.name}</p>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold">Events</h2>
              {detail?.comics?.items?.slice(0,3).map((item,index)=>(
                <p key={index}>{item?.name}</p>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="w-[70%]">
              {detail?.description?detail.description:"THE EVOLUTION OF MS. MARVEL CONTINUES! The world may have turned against mutantkind, but now they’ve got Ms. Marvel to stand up for them!"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full h-80 flex">
          <div className="bg-[#E1E1E1] w-[40%] h-full flex items-center justify-center">
            <div className="w-[80%] h-[80%]">
            <h2>PRINT ISSUE</h2>
            </div>
          </div>
          <div className="bg-[#E1E1E1] w-[60%] h-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] ">
              <h2>Digital Issue </h2>
              <p>Read online or on your iPhone, iPad or Android Device</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

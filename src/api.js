import qs from "qs";
import xml2js from "react-native-xml2js";

const API_KEY=import.meta.env.VITE_API_KEY;
const BASE_URL="https://gateway.marvel.com:443/v1/public"

export async function apiGetMunwha(){
  try{
   let data;
   const xmlData =await fetch("http://www.cha.go.kr/cha/SearchKindOpenapiList.do").then(res=> res.text());
   
    xml2js.parseString(xmlData,(err,result)=>{
      if(err!==null){
        console.log(err);
        return
      }
      data=result
    })
    return data;

  }catch(error){
    console.log(error);
  }
}

// [GET] 코믹스 리스트
export async function apiGetComics(){
  return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      },
    }
  ).then((res)=>res.json());
}

// [GET] Events 리스트
export async function apiGetEvents({pageParam}){
  const offset=pageParam * 10
  return await fetch(`${BASE_URL}/events?limit=10&offset=${offset}&apikey=${API_KEY}`,{
    method:"GET",
    headers: {
      "Content-Type": "application/json",
      },
    }
  ).then((res)=>res.json());
}

//[GET] Characters 리스트
export async function apiGetCharacters({queryKey}){
  const limit=queryKey[1].limit;
  try{
    return await fetch(`${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
        },
      }
    ).then((res)=>res.json());
  }catch(error){
    console.log(error)
  }
}
  //[GET] Characters detail
  //params:id
  export async function apiGetCharacterDetail({queryKey}){
    const id=queryKey[1].id
    try{
      return await fetch(`${BASE_URL}/characters/${id}?&apikey=${API_KEY}`,{
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          },
        }
      ).then((res)=>res.json());
    }catch(error){
      console.log(error)
    }
  }

  export async function apiPostEMail(data){
    // const formData=new FormData()
    // formData.append("name", data.name);
    // formData.append("email",data.email);
    // formData.append("message",data.message);
    try{
      return await fetch("https://script.google.com/macros/s/AKfycbw7bs_K9yxyGe61dLCa0AoX6gMQRNwqD8FA6aY5_G9lFWn8Jw6zyPLBUoUMsJ6uoGLF/exec",
      {
        method:"POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify(data),
      }
      ).then((res) => res.json());
      }catch(error){
      console.log(error)
    }
  }

  
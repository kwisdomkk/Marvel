import Layout from "../components/Layout";
import TitleRotate from "../components/TitleRotate";
import Button from "../components/Button";

export default function Comics() {
  return <Layout>
    <section className="w-full h-[570px]">
      <img className="w-full h-full object-cover" src="https://cdn.marvel.com/content/1x/characters_art_mas_dsk_01.jpg" alt="comic_image"/>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 text-white text-center">
        <TitleRotate text="Coming Soon"/>
        <h1 className="text-4xl font-extrabold">Your Complete Guide to 'Women of Marvel'</h1>
      </div>
    </section>
    <section className="w-full flex justify-center">
      <div className="max-w-7xl w-full">  
        <TitleRotate text="JANUARY 31: NEW RELEASES"/>
      </div>
    </section>
  </Layout>
}
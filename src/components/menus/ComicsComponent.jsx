const MENUS=[
  {
      image:"https://cdn.marvel.com/u/prod/marvel/i/mg/9/c0/65b7d77cd51b6/detail.jpg",
      title:"Wolverine: Madripoor Knights (2024) #1",
      description: "Return to the island-nation of Madripoor as X-Men"
  },
  {
    image:"https://cdn.marvel.com/u/prod/marvel/i/mg/6/60/65b7d7b21328d/portrait_uncanny.jpg",
    title:"Daredevil: Gang War (2023) #3",
    description: "GANG WAR CONTINUES! For the first time in her life"
  },
  {
    image:"https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/65b7d77c370b1/detail.jpg",
    title:"X-Men (2021) #31",
    description: "THE ULTIMATE MUTANT HUNTER! The X-Men lived in fear of Nimrod's creation"
  },
  {
    image:"https://cdn.marvel.com/u/prod/marvel/i/mg/9/70/65b7d79a40e2b/detail.jpg",
    title:"Sensational She-Hulk (2023) #5",
    description: "She-Hulk, Hell-Cat and CAPTAIN MARVEL were supposed to have a nice night out"
  }
]
export default function ComicsComponent() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full py-16 flex flex-col items-center space-y-8">
        <h1 className="font-bold text-3xl uppercase">latest comics</h1>
        <div className="flex space-x-4">
          {MENUS.map((item,index)=>(
            <div key={index} className="flex flex-col w-40 aspect-[9/16] space-y-4">
            <div className="w-full h-[70%]">
              <img className="w-full h-full object-cover hover:-translate-y-3 duration-300"
              src={item.image}
              alt="submenu_image"
              />
            </div>
            <div className="px-2">
              <h2>{item.title}</h2>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

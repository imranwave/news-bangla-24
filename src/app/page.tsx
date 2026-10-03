import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
export  default async function Home() {
  const res=await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data=await res.json();
  const section=data.data;
  const mainNews=section[0].articles
  return (
    <div>
      <Marquee></Marquee>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          {/* news section */}
          <div className="col-span-9">
            <MainNews news={mainNews}></MainNews>
          </div>
          {/* most read section */}
          <div className="col-span-3 bg-amber-200 "></div>
        </div>
      </div>
    </div>
  );
}

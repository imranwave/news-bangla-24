import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";


interface IArticle {
  id: string;
  type: string;
  category: string;
  imageAlt: string;
  imageUrl: string;
  link: string;
  title: string;
  description: string;
}
interface IOtherSection {
  title: string;
  curationId: string;
  curationType: string;
  articles: IArticle[];
  id: string;
}
export  default async function Home() {
  const res=await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data=await res.json();
  const section=data.data;
  const mainNews=section[0].articles
  const otherSection:IOtherSection[]=section.slice(1)
  return (
    <div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-3 mt-2">
          {/* news section */}
         
          <div className="col-span-9">
            <MainNews news={mainNews}></MainNews>
            {
              otherSection.map(other=><div key={other.curationId}>
                <div className="text-xl font-semibold space-y-3">
                  <h1 className="border-b-2 border-red-500 ">{other.title}</h1>
                  <div className="grid grid-cols-3 gap-2 py-3">
                    {
                    other.articles.map((news:IArticle)=> <NewsCard key={news.id} news={news}></NewsCard>)
                  }
                  </div>
                </div>
              </div>)
            }
          </div>
     
          {/* most read section */}
          <div className="col-span-3">
            <div>
              <MostRead></MostRead>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

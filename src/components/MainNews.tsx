import Image from "next/image";
interface News{
    category:string
    imageAlt:string
    imageUrl:string
    description:string
    title:string
    id:string
}
const MainNews = ({ news }:{news:News[]}) => {
    const [firstNews,...otherNews]=news
    // const otherNews=news.slice(1)
  console.log(firstNews,"first news");
  console.log(otherNews,"others news");
  return (
    <div className="flex gap-4">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
          height={600}
          width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>
           {firstNews.description}
          </p>
       
        </div>
      </div>
      <div className="grid gap-4">
        {otherNews.slice(0,4).map((other)=><div className="card border border-gray-200 py-4 px-2" key={other.id}>
             <p className="text-red-600 font-semibold">{other.category}</p>
            <div>{other.title}</div>
        </div>)}
      </div>
    </div>
  );
};

export default MainNews;

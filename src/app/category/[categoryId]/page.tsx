import NewsCard from "@/components/NewsCard";

interface ParamsType{
    type:string
    category:string
    imageAlt:string
    imageUrl:string
    link:string
    description:string
    title:string
    id:string

}
const CategoryPage = async ({params}:{params:{categoryId:string}}) => {
    
    const {categoryId}=await params;
    const res=await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data=await res.json();
    const categoryNews:ParamsType[]=data.data
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold border-b-2 border-red-700 mb-5">{data.title}</h1>
            <div className="grid grid-cols-3 gap-3">
                {categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryPage;
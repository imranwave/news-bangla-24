
interface MostReadNews{
    id:string
    title:string
}
const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const news:MostReadNews[] = data.data;

  return (
    <div>
      <h1 className="p-1 text-xl">সর্বাধিক পঠিত</h1>
      <div className="p-4">
        {news.map((n, index) => (
          <div key={n.id}>
            <div className="flex gap-2 space-y-2">
              <p className="font-semibold text-red-500">{index + 1}</p>
              <h1>{n.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;

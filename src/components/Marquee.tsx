import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface HeadLines{
    id:string
    title:string
}
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const latestNews:HeadLines[] = data.data;
  return (
    <div className="bg-red-700 text-white my-4">
      <div className="flex max-w-7xl mx-auto">
        <div className="px-5 py-1 bg-red-800">সর্বশেষ</div>
        <MarqueeText direction="right" duration={15} className="py-1">
          {latestNews.map((h, i) => (
            <span key={i}>
              <span>{h.title}</span>
              <span className="mx-2">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;

import Link from "next/link";
interface NavsType {
  slug: string;
  title: string;
  url: string;
  scrapable: boolean;
  topicId: null | string;
}
const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: NavsType[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);
  return (
    <div className="flex justify-center gap-5 my-5">
      <Link href="/">হোম</Link>
      {filteredNavs.map((n, i) => (
        <Link href={n.slug} key={i}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

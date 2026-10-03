import Image from "next/image";
import logo from "../../public/logo.webp";
import NavLinks from "./NavLinks";

const Header = () => {
    const now=new Date();
    const bangldeshiTime=now.toLocaleString("bn-Bd",{
        dateStyle:"full"
    })
  return (
    <div className="m-w-7xl mx-auto py-3">
      <div className="flex justify-between
      ">
        <div className="flex gap-2">
          <div>
            <Image alt="navbar-logo" height={50} width={50} src={logo}></Image>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Bangla News 24</h2>
            <p>{bangldeshiTime}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn">সাইন ইন</button>
          <button className="btn">সাইন আপ</button>
        </div>
         
      </div>
      <NavLinks></NavLinks>
    </div>
    
  );
 
};

export default Header;

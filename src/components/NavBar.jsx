import { Link } from "react-router-dom";
import Logo from "../assets/LogoImg.png";

const NavBar = () => {

  return (
    <div className="sticky-navbar top-0 z-10 justify-center items-stretch bg-white flex flex-col px-16 py-4 border-solid max-md:px-5">
      <div className="justify-between items-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
        <Link to="/">
          <img
            loading="lazy"
            src={Logo}
            className="object-cover object-center w-[50px] h-[50px] overflow-hidden border border-black rounded-full scale-x-150 scale-y-150 my-auto"
          />
        </Link>
        <div className="justify-between items-center self-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex justify-between gap-5 my-auto">
            <div className="text-black text-base leading-6 grow whitespace-nowrap">
              <Link to="about">About Us</Link>
            </div>
            <div className="text-black text-base leading-6">
              <Link to="dashboard">Dashboard</Link>
            </div>
            <div className="text-black text-base leading-6">
              <Link to="contact">Contact</Link>
            </div>
          </div>
          <div className="justify-between items-stretch self-stretch flex gap-4">
            <button className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 max-md:px-5 rounded-full">
              <Link to="login">Log In</Link>
            </button>
            <button className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 max-md:px-5 rounded-full">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
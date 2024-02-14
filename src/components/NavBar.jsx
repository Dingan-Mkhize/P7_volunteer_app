import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoImg.png";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar is visible only when at the top of the page
      setIsVisible(window.pageYOffset <= 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 px-6 py-3 shadow-md grid grid-cols-3 items-center bg-white rounded-full transition-transform duration-500 ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* Logo on the left */}
      <div className="justify-self-start">
        <Link to="/">
          <img
            loading="lazy"
            src={Logo}
            alt="Logo"
            className="w-[90px] h-[90px] object-cover border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 shadow-md rounded-full"
          />
        </Link>
      </div>

      {/* Center links */}
      <div className="flex justify-center gap-9">
        <Link
          to="/about"
          className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full"
        >
          About Us
        </Link>
        <Link
          to="/dashboard"
          className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full"
        >
          Dashboard
        </Link>
        <Link
          to="/contact"
          className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full"
        >
          Contact
        </Link>
      </div>

      {/* Buttons on the right */}
      <div className="justify-self-end flex gap-2">
        <button className="px-6 py-3 border border-black text-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full">
          <Link to="/login">Log In</Link>
        </button>
        <button className="px-6 py-3 border border-black text-white bg-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full">
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;

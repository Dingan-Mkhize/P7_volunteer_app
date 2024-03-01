import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoImg.png";
import { FaBars, FaTimes } from "react-icons/fa";
// import { AiOutlineDashboard, AiOutlineInfoCircle } from 'react-icons/ai'; // Dashboard Icon
// import { HiOutlineMail } from 'react-icons/hi'; // Contact Icon

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar is visible only when at the top of the page
      setIsVisible(window.pageYOffset <= 10);
      if (window.pageYOffset > 10) {
        setNav(false); // This will close the sidebar when scrolling down
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false); // Automatically close the mobile menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <>
      <div
        className={`sticky top-0 z-10 px-6 py-3 shadow-md grid grid-cols-3 items-center bg-white rounded-full transition-transform duration-500 ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
        style={{
          gridTemplateColumns: "auto 1fr auto", // First and last columns take as much space as needed, the middle one takes the rest.
        }}
      >
        <div className="justify-self-start">
          <Link to="/">
            <img
              loading="lazy"
              src={Logo}
              alt="Logo"
              className="w-[90px] h-[90px] object-cover border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full"
            />
          </Link>
        </div>

        {/* Hide this part on smaller screens and show hamburger icon instead */}
        <div
          className={`flex justify-center gap-4 md:gap-9  ${nav ? "hidden" : "hidden md:flex"}`}
        >
          {/* <Link to="/about" className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full">
            About Us
          </Link> */}
          <Link to="/dashboard" className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full">
            Dashboard
          </Link>
          <Link to="/message" className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full">
            Messages
          </Link>
          <Link to="/myjobs" className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full">
            My Jobs
          </Link>
          {/* <Link to="/contact" className="text-black p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full">
            Contact
          </Link> */}
        </div>

        <div className="justify-self-end hidden md:flex gap-2">
          <Link
            to="/login"
            className="px-6 py-3 text-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 text-white bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu Icon: Visible on small screens */}
        <div className="flex justify-end md:hidden ">
          <button onClick={handleNav}>
            {nav ? (
              <FaTimes className="w-6 h-6 text-black shadow-md shadow-[#7d7d7d] border border-black hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-sm" />
            ) : (
              <FaBars className="w-6 h-6 text-black shadow-sm shadow-[#7d7d7d] border hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-sm" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu: Slide-in menu for small screens */}
      <div
        className={`fixed left-0 h-full bg-white border rounded-full shadow-lg ease-in-out duration-500 z-20 transform ${nav ? "translate-x-0" : "-translate-x-[calc(15vh+2rem)]"} md:hidden`}
        style={{
          top: "12%",
          width: "15vh", // Adjust this based on your design preference
          height: "auto", // Let the content dictate the height
          maxHeight: "calc(100vh - 2rem)", // Prevent the sidebar from exceeding the viewport height, accounting for margin
          overflowY: "auto", // Add scroll for content if it overflows
          margin: "1rem", // Add the desired margin around the sidebar
        }}
      >
        <ul className="flex flex-col p-6 mt-6 mb-6">
          <li>
            <Link
              to="/about"
              className="flex justify-center p-1 mb-3 border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full"
              onClick={() => setNav(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="flex justify-center p-1 mb-3 border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full"
              onClick={() => setNav(false)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex justify-center p-1 mb-3 border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full"
              onClick={() => setNav(false)}
            >
              Contact
            </Link>
          </li>
          <p className="flex justify-center text-sm mb-3">————</p>
          <li>
            <Link
              to="/login"
              className="flex justify-center p-1 mb-3 border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full"
              onClick={() => setNav(false)}
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="flex justify-center p-1 bg-black border border-black text-white shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              onClick={() => setNav(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/LogoImg.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useUser } from "../contexts/UserContext";
import {
  MdLogin,
  MdLogout,
  MdPersonAdd,
  MdDashboard,
  MdMessage,
  MdWork,
} from "react-icons/md";


const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [nav, setNav] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();

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
  const handleLogout = () => {
    logout(); // Logout the user
    navigate("/"); // Navigate to the home page after logout
  };

  return (
    <>
      <div
        className={`sticky top-0 px-6 py-3 shadow-md grid grid-cols-3 items-center bg-white rounded-full transition-transform duration-500 ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
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

        <div></div>

        {/* Hide this part on smaller screens and show hamburger icon instead */}
        <div
          className={`flex justify-center gap-4 md:gap-9  ${nav ? "hidden" : "hidden md:flex"}`}
        >
          {user ? (
            <>
              {/* Authenticated User Links */}
              <Link
                to="/dashboard"
                className="text-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                Dashboard
              </Link>
              <Link
                to="/message"
                className="text-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                Messages
              </Link>
              <Link
                to="/myjobs"
                className="text-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                My Jobs
              </Link>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-6 py-3 text-white bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Guest User Links */}
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
            </>
          )}
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
          {/* Conditional rendering based on user authentication status */}
          {user ? (
            <>
              {/* Authenticated User Links */}
              <li className="flex justify-center p-1 mb-3">
                <Link
                  to="/dashboard"
                  className="border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full p-2"
                  onClick={() => setNav(false)}
                >
                  <MdDashboard className="text-lg" />
                </Link>
              </li>
              <li className="flex justify-center p-1 mb-3">
                <Link
                  to="/message"
                  className="border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full p-2"
                  onClick={() => setNav(false)}
                >
                  <MdMessage className="text-lg" />
                </Link>
              </li>
              <li className="flex justify-center p-1 mb-3">
                <Link
                  to="/myjobs"
                  className="border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full p-2"
                  onClick={() => setNav(false)}
                >
                  <MdWork className="text-lg" />
                </Link>
              </li>

              <p className="flex justify-center text-sm mb-3">————</p>
              <li className="flex justify-center p-1 mb-3">
                {/* Logout Button */}
                <button
                  onClick={() => {
                    handleLogout();
                    setNav(false);
                  }}
                  className="border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full p-2"
                >
                  <MdLogout className="text-lg" />
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Guest User Links */}
              <li className="flex justify-center p-1 mb-3">
                <Link
                  to="/login"
                  className="border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full p-2"
                  onClick={() => setNav(false)}
                >
                  <MdLogin className="text-lg" />
                </Link>
              </li>
              <li className="flex justify-center p-1 mb-3">
                <Link
                  to="/signup"
                  className="border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full p-2"
                  onClick={() => setNav(false)}
                >
                  <MdPersonAdd className="text-lg" />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavBar;

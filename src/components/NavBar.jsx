import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="sticky top-0 z-10 justify-center items-stretch bg-white flex flex-col px-16 py-4 border-solid max-md:px-5">
      <div className="justify-between items-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0fa549b20885021e8c4b415ad39129c2b1368281fdbcbf3d7d29440d978cfda?"
          className="aspect-[2.33] object-contain object-center w-[63px] overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div className="justify-between items-center self-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex justify-between gap-5 my-auto">
            <div className="text-black text-base leading-6 grow whitespace-nowrap">
              <Link to="about">About Us</Link>
            </div>
            <div className="text-black text-base leading-6">
              <Link to="help-request">Help Request</Link>
            </div>
            <div className="text-black text-base leading-6">
              <Link to="contact">Contact</Link>
            </div>
            <div className="justify-between items-stretch flex gap-1">
              <div className="text-black text-base leading-6 grow whitespace-nowrap">
                <Link to="map">Map</Link>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fee1f4da4fbc0ac2471ce1f6c2ea6132c2a43490c7dcf7518142e53de96c1a55?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="justify-between items-stretch self-stretch flex gap-4">
            <button className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch px-6 py-3 border-2 border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 max-md:px-5 rounded-full">
              Log In
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
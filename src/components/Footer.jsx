import { Link } from "react-router-dom";
import Logo from "../assets/LogoImg.png";
import "../Footer.css";
import FooterBackground from "../assets/overlapping_circles.svg";

const Footer = () => {
  return (
    <div
      className="footerContainer relative items-stretch bg-white flex w-full flex-col px-16 py-16 pb-3 max-md:max-w-full max-md:px-5"
      style={{
        backgroundImage: `url(${FooterBackground})`,
        backgroundSize: "90%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-8 p-12  max-md:max-w-full max-md:px-5  rounded-xl border border-black shadow-lg shadow-[#7d7d7d]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
              <Link to="/">
                <img
                  loading="lazy"
                  src={Logo}
                  className="object-contain object-center w-[50px] h-[50px] overflow-hidden scale-x-150 scale-y-150 border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full"
                />
              </Link>
              <div className="self-stretch text-black text-sm font-semibold leading-5 mt-8 max-md:max-w-full">
                Address:
              </div>
              <div className="self-stretch text-black text-sm leading-5 mt-1 max-md:max-w-full">
                123, Sample St, London, UK
              </div>
              <div className="self-stretch text-black text-sm font-semibold leading-5 mt-6 max-md:max-w-full">
                Contact:
              </div>
              <div className="self-stretch text-black text-sm leading-5 underline mt-1 max-md:max-w-full">
                1800 123 4567
              </div>
              <div className="self-stretch text-black text-sm leading-5 underline max-md:max-w-full">
                Email: hands.united@email.com
              </div>
              <div className="items-stretch flex w-[168px] max-w-full gap-3 mt-6 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/51ccee6ea62ebeef1ebb6e87c0902ba438e48fa10b851a6a4be37450142ca2a4?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4117019bd4077c68ffdaa93c6b070ce8e1bb91147398de89c3e32453203a0974?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dbefda36a1b21740a0d6101178a9f4767b73664f8928baacee2099b1419cedf?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca22054cbc30cf58b1edaedb525ba9cf34da76d2ab3cf722119440263927673?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7abc729ae4ce0c5052cb1e30d419110e107075654daee5a961d65a853074d1cf?"
                  className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex justify-between gap-5 max-md:mt-10">
              <div className="items-stretch flex grow basis-[0%] md:pl-12 flex-col">
                <Link
                  to="/about"
                  className="flex justify-center bg-white text-black mb-3 p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="flex justify-center bg-white text-black  p-2 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between items-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap">
        <div className="text-black text-sm leading-5">
          © 2023 HandsUnited. All rights reserved.
        </div>
        <div className="items-stretch flex justify-between gap-5">
          <div className="text-black text-sm leading-5 underline grow whitespace-nowrap">
            Privacy Policy
          </div>
          <div className="text-black text-sm leading-5 underline">
            Terms of Service
          </div>
          <div className="text-black text-sm leading-5 underline grow whitespace-nowrap">
            Cookies Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

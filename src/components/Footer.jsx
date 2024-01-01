import '../Footer.css';

const Footer = () => {
  return (
    <div className="footerContainer relative items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
      <div className="footerCircleBg"></div>
        <div className="mt-8 p-12 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a89694dcf241f98fa3d3e204255212441c486cd58285fc16a05369e6071407?"
                className="aspect-[2.33] object-contain object-center w-[63px] overflow-hidden max-w-full self-start"
              />
              <div className="self-stretch text-black text-sm font-semibold leading-5 mt-8 max-md:max-w-full">
                Address:
              </div>
              <div className="self-stretch text-black text-sm leading-5 mt-1 max-md:max-w-full">
                Level 1, 12 Sample St, Sydney NSW 2000
              </div>
              <div className="self-stretch text-black text-sm font-semibold leading-5 mt-6 max-md:max-w-full">
                Contact:
              </div>
              <div className="self-stretch text-black text-sm leading-5 underline mt-1 max-md:max-w-full">
                1800 123 4567
              </div>
              <div className="self-stretch text-black text-sm leading-5 underline max-md:max-w-full">
                Email:
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
              <div className="items-stretch flex grow basis-[0%] flex-col">
                <div className="text-black text-base font-bold leading-6 whitespace-nowrap">
                  Contact
                </div>
                <div className="text-black text-base font-bold leading-6 whitespace-nowrap mt-3">
                  FAQ
                </div>
                <div className="text-black text-base font-bold leading-6 whitespace-nowrap mt-3">
                  Support
                </div>
                <div className="text-black text-base font-bold leading-6 whitespace-nowrap mt-3">
                  Blog
                </div>
                <div className="text-black text-base font-bold leading-6 whitespace-nowrap mt-3">
                  Careers
                </div>
              </div>
              <div className="items-stretch flex grow basis-[0%] flex-col">
                <div className="text-black text-base font-semibold leading-6 whitespace-nowrap">
                  Terms
                </div>
                <div className="text-black text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  Privacy
                </div>
                <div className="text-black text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  Security
                </div>
                <div className="text-black text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  Help
                </div>
                <div className="text-black text-base font-semibold leading-6 whitespace-nowrap mt-3">
                  Feedback
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

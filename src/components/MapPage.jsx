import MapImg1 from "../assets/volunteer_10.png"; // Replace with your actual image path

const MapPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <div
        className="w-full h-[500px] bg-no-repeat bg-cover flex flex-col pl-16 pr-20 py-12 items-start justify-center rounded-2xl"
        style={{ backgroundImage: `url(${MapImg1})` }}
      >
        <div className="w-full">
          <div className="outline-text-white text-6xl font-bold leading-[67.2px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Explore Community Needs
          </div>
          <div className="outline-text-white text-lg leading-7 mt-6 mb-16 max-md:max-w-full max-md:mb-10">
            Discover how to navigate the needs of your community and make a
            difference.
          </div>
        </div>
      </div>{" "}
      <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="self-stretch text-black text-4xl font-bold leading-10 max-md:max-w-full max-md:mt-10">
                Discover Help Requests and Explore Different Areas on the
                Interactive Map
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="self-stretch text-black text-lg leading-7 max-md:max-w-full max-md:mt-10">
                The interactive map in Hands United allows users to easily
                locate help requests in their community. By clicking on markers,
                users can access powerful stories and initiate direct
                communication with those in need. Additionally, the map
                encourages community awareness and involvement by enabling users
                to explore different areas and understand the broader needs of
                their community.
              </div>
            </div>
          </div>
        </div>{" "}
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.78] object-contain object-center w-full overflow-hidden mt-20 mb-10 max-md:max-w-full max-md:mt-10"
        />
      </div>{" "}
      <div className="bg-white flex w-full flex-col px-16 py-12 items-start max-md:max-w-full max-md:px-5">
        <div className="text-black text-5xl font-bold leading-[57.6px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          FAQs
        </div>{" "}
        <div className="text-black text-lg leading-7 w-[768px] max-w-full mt-6">
          Find answers to common questions about navigating the map,
          understanding markers, and interacting with requests.
        </div>{" "}
        <div className="justify-between items-center self-stretch border flex gap-0 mt-20 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            How do I navigate?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3add83d9340164b69574f86e9e46991c84dea68a972a861bce8542afdedca83?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>{" "}
        <div className="justify-between items-center self-stretch border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            What are markers?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3add83d9340164b69574f86e9e46991c84dea68a972a861bce8542afdedca83?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>{" "}
        <div className="justify-between items-center self-stretch border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            How do I respond?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3add83d9340164b69574f86e9e46991c84dea68a972a861bce8542afdedca83?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>{" "}
        <div className="justify-between items-center self-stretch border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            How do I submit?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3add83d9340164b69574f86e9e46991c84dea68a972a861bce8542afdedca83?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>{" "}
        <div className="justify-between items-center self-stretch border flex gap-0 mt-4 px-6 py-5 border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            What happens after submission?
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3add83d9340164b69574f86e9e46991c84dea68a972a861bce8542afdedca83?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>{" "}
        <div className="text-black text-3xl font-bold leading-10 mt-20 max-md:max-w-full max-md:mt-10">
          Still have questions?
        </div>{" "}
        <div className="text-black text-lg leading-7 mt-4 max-md:max-w-full">
          Contact us for further assistance.
        </div>{" "}
        <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-6 mb-10 px-7 py-3 border-solid border-black max-md:px-5">
          Button
        </div>
      </div>
    </div>
  );
};

export default MapPage;

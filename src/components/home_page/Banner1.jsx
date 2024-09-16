import work from "../../assets/home_page/work-1.svg";
import image_1 from "../../assets/home_page/rectangle-1@2x.png";
import image_2 from "../../assets/home_page/rectangle-2@2x.png";
import image_3 from "../../assets/home_page/rectangle-3@2x.png";
import object from "../../assets/home_page/objects@2x.png";
import banner from "../../assets/home_page/banner.png";
const Banner = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:items-center md:px-[6vw] md:mt-10">
        <div id="left" className="px-6 md:px-0 ">
          <button className="flex gap-2 text-[12px] justify-center items-center text-red-theme rounded-full shadow-md p-3 md:text-sm">
            Explore the world!
            <img
              className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] relative overflow-hidden "
              alt=""
              src={work}
            />
          </button>
          <p className="flex flex-col mt-6">
            <p className="flex gap-2">
              <span className=" text-6xl font-inter font-bold md:text-7xl">Travel</span>
              <span className="text-red-theme text-6xl font-inter font-bold md:text-7xl">
                top
              </span>
            </p>
            <span className="text-red-theme text-6xl font-inter font-bold md:text-7xl">
              destination
            </span>
            <span className="text-6xl font-inter font-bold md:text-7xl">of the world</span>
          </p>
          <p className="text-gray-500 mb-6 mt-8 md:text-lg">
          We always make our customer happy by providing <br />
          as many choices as possible 
          </p>
          <div className="flex  gap-4 mt-10">
            <button className="bg-button-color rounded-full px-4 py-3 text-white text-sm hover:font-semibold">
              Get Started
            </button>
            <button className="rounded-full px-4 py-2 text-black shadow-md text-sm">
              Watch Demo
            </button>
          </div>
          <img className="w-8 h-20 mt-6 md:w-12 md:h-36" src={object} alt="" />
        </div>
        <div id="right"></div>
        <img className="md:w-[45vw]" src={banner} alt="" />

      </div>
    </>
  );
};

export default Banner;

{
  /* <div
        id="banner"
        className="flex justify-between p-4 px-24  flex-col gap-0 md:flex-row "
      >
        <div id="left" className="w-[35rem] ">
          <div>
            <button className="flex gap-2 justify-center items-center rounded-full p-3 mt-6 text-red-theme text-[11px] w-auto font-semibold hover:font-bold shadow-md ">
              Explore the world!
              <img
                className="h-[12px] w-[12px] relative overflow-hidden "
                alt=""
                src={work}
              />
            </button>
          </div>
          {/* ====== */
}
//     <div id="content" className="relative inline-block ">
//       <p className="mt-10 flex flex-col ">
//         <span className="text-[12vw] font-bold md:font-inter md:font-semibold text-black md:text-[4vw] ">
//           Travel top
//         </span>
//         <span className="text-[12vw] font-bold md:font-inter md:font-semibold text-red-theme md:text-[4vw]">
//           destination
//         </span>
//         <span className="text-[12vw] font-bold md:font-inter md:font-semibold text-black md:text-[4vw] ">
//           of the world
//         </span>
//       </p>
//     </div>

//     {/* ====== */}
//     <div id="para" className="w-[70%] pt-20">
//       <p className="font-inter  text-light-theme">
//         We always make our customer happy by providing as many choices as
//         possible
//       </p>
//     </div>
//     {/* ======= */}
//     <div id="button" className="hidden md:flex gap-2 pt-7">
//       <button className="flex justify-center items-center bg-button-color rounded-full p-3 text-white text-[0.8vw] w-[7vw] font-inter hover:font-bold">
//         Get Started
//       </button>
//       <button className="flex justify-center items-center rounded-full p-3 text-black shadow-md text-[0.8vw] w-[7vw] font-inter hover:font-bold">
//         Watch Demo
//       </button>
//     </div>
//   </div>

//   <div id="right" className="  md:w-[45.835vw] md:h-[75.318vh] md:pl-28]">
//     <img src={banner} alt="" />
//   </div>
// </div> */}

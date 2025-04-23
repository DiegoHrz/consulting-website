"use client";
import Title from "@/app/components/customTags/Title";
import Wrapper from "@/app/hoc/Wrapper";
import { GiLaurelCrown } from "react-icons/gi";



const Recommendation7: React.FC = () => {
  return (
    <div className="flex w-full flex-col-reverse  md:justify-center  md:flex-row  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px]  flex items-center overflow-hidden mb-4 justify-center ">
          <img src="/brands/brand2.webp" className="object-cover" alt="" />
        </div>
        <div className="flex flex-col pt-1 sm:pt-0">
          <div>
            <span className="font-vollkornSC  tracking-[3px]">Nico E. - </span>
            <span className="text-sm font-vollkorn">
              {" "}
              Ergotherapeut - Gründerin
            </span>
          </div>
          <div className="hidden">
            <Title text="Unternehmensberaterin und Coach" />
          </div>
        </div>
        <div className="flex gap-3 my-2 pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit ">
            <GiLaurelCrown size={20} />
            <p className="text-xs">Top Business </p>
          </div>
          {/* <p className=" rounded-2xl bg-[#FDE3B9] text-[#925908] font-semibold py-1 px-3 w-fit text-xs">
            Top Business{" "}
          </p> */}
        </div>
        <p className="lg:pr-20 font-vollkorn text-[#808080] pt-4 text-justify">
          <span className="md:text-xl text-anna-burgundy font-cabin_sans ">
            {" "}
            “Anna war mir eine große Stütze bei der Erstellung des Business- und
            des Finanzplans und hat mir darüber hinaus ein sehr hilfreiches
            Buchhaltungs-Coaching gegeben.
          </span>
          Ich bin sehr dankbar und glücklich, dass sie mir auch weiterhin für
          Fragen zur Verfügung steht und sie mir die Schritte in die
          Selbstständigkeit derart erleichtert hat.”
        </p>
        {/* <div className="w-full  animate-fade-subtitle pt-6  lg:text-right text-[#0066CC]">
          <a
            href="https://www.schnaider-consulting.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-cabin_sans rounded-lg text-[#0B66C2]  w-fit   font-semibold text-sm hover:underline  duration-700 transition flex items-center gap-1 "
          >
            <IoIosArrowForward color="[#0066CC]" className="block lg:hidden" />
            WEBSITE
            <IoIosArrowForward color="[#0066CC]" className="hidden lg:block" />
          </a>
        </div> */}
      </div>
      <div className="hidden lg:w-1/3 z-[1] min-h-64   rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
        {/* <img
          src="/brands/brand2.webp"
          className=" object-cover hidden lg:block"
          alt=""
        /> */}
         <div className="w-full h-full bg-gradient-to-br from-white to-gray-200 flex items-center justify-center text-gray-500">
          <svg
            className="w-20 h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Wrapper(Recommendation7, "recommendation1");

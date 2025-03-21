"use client";

import Wrapper from "../hoc/Wrapper";
import Title from "./customTags/Title";

interface PitchProps2 {
  image: string;
  title: string;
  text: string;
}

const PitchSecond: React.FC<PitchProps2> = ({ image, title, text }) => {
  return (
    <div className="flex w-full flex-col  md:justify-center  md:flex-row  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6">
      <div className="md:w-1/2">
        <img
          src={image}
          className="rounded-lg shadow-gray-400 shadow-[0px_0px_15px]"
          alt=""
        />
      </div>
      <div className="md:w-1/2 sm:pl-20">
        <Title
          text={title}
          additionalClasses="sm:text-right"
        />
        <p className=" font-vollkorn text-[#808080] pt-4 sm:text-right">
        {text}
        </p>
        <div className="w-full  animate-fade-subtitle pt-8 sm:text-right ">
          <button className="font-cabin_sans rounded-lg text-anna-blue mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition border-anna-blue">
            KONTAKT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wrapper(PitchSecond, "PitchSecond");

"use client";

import Wrapper from "../hoc/Wrapper";
import Title from "./customTags/Title";

interface PitchProps {
  image: string;
  title: string;
  text: string;
}

const Pitch: React.FC<PitchProps> = ({ image, title, text }) => {
  return (
    <div className="flex w-full flex-col-reverse  md:justify-center  md:flex-row  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 ">
      <div className="md:w-1/2 ">
        <Title text={title} />
        <p className="sm:pr-20 font-vollkorn text-[#808080] pt-4 ">{text}</p>
        <div className="w-full  animate-fade-subtitle pt-8">
          <button className="font-cabin_sans rounded-lg text-anna-blue mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition border-anna-blue">
            BUNCHUNG
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={image}
          className=" rounded-lg shadow-gray-400 shadow-[0px_0px_15px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Pitch, "pitch");

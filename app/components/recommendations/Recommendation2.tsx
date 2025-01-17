"use client";
import { GiLaurelCrown } from "react-icons/gi";

import Wrapper from "../../hoc/Wrapper";
import Title from "../customTags/Title";


const Recommendation2: React.FC = () => {
  return (
    <div className="flex w-full flex-col-reverse  md:justify-center  md:flex-row-reverse  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3 ">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px]  flex items-center overflow-hidden mb-4 ">
          <img
            src="/brands/brand1.avif"
            className="  h-fit object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col lg:pl-20 ml-auto">
          <div className="ml-auto" >
            <span className="font-vollkornSC  tracking-[3px]">
            Julia Knoll -{" "}
            </span>
            <span className="text-sm font-vollkorn">Founder</span>
          </div>
          <div className="hidden">
            <Title text="Unternehmensberaterin und Coach" additionalClasses="text-right" />
          </div>
        </div>
        <div className="flex gap-3 my-2 lg:pl-20 w-full">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit lg:ml-auto">
            <GiLaurelCrown size={20} />
            <p className="text-xs">Top Business </p>
          </div>
          {/* <p className=" rounded-2xl bg-[#FDE3B9] text-[#925908] font-semibold py-1 px-3 w-fit text-xs">
            Top Business{" "}
          </p> */}
        </div>
        <p className="lg:pl-20 font-vollkorn text-[#808080] pt-4 text-justify">
        Lernbegleitung und astro-psychologisches Coaching: “Frau Schenk habe ich als sehr kompetente Beraterin in ihrem Bereich wahrgenommen. Sie hat mich bei der Fertigstellung des Gründerzuschusses unterstützt und stand mir jederzeit mit Rat und Tat zur Seite. Jederzeit reagierte sie da hoc auf meine Fragen und Nachrichten und antwortete sofort. Mit ihrer freundlichen und ruhigen Art schaffte sie es, mich jedes Mal zu beruhigen und zu motivieren und stellte damit wichtige Weichen für meine Gründung und besonders für den Buisness- und Finanzplan. Ich danke Frau Schenk sehr und kann sie ohne Zögern herzlichst weiterempfehlen.
          <span className="text-xl text-[#C2A964] font-cabin_sans ">
            {" "}

          </span>
        </p>
        <div className="w-full  animate-fade-subtitle pt-8 lg:pl-20 lg:text-right">
          <button className="font-cabin_sans rounded-lg text-anna-blue  w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition border-anna-blue ">
            BUNCHUNG
          </button>
        </div>
      </div>
      <div className="hidden lg:w-1/3 z-[1]   rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-4 lg:flex items-center overflow-hidden">
        <img
          src="/brands/brand1.avif"
          className="  h-fit object-cover hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation2, "recommendation1");

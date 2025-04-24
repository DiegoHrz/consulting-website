"use client";
import Title from "@/app/components/customTags/Title";
import Wrapper from "@/app/hoc/Wrapper";
import { GiLaurelCrown } from "react-icons/gi";


import { IoIosArrowForward } from "react-icons/io";

const Recommendation2: React.FC = () => {
  return (
    <div className="flex w-full flex-col-reverse  md:justify-center  md:flex-row-reverse  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px]  flex items-center overflow-hidden mb-4 justify-center bg-[#FBFAF8]">
          <img src="/brands/brand1.avif" className=" object-cover" alt="" />
        </div>
        <div className="flex flex-col lg:pl-20 pt-1 sm:pt-0">
          <div className="lg:ml-auto">
            <span className="font-vollkornSC  tracking-[3px]">
              julia knoll -{" "}
            </span>
            <span className="text-sm font-vollkorn">Gründerin</span>
          </div>
          <div className="hidden">
            <Title
              text="Unternehmensberaterin und Coach"
              additionalClasses="text-right"
            />
          </div>
        </div>
        <div className="flex gap-3 my-2 lg:pl-20 w-full pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit lg:ml-auto">
            <GiLaurelCrown size={20} />
            <p className="text-xs">Best Work Ethic </p>
          </div>
          {/* <p className=" rounded-2xl bg-[#FDE3B9] text-[#925908] font-semibold py-1 px-3 w-fit text-xs">
            Top Business{" "}
          </p> */}
        </div>
        <p className="lg:pl-20 font-vollkorn text-[#808080] pt-4 text-justify">
          Lernbegleitung und astro-psychologisches Coaching: “Frau Schenk habe
          ich als sehr kompetente Beraterin in ihrem Bereich wahrgenommen. Sie
          hat mich bei der Fertigstellung des Gründerzuschusses unterstützt und
          stand mir jederzeit mit Rat und Tat zur Seite. Jederzeit reagierte sie
          da hoc auf meine Fragen und Nachrichten und antwortete sofort. Mit
          ihrer freundlichen und ruhigen Art schaffte sie es, mich jedes Mal zu
          beruhigen und zu motivieren und
          <span className="text-xl text-[#020100] font-cabin_sans ">
            {" "}
            stellte wichtige Weichen für meine Gründung{" "}
          </span>
          und besonders für den Buisness- und Finanzplan. Ich danke Frau Schenk
          sehr und kann sie ohne Zögern herzlichst weiterempfehlen.
        </p>
        <div className="w-full  animate-fade-subtitle pt-6 lg:pr-auto lg:text-right flex lg:justify-end">
          <a
            href="https://www.juliaknoll.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-cabin_sans rounded-lg text-[#0B66C2]  w-fit   font-semibold text-sm hover:underline  duration-700 transition flex items-center gap-1 "
          >
            <IoIosArrowForward color="[#0066CC]" />
            WEBSITE
          </a>
        </div>
      </div>
      <div className="hidden lg:w-1/3 z-[1]   rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
        <img
          src="/brands/brand1.avif"
          className="   object-cover hidden lg:block w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation2, "recommendation2");

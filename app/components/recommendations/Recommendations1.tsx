"use client";
import { GiLaurelCrown } from "react-icons/gi";

import Wrapper from "../../hoc/Wrapper";
import Title from "../customTags/Title";

const Recommendation1: React.FC = () => {
  return (
    <div className="flex w-full flex-col-reverse  md:justify-center  md:flex-row  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3 ">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px]  flex items-center overflow-hidden mb-4">
          <img
            src="/brands/brand2.webp"
            className="  h-fit object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <div>
            <span className="font-vollkornSC  tracking-[3px]">
              Sylvia Schnaider -{" "}
            </span>
            <span className="text-sm font-vollkorn">Founder</span>
          </div>
          <div className="hidden">
            <Title text="Unternehmensberaterin und Coach" />
          </div>
        </div>
        <div className="flex gap-3 my-2">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit ">
            <GiLaurelCrown size={20} />
            <p className="text-xs">Top Business </p>
          </div>
          {/* <p className=" rounded-2xl bg-[#FDE3B9] text-[#925908] font-semibold py-1 px-3 w-fit text-xs">
            Top Business{" "}
          </p> */}
        </div>
        <p className="lg:pr-20 font-vollkorn text-[#808080] pt-4 text-justify">
          Anna Schenk hat mich mit unglaublich viel Engagement und Herzblut bei
          der Gründung meines Unternehmens unterstützt.
          <span className="text-xl text-[#C2A964] font-cabin_sans ">
            {" "}
            Dank ihrer Expertise{" "}
          </span>
          und Zuverlässigkeit konnte ich einen fundierten und professionellen
          Businessplan sowie eine solide Finanzplanung erstellen. Anna war
          jederzeit verfügbar, hat schnell und effizient gearbeitet und war
          dabei stets offen für meine Fragen und Anliegen. Ihre Unterstützung
          war für mich eine große Bereicherung, und ich bin ihr dafür sehr
          dankbar. Ich kann sie uneingeschränkt weiterempfehlen!
        </p>
        <div className="w-full  animate-fade-subtitle pt-8 lg:pl-20 lg:text-right">
          <a
            href="https://www.schnaider-consulting.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 font-cabin_sans rounded-lg text-anna-blue  w-fit border-2  font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition border-anna-blue "
          >
            KONTAK
          </a>
        </div>
      </div>
      <div className="hidden lg:w-1/3 z-[1]   rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-4 lg:flex items-center overflow-hidden">
        <img
          src="/brands/brand2.webp"
          className="  h-fit object-cover hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation1, "recommendation1");

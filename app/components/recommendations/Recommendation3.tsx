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
            src="/brands/brand3.png"
            className="  h-fit object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <div>
            <span className="font-vollkornSC  tracking-[3px]">
              Liliya Kurzawa -{" "}
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
          Ich habe Frau Schenk bei der Beantragung des Gründungszuschusses bei
          der Bundesagentur für Arbeit kennengelernt. Die Arbeit mit Frau Schenk
          war stets professionell, zuverlässig und freundlich. Sie hat mich bei
          jeder Phase meines Antrags unterstützt, sei es fachlich als auch
          emotional/psychisch. Da die Antragsphase sehr nervenaufreibend ist,
          hat mich gerade das Zwischenmenschliche bei Frau Schenk überzeugt. Am
          Ende haben wir Erfolg gehabt, sodass ich den Gründungszuschuss, nach
          gemeinsamer harter Arbeit, auch bewilligt und ausgezahlt bekommen
          habe. Ich würde Frau Schenk jeder Zeit wieder empfehlen. Wie bereits
          erwähnt, ist sie nicht nur fachlich kompetent, sondern auch in der
          Zusammenarbeit sehr hilfsbereit, geduldig und empathisch. Vielen Dank
          nochmal!
          <span className="text-xl text-[#C2A964] font-cabin_sans "></span>
        </p>
        <div className="w-full  animate-fade-subtitle pt-8">
          <button className="font-cabin_sans rounded-lg text-anna-blue mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition border-anna-blue">
            BUNCHUNG
          </button>
        </div>
      </div>
      <div className="hidden lg:w-1/3 z-[1]   rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-4 lg:flex items-center overflow-hidden">
        <img
          src="/brands/brand3.png"
          className="  h-fit object-cover hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation1, "recommendation1");

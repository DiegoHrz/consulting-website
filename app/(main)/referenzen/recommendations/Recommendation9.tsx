"use client";
import Title from "@/app/components/customTags/Title";
import Wrapper from "@/app/hoc/Wrapper";
import { GiLaurelCrown } from "react-icons/gi";

const Recommendation9: React.FC = () => {
  return (
    <div className="flex w-full flex-col-reverse  md:justify-center  md:flex-row  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        {/* <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px]  flex items-center overflow-hidden mb-4 justify-center bg-[#FBFAF8]">
          <img src="/brands/brand1.avif" className=" object-cover" alt="" />
        </div> */}
        <div className="lg:hidden w-full py-[15%] relative bg-gradient-to-br from-white to-gray-100 mb-8">
          <svg
            className="absolute top-0 left-0 w-full h-full p-4 sm:p-6 md:p-10  text-gray-400 rounded-lg shadow-gray-400 shadow-[0px_0px_15px] overflow-hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div className="flex flex-col pt-1 sm:pt-0">
          <div>
            <span className="font-vollkornSC  tracking-[3px]">German Ohl </span>
            <span className="text-sm font-vollkorn">
              - Bootsbau - Gründerin
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
          {'"'}Ich möchte meine hohe Anerkennung für Anna Schenk aussprechen,
          die mir in allen Bereichen meiner bevorstehenden Selbständigkeit und
          insbesondere in der Gründungsphase grandiose Unterstützung geboten
          hat. Von der ersten Beratung an hat Anna gezeigt, dass sie über ein
          tiefes Verständnis für die Herausforderungen und Chancen in der
          Branche (Bootshandel & Service) verfügt. Ihre Expertise in
          Marktanalysen und Geschäftsstrategien war äußerst hilfreich, um meine
          Vision klar zu definieren und realistische Ziele zu setzen. Besonders
          hervorheben möchte ich ihre Fähigkeit, komplexe Informationen
          verständlich aufzubereiten und maßgeschneiderte Lösungen zu
          entwickeln. Sie hat nicht nur wertvolle Tipps zur Finanzierung und
          Budgetplanung gegeben, sondern auch kreative Ansätze zur Kundenakquise
          und -bindung vermittelt. Darüber hinaus zeichnet sich Anna durch ihre
          hohe Einsatzbereitschaft und ihr Engagement aus. Sie war jederzeit
          erreichbar und kam auch proaktiv mit Ideen auf mich zu. Das alles hat
          mir das Gefühl gegeben, in besten Händen zu sein.
          <span className="md:text-xl text-anna-maroon font-cabin_sans ">
            {" "}
            Ich bin überzeugt, dass ihre professionelle Unterstützung zu einer
            erfolgreichen Selbständigkeit maßgeblich beitragen wird.
          </span>
          Ich kann Anna Schenk uneingeschränkt empfehlen, danke ihr herzlich für
          ihre exzellenten Beratungen & Betreuung und wünsche ihr alles Gute
          Beste Grüße{'"'}
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
      <div className="hidden lg:w-1/3 z-[1] min-h-64  rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
        {/* <img
          src="/brands/brand2.webp"
          className=" object-cover hidden lg:block"
          alt=""
        /> */}
        <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center text-gray-500">
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

export default Wrapper(Recommendation9, "recommendation1");

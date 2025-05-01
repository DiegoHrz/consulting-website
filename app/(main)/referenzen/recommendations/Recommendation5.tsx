"use client";
import Title from "@/app/components/customTags/Title";
import Wrapper from "@/app/hoc/Wrapper";
import { GiLaurelCrown } from "react-icons/gi";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Recommendation5: React.FC = () => {
  const { lang } = useLanguageStore();

  const recommendationText = {
    de: {
      name: "denis bares",
      position: "Gründer",
      role: "Inhaber Edelmetallhandel",
      text: {
        part1: "“Anna hat mich fachlich sehr gut mit meinem Businessplan betreut. Bei Fragen war sie stets hilfsbereit. Insbesondere im Finanzteil hat sie mir sehr geholfen, mich auf das Bankengespräch vorzubereiten.",
        highlight: "Ich bin sehr zufrieden und die Finanzierung ist durchgegangen.”",
      }
    },
    en: {
      name: "denis bares",
      position: "Founder",
      role: "Owner Precious Metals Trade",
      text: {
        part1: "“Anna provided me with excellent professional support for my business plan. She was always helpful with any questions. She particularly helped me a lot with the financial part to prepare for the bank meeting.",
        highlight: "I am very satisfied and the financing went through.”",
      }
    }
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
      {/* <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px]  flex items-center overflow-hidden mb-4 justify-center bg-[#FBFAF8]">
          <img src="/brands/brand1.avif" className=" object-cover" alt="" />
        </div> */}
        <div className="lg:hidden w-full py-[15%] relative bg-gradient-to-br from-white to-gray-100 mb-8">
          <svg
            className="absolute top-0 left-0 w-full h-full p-4 sm:p-6 md:p-10 text-gray-400 rounded-lg shadow-gray-400 shadow-[0px_0px_15px] overflow-hidden"
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
            <span className="font-vollkornSC tracking-[3px]">{t.name}</span>
            <span className="mx-1"> - </span>
            <span className="text-sm font-vollkorn">{t.position}</span>
          </div>
          <div className="hidden">
            <Title text={t.role} />
          </div>
        </div>
        <div className="flex gap-3 my-2 pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit">
            <GiLaurelCrown size={20} />
            <p className="text-xs">{t.role}</p>
          </div>
        </div>
        <p className="lg:pr-20 font-vollkorn text-[#808080] pt-4 text-justify">
          {t.text.part1}
          <span className="md:text-xl text-blue-800 font-cabin_sans">
            {" "}
            {t.text.highlight}
          </span>
        </p>
      </div>
      <div className="hidden lg:w-1/3 z-[1] min-h-64 justify-center rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
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

export default Wrapper(Recommendation5, "recommendation1");
"use client";

import Wrapper from "@/app/hoc/Wrapper";
import { useLanguageStore } from "@/app/store/useLanguageStore";
import { GiLaurelCrown } from "react-icons/gi";

const Recommendation7: React.FC = () => {
  const { lang } = useLanguageStore();

  const recommendationText = {
    de: {
      name: "nico e.",
      position: "Gründer",
      role: "Ergotherapeut",
      text: {
        part1: "Anna war mir eine große Stütze bei der Erstellung des Business- und des Finanzplans und hat mir darüber hinaus ein sehr hilfreiches Buchhaltungs-Coaching gegeben.",
        highlight: "",
        part2: "Ich bin sehr dankbar und glücklich, dass sie mir auch weiterhin für Fragen zur Verfügung steht und sie mir die Schritte in die Selbstständigkeit derart erleichtert hat.",
      },
    },
    en: {
      name: "nico e.",
      position: "Founder",
      role: "Occupational therapist",
      text: {
        part1: "Anna was a great support in creating the business and financial plan and also gave me very helpful accounting coaching.",
        highlight: "",
        part2: "I am very grateful and happy that she continues to be available for questions and has made the steps to self-employment so much easier for me.",
      },
    },
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        {/* Contenedor de imagen SVG (mobile) */}
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

        {/* Nombre y posición */}
        <div className="flex flex-col pt-1 sm:pt-0">
          <div>
            <span className="font-vollkornSC tracking-[3px]">{t.name}</span>
            <span className="mx-1"> - </span>
            <span className="text-sm font-vollkorn">{t.position}</span>
          </div>
        </div>

        {/* Badge de rol */}
        <div className="flex gap-3 my-2 pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit">
            <GiLaurelCrown size={20} />
            <p className="text-xs">{t.role}</p>
          </div>
        </div>

        {/* Texto del testimonio */}
        <p className="lg:pr-20 font-vollkorn text-[#808080] pt-4 text-justify">
          <span className="md:text-xl text-anna-burgundy font-cabin_sans">
            {t.text.part1}{" "}
          </span>
          {t.text.part2}
        </p>
      </div>

      {/* Contenedor de imagen SVG (desktop) */}
      <div className="hidden lg:w-1/3 z-[1] min-h-64 rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
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

export default Wrapper(Recommendation7, "recommendation1");
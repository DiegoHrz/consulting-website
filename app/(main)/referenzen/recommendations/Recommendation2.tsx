"use client";
import Title from "@/app/components/customTags/Title";
import Wrapper from "@/app/hoc/Wrapper";
import { GiLaurelCrown } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Recommendation2: React.FC = () => {
  const { lang } = useLanguageStore();

  const recommendationText = {
    de: {
      name: "julia knoll",
      position: "Gründerin",
      role: "Lernbegleitung und astro-psychologisches Coaching",
      text: {
        part1: "“Frau Schenk habe ich als sehr kompetente Beraterin in ihrem Bereich wahrgenommen. Sie hat mich bei der Fertigstellung des Gründerzuschusses unterstützt und stand mir jederzeit mit Rat und Tat zur Seite. Jederzeit reagierte sie da hoc auf meine Fragen und Nachrichten und antwortete sofort. Mit ihrer freundlichen und ruhigen Art schaffte sie es, mich jedes Mal zu beruhigen und zu motivieren und",
        highlight: "stellte wichtige Weichen für meine Gründung",
        part2: "und besonders für den Buisness- und Finanzplan. Ich danke Frau Schenk sehr und kann sie ohne Zögern herzlichst weiterempfehlen."
      },
      website: "WEBSITE"
    },
    en: {
      name: "julia knoll",
      position: "Founder",
      role: "Learning support and astro-psychological coaching",
      text: {
        part1: "I perceived Ms. Schenk as a highly competent consultant in her field. She supported me in completing the start-up grant and was always there for me with advice and action. She responded immediately to my questions and messages at all times. With her friendly and calm manner, she managed to calm and motivate me every time and",
        highlight: "set important courses for my founding",
        part2: "and especially for the business and financial plan. I thank Ms. Schenk very much and can recommend her without hesitation."
      },
      website: "WEBSITE"
    }
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row-reverse overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px] flex items-center overflow-hidden mb-4 justify-center bg-[#FBFAF8]">
          <img src="/brands/brand1.avif" className="object-cover" alt="" />
        </div>
        <div className="flex flex-col lg:pl-20 pt-1 sm:pt-0">
          <div className="lg:ml-auto">
            <span className="font-vollkornSC tracking-[3px]">
              {t.name} -{" "}
            </span>
            <span className="text-sm font-vollkorn">{t.position}</span>
          </div>
          <div className="hidden">
            <Title
              text={t.role}
              additionalClasses="text-right"
            />
          </div>
        </div>
        <div className="flex gap-3 my-2 lg:pl-20 w-full pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit lg:ml-auto">
            <GiLaurelCrown size={20} />
            <p className="text-xs">
              {t.role}
            </p>
          </div>
        </div>
        <p className="lg:pl-20 font-vollkorn text-[#808080] pt-4 text-justify">
          {t.text.part1}
          <span className="text-xl text-[#020100] font-cabin_sans">
            {" "}
            {t.text.highlight}{" "}
          </span>
          {t.text.part2}
        </p>
        <div className="w-full animate-fade-subtitle pt-6 lg:pr-auto lg:text-right flex lg:justify-end">
          <a
            href="https://www.juliaknoll.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-cabin_sans rounded-lg text-[#0B66C2] w-fit font-semibold text-sm hover:underline duration-700 transition flex items-center gap-1"
          >
            <IoIosArrowForward color="[#0066CC]" />
            {t.website}
          </a>
        </div>
      </div>
      <div className="hidden lg:w-1/3 z-[1] rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
        <img
          src="/brands/brand1.avif"
          className="object-cover hidden lg:block w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation2, "recommendation2");
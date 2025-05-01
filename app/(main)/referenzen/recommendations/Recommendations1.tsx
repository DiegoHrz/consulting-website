"use client";
import Title from "@/app/components/customTags/Title";
import Wrapper from "@/app/hoc/Wrapper";
import { GiLaurelCrown } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Recommendation1: React.FC = () => {
  const { lang } = useLanguageStore();

  const recommendationText = {
    de: {
      name: "sylvia schnaider",
      position: "Gründerin",
      role: "Unternehmensberaterin und Coach",
      text: {
        part1: "Anna Schenk hat mich mit unglaublich viel Engagement und Herzblut bei der Gründung meines Unternehmens unterstützt.",
        highlight: "Dank ihrer Expertise",
        part2: "und Zuverlässigkeit konnte ich einen fundierten und professionellen Businessplan sowie eine solide Finanzplanung erstellen. Anna war jederzeit verfügbar, hat schnell und effizient gearbeitet und war dabei stets offen für meine Fragen und Anliegen. Ihre Unterstützung war für mich eine große Bereicherung, und ich bin ihr dafür sehr dankbar. Ich kann sie uneingeschränkt weiterempfehlen!"
      },
      website: "WEBSITE"
    },
    en: {
      name: "sylvia schnaider",
      position: "Founder",
      role: "Business consultant and coach",
      text: {
        part1: "Anna Schenk supported me with incredible commitment and dedication in founding my company.",
        highlight: "Thanks to her expertise",
        part2: "and reliability, I was able to create a well-founded and professional business plan as well as solid financial planning. Anna was always available, worked quickly and efficiently, and was always open to my questions and concerns. Her support was a great enrichment for me, and I am very grateful to her for that. I can recommend her without reservation!"
      },
      website: "WEBSITE"
    }
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px] flex items-center overflow-hidden mb-4 justify-center">
          <img src="/brands/brand2.webp" className="object-cover" alt="" />
        </div>
        <div className="flex flex-col pt-1 sm:pt-0">
          <div>
            <span className="font-vollkornSC tracking-[3px]">
              {t.name} -{" "}
            </span>
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
          <span className="text-xl text-[#C2A964] font-cabin_sans">
            {" "}
            {t.text.highlight}{" "}
          </span>
          {t.text.part2}
        </p>
        <div className="w-full animate-fade-subtitle pt-6 lg:text-right text-[#0066CC]">
          <a
            href="https://www.schnaider-consulting.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-cabin_sans rounded-lg text-[#0B66C2] w-fit font-semibold text-sm hover:underline duration-700 transition flex items-center gap-1"
          >
            <IoIosArrowForward color="[#0066CC]" className="block lg:hidden" />
            {t.website}
            <IoIosArrowForward color="[#0066CC]" className="hidden lg:block" />
          </a>
        </div>
      </div>
      <div className="hidden lg:w-1/3 z-[1] rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
        <img
          src="/brands/brand2.webp"
          className="object-cover hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation1, "recommendation1");
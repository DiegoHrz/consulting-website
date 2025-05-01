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
      name: "andreas haug",
      position: "",
      role: "Architekt",
      text: {
        part1: "Bei Frau Schenk haben wir an einer persönlichen Online-Schulung über das Programm Lexware teilgenommen. Sie hat uns den Inhalt des Programmes in ihrer menschlich freundlichen Art,",
        highlight: "sehr kompetent, gut strukturiert und gegliedert vermittelt.",
        part2: "Auf nach der Schulung auftauchende Fragen unsererseits, hatte sie stets unverzüglich und zuverlässig geantwortet. Wir bedanken uns bei Frau Schenk und können sie auf jeden Fall weiterempfehlen."
      },
      website: "WEBSITE"
    },
    en: {
      name: "andreas haug",
      position: "",
      role: "Architect",
      text: {
        part1: "With Ms. Schenk, we participated in a personal online training about the Lexware program. In her friendly and personable manner, she taught us the content of the program",
        highlight: "very competently, well-structured and clearly organized.",
        part2: "She always responded promptly and reliably to any questions that arose after the training. We thank Ms. Schenk and can definitely recommend her."
      },
      website: "WEBSITE"
    }
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row-reverse overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px] flex items-center overflow-hidden mb-4 justify-center bg-[#333333]">
          <img src="/brands/brand4.png" className="object-cover" alt="" />
        </div>
        <div className="flex flex-col lg:pl-20 pt-1 sm:pt-0">
          <div className="lg:ml-auto">
            <span className="font-vollkornSC tracking-[3px]">
              {t.name}
            </span>
            {t.position && (
              <>
                <span className="mx-1"> - </span>
                <span className="text-sm font-vollkorn">{t.position}</span>
              </>
            )}
          </div>
          <div className="hidden">
            <Title
              text={t.role}
              additionalClasses="text-right"
            />
          </div>
        </div>
        <div className="flex gap-3 my-2 lg:pl-20 w-full pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#FDE3B9] text-[#925908] font-semibold py-1 px-3 w-fit lg:ml-auto">
            <GiLaurelCrown size={20} />
            <p className="text-xs">{t.role}</p>
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
        <div className="w-full animate-fade-subtitle pt-6 lg:pl-20 lg:text-right flex lg:justify-end">
          <a
            href="https://architekturbuero-haug.de/"
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
          src="/brands/brand4.png"
          className="object-cover hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation2, "recommendation1");
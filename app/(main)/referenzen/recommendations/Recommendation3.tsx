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
      name: "liliya kurzawa",
      position: "Gründerin",
      role: "Psychologische Beratung",
      text: {
        part1: "Ich habe Frau Schenk bei der Beantragung des Gründungszuschusses bei der Bundesagentur für Arbeit kennengelernt. Die Arbeit mit Frau Schenk war stets professionell, zuverlässig und freundlich. Sie hat mich bei jeder Phase meines Antrags unterstützt, sei es fachlich als auch emotional/psychisch. Da die Antragsphase sehr nervenaufreibend ist, hat mich gerade das Zwischenmenschliche bei Frau Schenk überzeugt. Am Ende haben wir Erfolg gehabt,",
        highlight: "sodass ich den Gründungszuschuss, nach gemeinsamer harter Arbeit, auch bewilligt und ausgezahlt bekommen habe.",
        part2: "Ich würde Frau Schenk jeder Zeit wieder empfehlen. Wie bereits erwähnt, ist sie nicht nur fachlich kompetent, sondern auch in der Zusammenarbeit sehr hilfsbereit, geduldig und empathisch. Vielen Dank nochmal!"
      },
      website: "WEBSITE"
    },
    en: {
      name: "liliya kurzawa",
      position: "Founder",
      role: "Psychological Counseling",
      text: {
        part1: "I met Ms. Schenk when applying for the start-up grant at the Federal Employment Agency. Working with Ms. Schenk was always professional, reliable and friendly. She supported me in every phase of my application, both professionally and emotionally/psychologically. Since the application phase is very nerve-wracking, it was particularly the interpersonal aspect with Ms. Schenk that convinced me. In the end, we were successful,",
        highlight: "so that I received the start-up grant after our hard work together.",
        part2: "I would recommend Ms. Schenk again at any time. As already mentioned, she is not only professionally competent, but also very helpful, patient and empathetic in her cooperation. Thank you again!"
      },
      website: "WEBSITE"
    }
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px] flex items-center overflow-hidden mb-4 justify-center">
          <img src="/brands/brand3.png" className="object-cover" alt="" />
        </div>
        <div className="flex flex-col pt-1 sm:pt-0">
          <div>
            <span className="font-vollkornSC tracking-[3px]">
              {t.name}
            </span>
            <span className="mx-1"> - </span>
            <span className="text-sm font-vollkorn">{t.position}</span>
          </div>
          <div className="hidden">
            <Title text={t.role} />
          </div>
        </div>
        <div className="flex gap-3 my-2 pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#FDE3B9] text-[#925908] font-semibold py-1 px-3 w-fit">
            <GiLaurelCrown size={20} />
            <p className="text-xs">{t.role}</p>
          </div>
        </div>
        <p className="lg:pr-20 font-vollkorn text-[#808080] pt-4 text-justify">
          {t.text.part1}
          <span className="text-xl text-[#A3DED1] font-cabin_sans">
            {" "}
            {t.text.highlight}{" "}
          </span>
          {t.text.part2}
        </p>
        <div className="w-full animate-fade-subtitle pt-6 lg:text-right">
          <a
            href="https://www.meingedankengarten.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 font-cabin_sans rounded-lg text-[#0066cc] w-fit font-semibold text-sm hover:underline duration-700 transition flex items-center gap-1"
          >
            <IoIosArrowForward color="[#0066CC]" className="block lg:hidden" />
            {t.website}
            <IoIosArrowForward color="[#0066CC]" className="hidden lg:block" />
          </a>
        </div>
      </div>
      <div className="hidden lg:w-1/3 z-[1] rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
        <img
          src="/brands/brand3.png"
          className="object-cover hidden lg:block"
          alt=""
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation1, "recommendation1");
"use client";
import Wrapper from "@/app/hoc/Wrapper";
import { useLanguageStore } from "@/app/store/useLanguageStore";
import { GiLaurelCrown } from "react-icons/gi";
import Title from "@/app/components/customTags/Title";

const Recommendation8: React.FC = () => {
  const { lang } = useLanguageStore();

  const recommendationText = {
    de: {
      name: "christina hüttner",
      position: "Gründerin",
      role: "Freie Rede und Coaching",
      text: {
        part1: "Ich bin unglaublich dankbar, Anna als Gründungsberaterin während des gesamten Prozesses zum Gründungszuschuss an meiner Seite gehabt zu haben. Anna ist super zuverlässig, mega motiviert, kennt sich extrem gut aus und bleibt dran bis du deinen Zuschuss erhältst, du kannst dich immer auf sie verlassen. Sie gibt dir in wirklich allen Bereichen und sogar darüber hinaus wertvolle Tipps und du bekommst von ihr außergewöhnlich schnelle Antworten auf all deine Fragen.",
        highlight: "Sie unterstützt dich einfach vollkommen. Ich habe mich mit ihr jederzeit sehr wohl gefühlt und ohne sie wäre ich schier verzweifelt.",
        part2: "Lass dir die Gelegenheit nicht entgehen, sie für einen erfolgreichen Antrag an deiner Seite zu haben. Menschlich und fachlich einfach wunderbar!",
      },
    },
    en: {
      name: "christina hüttner",
      position: "Founder",
      role: "Public Speaking and Coaching",
      text: {
        part1: "I am incredibly grateful to have Anna as a startup consultant by my side throughout the entire startup grant process. Anna is super reliable, mega motivated, extremely knowledgeable and stays with you until you receive your grant, you can always count on her. She gives you valuable tips in absolutely all areas and even beyond, and you get exceptionally quick answers to all your questions.",
        highlight: "She simply supports you completely. I always felt very comfortable with her and without her I would have been utterly desperate.",
        part2: "Don't miss the opportunity to have her by your side for a successful application. Simply wonderful, both personally and professionally!",
      },
    },
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row-reverse overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        {/* Mobile Image Container */}
        <div className="lg:hidden z-[1] rounded-lg shadow-gray-400 shadow-[0px_0px_15px] flex items-center overflow-hidden mb-4 justify-center bg-[#FBFAF8]">
          <img 
            src="/brands/brand8.jpg" 
            className="object-cover w-full h-full" 
            alt={t.name}
          />
        </div>

        {/* Name and Position */}
        <div className="flex flex-col lg:pl-20 pt-1 sm:pt-0">
          <div className="lg:ml-auto">
            <span className="font-vollkornSC tracking-[3px]">
              {t.name}
            </span>
            <span className="mx-1"> - </span>
            <span className="text-sm font-vollkorn">{t.position}</span>
          </div>
          {/* Hidden Title (preserved from original) */}
          <div className="hidden">
            <Title
              text={lang === 'de' ? "Unternehmensberaterin und Coach" : "Business Consultant and Coach"}
              additionalClasses="text-right"
            />
          </div>
        </div>

        {/* Role Badge */}
        <div className="flex gap-3 my-2 lg:pl-20 w-full pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit lg:ml-auto">
            <GiLaurelCrown size={20} />
            <p className="text-xs">{t.role}</p>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="lg:pl-20 font-vollkorn text-[#808080] pt-4 text-justify">
          {t.text.part1}
          <span className="md:text-xl text-anna-gray-light font-cabin_sans">
            {" "}
            {t.text.highlight}{" "}
          </span>
          {t.text.part2}
        </p>
      </div>

      {/* Desktop Image Container */}
      <div className="hidden lg:w-1/3 z-[1] min-h-64  rounded-full shadow-gray-400 shadow-[0px_0px_15px] border-2 lg:flex items-center overflow-hidden max-h-[282.5px]">
        <img
          src="/brands/brand8.jpg"
          className="   object-cover hidden lg:block w-full h-1/2"
          alt={t.name}
        />
      </div>
    </div>
  );
};

export default Wrapper(Recommendation8, "recommendation1");
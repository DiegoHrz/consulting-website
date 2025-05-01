"use client";
import Wrapper from "@/app/hoc/Wrapper";
import { useLanguageStore } from "@/app/store/useLanguageStore";
import { GiLaurelCrown } from "react-icons/gi";
import Title from "@/app/components/customTags/Title";

const Recommendation9: React.FC = () => {
  const { lang } = useLanguageStore();

  const recommendationText = {
    de: {
      name: "german ohl",
      position: "Gründer",
      role: "Bootsbau",
      text: {
        part1: `"Ich möchte meine hohe Anerkennung für Anna Schenk aussprechen, die mir in allen Bereichen meiner bevorstehenden Selbständigkeit und insbesondere in der Gründungsphase grandiose Unterstützung geboten hat. Von der ersten Beratung an hat Anna gezeigt, dass sie über ein tiefes Verständnis für die Herausforderungen und Chancen in der Branche (Bootshandel & Service) verfügt. Ihre Expertise in Marktanalysen und Geschäftsstrategien war äußerst hilfreich, um meine Vision klar zu definieren und realistische Ziele zu setzen. Besonders hervorheben möchte ich ihre Fähigkeit, komplexe Informationen verständlich aufzubereiten und maßgeschneiderte Lösungen zu entwickeln. Sie hat nicht nur wertvolle Tipps zur Finanzierung und Budgetplanung gegeben, sondern auch kreative Ansätze zur Kundenakquise und -bindung vermittelt. Darüber hinaus zeichnet sich Anna durch ihre hohe Einsatzbereitschaft und ihr Engagement aus. Sie war jederzeit erreichbar und kam auch proaktiv mit Ideen auf mich zu. Das alles hat mir das Gefühl gegeben, in besten Händen zu sein.`,
        highlight: "Ich bin überzeugt, dass ihre professionelle Unterstützung zu einer erfolgreichen Selbständigkeit maßgeblich beitragen wird.",
        part2: "Ich kann Anna Schenk uneingeschränkt empfehlen, danke ihr herzlich für ihre exzellenten Beratungen & Betreuung und wünsche ihr alles Gute Beste Grüße\"",
      },
    },
    en: {
      name: "german ohl",
      position: "Founder",
      role: "Boat Building",
      text: {
        part1: `"I would like to express my high appreciation for Anna Schenk, who provided me with tremendous support in all areas of my upcoming self-employment, especially during the startup phase. From the very first consultation, Anna demonstrated a deep understanding of the challenges and opportunities in the industry (boat trade & service). Her expertise in market analysis and business strategies was extremely helpful in clearly defining my vision and setting realistic goals. I would particularly like to highlight her ability to present complex information in an understandable way and to develop tailored solutions. She not only provided valuable tips on financing and budget planning but also taught creative approaches to customer acquisition and retention. Furthermore, Anna stands out for her high level of commitment and dedication. She was always available and even proactively came to me with ideas. All of this gave me the feeling of being in the best hands.`,
        highlight: "I am convinced that her professional support will make a significant contribution to a successful self-employment.",
        part2: "I can wholeheartedly recommend Anna Schenk, thank her sincerely for her excellent consultations & support and wish her all the best. Best regards",
      },
    },
  };

  const t = recommendationText[lang];

  return (
    <div className="flex w-full flex-col-reverse md:justify-center md:flex-row overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-6 p-0 md:p-10 lg:p-0">
      <div className="lg:w-2/3">
        {/* Mobile Placeholder */}
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

        {/* Name and Position */}
        <div className="flex flex-col pt-1 sm:pt-0">
          <div>
            <span className="font-vollkornSC tracking-[3px]">{t.name}</span>
            <span className="mx-1"> - </span>
            <span className="text-sm font-vollkorn">{t.position}</span>
          </div>
          {/* Hidden Title (preserved from original) */}
          <div className="hidden">
            <Title 
              text={lang === 'de' ? "Unternehmensberaterin und Coach" : "Business Consultant and Coach"} 
            />
          </div>
        </div>

        {/* Role Badge */}
        <div className="flex gap-3 my-2 pb-1 sm:pt-0">
          <div className="flex items-center gap-1 rounded-2xl bg-[#DCE5F0] text-[#0B66C2] font-semibold py-1 px-3 w-fit">
            <GiLaurelCrown size={20} />
            <p className="text-xs">{t.role}</p>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="lg:pr-20 font-vollkorn text-[#808080] pt-4 text-justify">
          {t.text.part1}
          <span className="md:text-xl text-yellow-600 font-cabin_sans">
            {" "}
            {t.text.highlight}{" "}
          </span>
          {t.text.part2}
        </p>
      </div>

      {/* Desktop Placeholder */}
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

export default Wrapper(Recommendation9, "recommendation1");
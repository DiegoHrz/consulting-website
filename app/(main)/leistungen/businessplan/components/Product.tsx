"use client";

import { zoomIn } from "@/app/utils/motion";
import { motion } from "framer-motion";
import GlassBoxReverse from "./GlassBoxReverse";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Product = () => {
  const productText = {
    de: {
      title: "Was gehört in einen Businessplan?",
      description: "Ein vollständiger und überzeugender Businessplan umfasst:",
      sections: [
        {
          title: "Executive Summary",
          content: "Eine kurze, prägnante Übersicht über dein Vorhaben.",
        },
        {
          title: "Beschreibung des Gründers und der Geschäftsidee",
          content:
            "Was motiviert und qualifiziert dich? Was macht dein Unternehmen besonders und welche Probleme löst es? Welche Produkte oder Leistungen bietest du an?",
        },
        {
          title: "Organisatorische Struktur",
          content: "Rechtsform, Personalplanung und interne Abläufe.",
        },
        {
          title: "Marktanalyse",
          content:
            "Wer sind deine Zielgruppen? Wie sieht der Wettbewerb aus? Was ist die aktuelle Lage am Markt?",
        },
        {
          title: "Marketing- und Vertriebsstrategie",
          content:
            "Wie erreichst du deine Kunden und baust deinen Markt auf?",
        },
        {
          title: "Finanzplanung",
          content:
            "Kapitalbedarf, Umsatzprognosen, Rentabilität und Liquiditätsplanung.",
        },
      ],
      advantagesTitle: "Dein Vorteil mit AS Vision Partners:",
      advantages: [
        {
          title: "Erfahrung und Expertise",
          content:
            "Wir wissen, worauf es bei einem erfolgreichen Businessplan ankommt.",
        },
        {
          title: "Individuelle Betreuung",
          content:
            "Jeder Businessplan ist so einzigartig wie deine Idee – wir passen unsere Unterstützung an deine Bedürfnisse an.",
        },
        {
          title: "Klarheit und Struktur",
          content:
            "Wir helfen dir, komplexe Inhalte verständlich und überzeugend darzustellen.",
        },
      ],
    },
    en: {
      title: "What belongs in a business plan?",
      description: "A complete and convincing business plan includes:",
      sections: [
        {
          title: "Executive Summary",
          content: "A short, concise overview of your project.",
        },
        {
          title: "Description of the founder and the business idea",
          content:
            "What motivates and qualifies you? What makes your company special and what problems does it solve? What products or services do you offer?",
        },
        {
          title: "Organizational structure",
          content: "Legal form, personnel planning and internal processes.",
        },
        {
          title: "Market analysis",
          content:
            "Who are your target groups? What does the competition look like? What is the current market situation?",
        },
        {
          title: "Marketing and sales strategy",
          content:
            "How will you reach your customers and build your market?",
        },
        {
          title: "Financial planning",
          content:
            "Capital requirements, revenue forecasts, profitability and liquidity planning.",
        },
      ],
      advantagesTitle: "Your advantage with AS Vision Partners:",
      advantages: [
        {
          title: "Experience and expertise",
          content:
            "We know what makes a successful business plan.",
        },
        {
          title: "Individual support",
          content:
            "Every business plan is as unique as your idea - we tailor our support to your needs.",
        },
        {
          title: "Clarity and structure",
          content:
            "We help you present complex content in an understandable and convincing way.",
        },
      ],
    },
  };

  const { lang } = useLanguageStore();
  const t = productText[lang];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {t.title}
      </h2>
      <p className="text-gray-700 mb-4">
        {t.description}
      </p>
      <div className="relative h-[37rem] md:h-[45rem] w-full">
        <div className="absolute inset-0 flex items-center justify-center z-[3]">
          <motion.div
            variants={zoomIn(0.2, 1.25)}
            initial="hidden"
            animate="show"
            className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <a
                className="flex flex-col items-center justify-center relative z-0 w-fit mx-auto bg-[linear-gradient(180deg,_#fff_50%,_#e7dbdb_100%)]"
                style={{
                  boxSizing: "border-box",
                  boxShadow:
                    "0 5px 50px rgba(0, 0, 0, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="bg-transparent max-w-[350px] sm:max-w-[400px] md:max-w-[430px] overflow-hidden h-auto">
                  <div className="flex transition-transform duration-700 ease-in-out">
                    <img
                      src="/leistungen/businessplan/businessplan-folder.png"
                      alt="Business Plan"
                      className="border-2 w-full flex-shrink-0"
                    />
                  </div>

                  <div className="hidden md:block absolute -top-10 lg:-top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[250px]">
                    <GlassBoxReverse title={t.sections[0].title} button="" delay={0.65}/>
                  </div>
                  <div className="hidden md:block absolute top-28 -right-40 lg:right-[-16rem] max-w-[200px] md:max-w-[170px] lg:max-w-[200px]">
                    <GlassBoxReverse
                      title={t.sections[1].title}
                      button=""
                      delay={0.8}
                    />
                  </div>
                  <div className="hidden md:block absolute top-32 -left-40 lg:-left-52 -translate-y-1/2 max-w-[150px]">
                    <GlassBoxReverse
                      title={t.sections[4].title}
                      button=""
                      delay={0.8}
                    />
                  </div>
                  <div className="hidden md:block absolute -bottom-16 lg:-bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <GlassBoxReverse
                      title={t.sections[2].title}
                      button=""
                      delay={0.5}
                    />
                  </div>
                  <div className="hidden md:block absolute bottom-48 -left-32 lg:-left-40 translate-y-1/2 max-w-[200px] md:max-w-[250px]">
                    <GlassBoxReverse title={t.sections[3].title} button="" delay={0.65}/>
                  </div>
                  <div className="hidden md:block absolute bottom-24 -right-36 lg:-right-44 -translate-y-1/2 max-w-[200px] md:max-w-[250px]">
                    <GlassBoxReverse title={t.sections[5].title} button="Connect" delay={0.5} />
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="">
        <div className="mb-12">
          <div className="border-t border-gray-200 my-8"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.sections.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="border-t border-gray-200 my-8"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.advantagesTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.advantages.map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={index === 0 ? "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" : 
                        index === 1 ? "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" : 
                        "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}
                    />
                  </svg>
                  <h3 className="font-semibold text-lg ml-2">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
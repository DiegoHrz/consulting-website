"use client";
import React from "react";
import Hero from "./components/Hero";
import Product from "./components/Product";

import { Table } from "./components/Table";

import AppointmentBanner from "@/app/components/AppointmentBanner";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Businessplan = () => {
  const { lang } = useLanguageStore();

  const businessplantText = {
    de: {
      upperTitle: "Leistungen - Businessplan",
      title: "Businessplan – Dein Fahrplan zum Erfolg",
      text: "Ein Businessplan ist mehr als nur ein Dokument – er ist der Kompass für deine Selbstständigkeit. Er zeigt dir nicht nur, wohin du willst, sondern auch, wie du dorthin gelangst. Gleichzeitig dient er als überzeugendes Werkzeug, um Partner, Banken und Investoren von deiner Idee zu begeistern.",
      second_title: "Warum ist ein Businessplan wichtig?",
      second_title_text:
        "Ein Businessplan bildet die Grundlage für viele wichtige Entscheidungen – sowohl für dich selbst als auch für externe Partner. Er hilft dir:",
      another_text:
        "Ein guter Businessplan ist nicht nur ein Dokument, sondern eine Strategie, die dich auf deinem Weg begleitet.",
    },
    en: {
      upperTitle: "Services - Business Plan",
      title: "Business Plan – Your Roadmap to Success",
      text: "A business plan is more than just a document – ​​it's the compass for your self-employment. It shows you not only where you want to go, but also how to get there. At the same time, it serves as a convincing tool to convince partners, banks, and investors of your idea.",
      second_title: "Why is a business plan important?",
      second_title_text:
        "A business plan forms the basis for many important decisions – both for yourself and for external partners. It helps you:",
      another_text:
        "A good business plan is not just a document, but a strategy that accompanies you on your journey.",
    },
  };

  const reasonsPoints = {
    de: [
      "Deine Geschäftsidee zu strukturieren und weiterzuentwickeln.",
      "Klarheit über die finanziellen Anforderungen deines Vorhabens zu gewinnen.",
      "Fördermittel wie den Gründungszuschuss zu beantragen.",
      "Banken und Investoren von deiner Idee zu überzeugen.",
      "Risiken zu erkennen und ihnen frühzeitig zu begegnen.",
    ],
    en: [
      "Structure and further develop your business idea.",
      "Gain clarity about the financial requirements of your project.",
      "Apply for funding such as start-up grants.",
      "Convince banks and investors of your idea.",
      "Identify risks and address them early on.",
    ],
  };

  const t = businessplantText[lang];
  const r = reasonsPoints[lang];

  return (
    <div className="  h-full flex flex-col gap-[80px] md:gap-[130px]  lg:gap-[180px] ">
      <Hero />
      {/* <Intro /> */}
      <div className="">
        <h6 className="text-lg font-semibold text-gray-500 mb-2">
          {t.upperTitle}
        </h6>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          {t.title}
        </h1>
        {/* <p className="text-lg text-gray-700 leading-relaxed">
          Ein Businessplan ist mehr als nur ein Dokument – er ist der Kompass
          für deine Selbstständigkeit. Er zeigt dir nicht nur, wohin du willst,
          sondern auch, wie du dorthin gelangst. Gleichzeitig dient er als
          überzeugendes Werkzeug, um Partner, Banken und Investoren von deiner
          Idee zu begeistern.
        </p> */}
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <div className="w-full lg:w-[60%]">
            <p className="text-lg py-4 text-justify">{t.text}</p>
          </div>
          {/* <div className="w-2/5 p-4 text-justify">
            <p className="text-lg">
              
            </p>
          </div> */}
          <div className="w-full lg:w-[40%] my-auto ">
            <img
              // src="/logo/logo-no-bg/logo-black-no-bg.png"
              src="/logo/logo_only_name.png"
              alt=""
              className="w-80 aspect-auto mx-auto"
            />
          </div>
        </div>
      </div>
      <Table />
      {/* <PitchBusinessplan
        image="/profile/profile.jpg"
        title="Jetzt Unternehmer werden"
        text="Mit uns, den Experten von AS Vision Partners, gründest du ein profitables Unternehmen, das deine Ziele und deine Werte widerspiegelt. Dazu erstellen wir einen Geschäftsplan, der deine Geschäftsidee oder dein Startup in ein solides Unternehmen mit Finanzierung und realistischen Meilensteinen verwandelt."
        button="Buchung"
      /> */}
      <div className="mb-12">
        <div className="border-t border-gray-200 my-8"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t.second_title}
        </h2>
        <p className="text-gray-700 mb-4">{t.second_title_text}</p>
        <ul className="space-y-3 pl-5">
          {r.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mt-4">{t.another_text}</p>
      </div>
      <Product />
      {/* <ContactBanner /> */}
      <div className="mb-20 md:mb-36">
        <AppointmentBanner
          gradientColor2="to-blue-200"
          buttonColor="bg-blue-900"
        />
      </div>
    </div>
  );
};

export default Businessplan;

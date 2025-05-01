"use client";
import AppointmentBanner from "@/app/components/AppointmentBanner";
import React from "react";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Finanzierung = () => {
  const finanzierungText = {
    de: {
      services: "Leistungen - Finanzierung",
      title: "Finanzierung – Dein Weg zur optimalen Unterstützung",
      description1: "Du hast eine großartige Geschäftsidee, aber fragst dich, wie du die nötigen finanziellen Mittel sicherstellen kannst?",
      description2: "Ob Gründungszuschuss, Bankdarlehen, Investoren oder alternative Finanzierungsmöglichkeiten – wir helfen dir, die beste Lösung für dein Vorhaben zu finden und erfolgreich umzusetzen.",
      importanceTitle: "Warum ist die richtige Finanzierung so wichtig?",
      importanceText: "Eine durchdachte Finanzierung ist die Grundlage für den langfristigen Erfolg deines Unternehmens. Sie ermöglicht es dir:",
      stability: "Stabil zu starten:",
      stabilityText: "Du sicherst dir die notwendigen Mittel, um dein Vorhaben professionell umzusetzen.",
      liquidity: "Liquidität zu bewahren:",
      liquidityText: "Du kannst laufende Kosten decken, ohne finanzielle Engpässe zu riskieren.",
      growth: "Wachstum zu fördern:",
      growthText: "Du hast die Ressourcen, um in dein Unternehmen zu investieren und es weiterzuentwickeln.",
      strategyText: "Mit einer optimalen Finanzierungsstrategie schaffst du dir die Freiheit, dich voll auf dein Unternehmen zu konzentrieren.",
      optionsTitle: "Welche Möglichkeiten gibt es?",
      optionsText: "Wir helfen dir, die Finanzierung zu finden, die zu deinem Vorhaben passt:",
      grant: "Gründungszuschuss",
      grantText: "Eine Förderung der Agentur für Arbeit, die dich in den ersten Monaten deiner Selbstständigkeit unterstützt.",
      loan: "Bankdarlehen",
      loanText: "Wir unterstützen dich bei der Vorbereitung auf Gespräche mit Banken und bei der Auswahl des richtigen Kreditprogramms.",
      investors: "Investoren",
      investorsText: "Für größere Vorhaben helfen wir dir, potenzielle Investoren zu finden und zu überzeugen.",
      alternative: "Alternative Finanzierung",
      alternativeText: "Ob Crowdfunding, Förderprogramme oder private Darlehen – wir prüfen alle Optionen.",
      supportTitle: "Wie wir dich unterstützen:",
      supportText: "Bei AS Vision Partners stehen wir dir mit Rat und Tat zur Seite:",
      analysis: "Wir analysieren gemeinsam deine finanzielle Ausgangssituation und deinen Bedarf.",
      strategy: "Wir entwickeln eine individuelle Finanzierungsstrategie, die auf deine Ziele abgestimmt ist.",
      documents: "Wir unterstützen dich bei der Erstellung aller notwendigen Unterlagen.",
      preparation: "Wir bereiten dich auf Gespräche mit Banken, Investoren oder Förderstellen vor.",
      advantagesTitle: "Dein Vorteil mit AS Vision Partners:",
      transparency: "Transparenz",
      transparencyText: "Wir erklären dir die Vor- und Nachteile jeder Finanzierungsform und helfen dir, die richtige Entscheidung zu treffen.",
      experience: "Erfahrung",
      experienceText: "Wir kennen die Anforderungen von Banken, Investoren und Förderstellen und wissen, wie du sie überzeugst.",
      support: "Persönliche Betreuung",
      supportText2: "Wir stehen dir bei jedem Schritt zur Seite – von der Planung bis zur Umsetzung.",
      readyTitle: "Bereit für den nächsten Schritt?",
      readyText: "Kontaktiere uns jetzt für eine kostenlose Beratung zur optimalen Finanzierung deines Vorhabens.",
      appointment: "Jetzt Beratungstermin vereinbaren"
    },
    en: {
      services: "Services - Financing",
      title: "Financing – Your Path to Optimal Support",
      description1: "You have a great business idea but wonder how to secure the necessary financial resources?",
      description2: "Whether start-up grant, bank loan, investors or alternative financing options - we help you find the best solution for your project and implement it successfully.",
      importanceTitle: "Why is the right financing so important?",
      importanceText: "Well-considered financing is the foundation for the long-term success of your business. It enables you to:",
      stability: "Start stable:",
      stabilityText: "You secure the necessary resources to implement your project professionally.",
      liquidity: "Maintain liquidity:",
      liquidityText: "You can cover running costs without risking financial bottlenecks.",
      growth: "Promote growth:",
      growthText: "You have the resources to invest in and develop your business.",
      strategyText: "With an optimal financing strategy, you create the freedom to focus fully on your business.",
      optionsTitle: "What options are available?",
      optionsText: "We help you find the financing that suits your project:",
      grant: "Start-up grant",
      grantText: "A subsidy from the Employment Agency that supports you in the first months of your self-employment.",
      loan: "Bank loan",
      loanText: "We support you in preparing for talks with banks and in selecting the right loan program.",
      investors: "Investors",
      investorsText: "For larger projects, we help you find and convince potential investors.",
      alternative: "Alternative financing",
      alternativeText: "Whether crowdfunding, funding programs or private loans - we check all options.",
      supportTitle: "How we support you:",
      supportText: "At AS Vision Partners, we are at your side with advice and action:",
      analysis: "We analyze your financial starting situation and needs together.",
      strategy: "We develop an individual financing strategy tailored to your goals.",
      documents: "We support you in creating all necessary documents.",
      preparation: "We prepare you for talks with banks, investors or funding agencies.",
      advantagesTitle: "Your advantage with AS Vision Partners:",
      transparency: "Transparency",
      transparencyText: "We explain the advantages and disadvantages of each form of financing and help you make the right decision.",
      experience: "Experience",
      experienceText: "We know the requirements of banks, investors and funding agencies and know how to convince them.",
      support: "Personal support",
      supportText2: "We are at your side at every step - from planning to implementation.",
      readyTitle: "Ready for the next step?",
      readyText: "Contact us now for a free consultation on the optimal financing of your project.",
      appointment: "Schedule a consultation now"
    }
  };

  const { lang } = useLanguageStore();
  const t = finanzierungText[lang];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 mb-12 text-white">
        <h6 className="text-lg font-semibold mb-2">
          {t.services}
        </h6>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {t.title}
        </h1>
        <div className="space-y-3">
          <p className="text-lg">{t.description1}</p>
          <p className="text-lg">{t.description2}</p>
        </div>
      </div>

      {/* Importance Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          {t.importanceTitle}
        </h2>
        <p className="text-gray-700 mb-4">
          {t.importanceText}
        </p>
        <ul className="space-y-3 pl-5">
          <li className="flex items-start">
            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
            <span>
              <strong>{t.stability}</strong> {t.stabilityText}
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
            <span>
              <strong>{t.liquidity}</strong> {t.liquidityText}
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
            <span>
              <strong>{t.growth}</strong> {t.growthText}
            </span>
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          {t.strategyText}
        </p>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Options Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          {t.optionsTitle}
        </h2>
        <p className="text-gray-700 mb-4">
          {t.optionsText}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.grant}
            </h3>
            <p className="text-gray-700">
              {t.grantText}
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              {t.loan}
            </h3>
            <p className="text-gray-700">
              {t.loanText}
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {t.investors}
            </h3>
            <p className="text-gray-700">
              {t.investorsText}
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              {t.alternative}
            </h3>
            <p className="text-gray-700">
              {t.alternativeText}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Support Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          {t.supportTitle}
        </h2>
        <p className="text-gray-700 mb-4">
          {t.supportText}
        </p>
        <ul className="space-y-3 pl-5">
          <li className="flex items-start">
            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
            <span>{t.analysis}</span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
            <span>{t.strategy}</span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
            <span>{t.documents}</span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
            <span>{t.preparation}</span>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Advantages Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          {t.advantagesTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t.transparency}
            </h3>
            <p className="text-gray-700">
              {t.transparencyText}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              {t.experience}
            </h3>
            <p className="text-gray-700">
              {t.experienceText}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {t.support}
            </h3>
            <p className="text-gray-700">
              {t.supportText2}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="my-20 md:my-36">
        <AppointmentBanner
          gradientColor2="to-green-100"
          buttonColor="bg-green-700"
        />
      </div>
    </div>
  );
};

export default Finanzierung;
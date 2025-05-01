"use client";
import AppointmentBanner from "@/app/components/AppointmentBanner";
import React from "react";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Grundungszuschuss = () => {
  const grundungszuschussText = {
    de: {
      services: "Leistungen - Gründungszuschuss",
      title: "Gründungszuschuss – Dein Start in die Selbstständigkeit",
      benefit1: "Gründerzuschuss bis zu 20.000 € für die ersten Monate deiner Selbstständigkeit",
      benefit2: "Förderung von AVGS Weiterbildungen von bis zu 12.000 € - kostenlos für dich!",
      intro1: "Du hast eine Geschäftsidee und möchtest den Schritt in die Selbstständigkeit wagen, aber die finanzielle Absicherung bereitet dir Sorgen?",
      intro2: "Der Gründungszuschuss kann genau die Unterstützung sein, die du brauchst. Diese Förderung der Agentur für Arbeit hilft dir, in der Anfangsphase deiner Selbstständigkeit finanziell abgesichert zu bleiben und deine Vision Schritt für Schritt in die Realität umzusetzen.",
      whatIsTitle: "Was ist der Gründungszuschuss?",
      whatIsText: "Der Gründungszuschuss ist eine finanzielle Förderung für Arbeitslosengeld-1-Empfänger, die ein eigenes Unternehmen gründen möchten. Er ermöglicht dir, in den ersten sechs Monaten nach deiner Gründung einen Zuschuss zu deinen Lebenshaltungskosten zu erhalten, sodass du dich voll und ganz auf den Aufbau deines Unternehmens konzentrieren kannst.",
      requirementsTitle: "Welche Voraussetzungen musst du erfüllen?",
      requirementsText: "Damit du den Gründungszuschuss beantragen kannst, sind folgende Bedingungen zu erfüllen:",
      requirement1: "Bezug von Arbeitslosengeld 1:",
      requirement1Text: "Du musst aktuell Arbeitslosengeld 1 beziehen.",
      requirement2: "Restanspruch von mindestens 150 Tagen:",
      requirement2Text: "Dein Anspruch auf Arbeitslosengeld muss zum Zeitpunkt der Antragstellung noch mindestens 150 Tage betragen.",
      requirement3: "Nachweis deiner Qualifikation und Geschäftsidee:",
      requirement3Text: "Du benötigst einen Businessplan, der deine Geschäftsidee ausführlich beschreibt, sowie eine fachkundige Stellungnahme, die die Tragfähigkeit deiner Gründung bestätigt.",
      requirement4: "Hauptberufliche Selbstständigkeit:",
      requirement4Text: "Deine geplante Tätigkeit muss hauptberuflich ausgeübt werden – nebenberufliche Tätigkeiten werden nicht gefördert.",
      processTitle: "Wie läuft die Beantragung ab?",
      process1: "Beantragung eines AVGS-Gutscheins (Aktivierungs- und Vermittlungsgutschein):",
      process1Text: "Dieser Gutschein ermöglicht dir, eine professionelle Beratung und Unterstützung für deine Gründung KOSTENLOS in Anspruch zu nehmen.",
      process2: "Erstellung der erforderlichen Unterlagen:",
      process2Text: "Für den Antrag benötigst du einen überzeugenden Businessplan, eine Kapitalbedarfs- und Finanzierungsübersicht sowie eine fachkundige Stellungnahme.",
      process3: "Einreichung des Antrags:",
      process3Text: "Mit den vorbereiteten Unterlagen reichst du deinen Antrag bei der Agentur für Arbeit ein.",
      supportTitle: "Wie wir dich unterstützen:",
      supportText: "Bei AS Vision Partners begleiten wir dich durch den gesamten Prozess:",
      support1: "Voraussetzungen",
      support1Text: "Wir erklären dir die Voraussetzungen und Anforderungen des Gründungszuschusses.",
      support2: "Businessplan",
      support2Text: "Wir erstellen gemeinsam mit dir einen Businessplan, der deine Idee klar und professionell präsentiert.",
      support3: "Dokumente",
      support3Text: "Wir helfen dir bei der Zusammenstellung aller notwendigen Dokumente und sorgen dafür, dass nichts fehlt.",
      support4: "Vorbereitung",
      support4Text: "Wir bereiten dich auf Gespräche mit der Agentur für Arbeit vor und stehen dir bei Fragen zur Seite.",
      ctaTitle: "Bereit für den nächsten Schritt?",
      ctaText: "Kontaktiere uns jetzt für eine kostenlose Beratung zum Gründungszuschuss.",
      ctaButton: "Jetzt Termin vereinbaren"
    },
    en: {
      services: "Services - Start-up Grant",
      title: "Start-up Grant – Your Start into Self-Employment",
      benefit1: "Start-up grant of up to €20,000 for the first months of your self-employment",
      benefit2: "Funding for AVGS training courses of up to €12,000 - free for you!",
      intro1: "You have a business idea and want to take the step into self-employment, but are worried about financial security?",
      intro2: "The start-up grant could be exactly the support you need. This funding from the Employment Agency helps you stay financially secure in the initial phase of your self-employment and gradually turn your vision into reality.",
      whatIsTitle: "What is the start-up grant?",
      whatIsText: "The start-up grant is financial support for recipients of unemployment benefit 1 who want to start their own business. It allows you to receive a subsidy for your living expenses in the first six months after your start-up, so you can focus entirely on building your business.",
      requirementsTitle: "What requirements do you need to meet?",
      requirementsText: "To apply for the start-up grant, the following conditions must be met:",
      requirement1: "Receipt of unemployment benefit 1:",
      requirement1Text: "You must currently be receiving unemployment benefit 1.",
      requirement2: "Remaining entitlement of at least 150 days:",
      requirement2Text: "Your entitlement to unemployment benefit must still be at least 150 days at the time of application.",
      requirement3: "Proof of your qualification and business idea:",
      requirement3Text: "You need a business plan that describes your business idea in detail, as well as an expert opinion confirming the viability of your start-up.",
      requirement4: "Full-time self-employment:",
      requirement4Text: "Your planned activity must be carried out full-time - part-time activities are not funded.",
      processTitle: "How does the application process work?",
      process1: "Application for an AVGS voucher (Activation and Placement Voucher):",
      process1Text: "This voucher enables you to receive professional advice and support for your start-up FREE OF CHARGE.",
      process2: "Preparation of the required documents:",
      process2Text: "For the application you need a convincing business plan, a capital requirement and financing overview, and an expert opinion.",
      process3: "Submission of the application:",
      process3Text: "With the prepared documents, you submit your application to the Employment Agency.",
      supportTitle: "How we support you:",
      supportText: "At AS Vision Partners, we accompany you through the entire process:",
      support1: "Requirements",
      support1Text: "We explain the requirements and conditions of the start-up grant to you.",
      support2: "Business plan",
      support2Text: "We create a business plan together with you that presents your idea clearly and professionally.",
      support3: "Documents",
      support3Text: "We help you compile all the necessary documents and ensure nothing is missing.",
      support4: "Preparation",
      support4Text: "We prepare you for discussions with the Employment Agency and are available to answer any questions.",
      ctaTitle: "Ready for the next step?",
      ctaText: "Contact us now for a free consultation about the start-up grant.",
      ctaButton: "Schedule appointment now"
    }
  };

  const { lang } = useLanguageStore();
  const t = grundungszuschussText[lang];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-12 text-white">
        <h6 className="text-lg font-semibold mb-2">
          {t.services}
        </h6>
        <h1 className="text-[26px] leading-9 sm:text-4xl font-bold mb-4">
          {t.title}
        </h1>
        <div className="space-y-2">
          <p className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {t.benefit1}
          </p>
          <p className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {t.benefit2}
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="mb-12">
        <p className="text-lg mb-4">
          {t.intro1}
        </p>
        <p className="text-lg">
          {t.intro2}
        </p>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* What is Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          {t.whatIsTitle}
        </h2>
        <p className="text-gray-700">
          {t.whatIsText}
        </p>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Requirements Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          {t.requirementsTitle}
        </h2>
        <p className="mb-4 text-gray-700">
          {t.requirementsText}
        </p>
        <ul className="space-y-3 pl-5">
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              1
            </span>
            <span>
              <strong>{t.requirement1}</strong> {t.requirement1Text}
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              2
            </span>
            <span>
              <strong>{t.requirement2}</strong> {t.requirement2Text}
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              3
            </span>
            <span>
              <strong>{t.requirement3}</strong> {t.requirement3Text}
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              4
            </span>
            <span>
              <strong>{t.requirement4}</strong> {t.requirement4Text}
            </span>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Application Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          {t.processTitle}
        </h2>
        <ol className="space-y-4 pl-5">
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              1
            </span>
            <span>
              <strong>{t.process1}</strong> {t.process1Text}
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              2
            </span>
            <span>
              <strong>{t.process2}</strong> {t.process2Text}
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              3
            </span>
            <span>
              <strong>{t.process3}</strong> {t.process3Text}
            </span>
          </li>
        </ol>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Support Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          {t.supportTitle}
        </h2>
        <p className="mb-4 text-gray-700">
          {t.supportText}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {t.support1}
            </h3>
            <p>{t.support1Text}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              {t.support2}
            </h3>
            <p>{t.support2Text}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {t.support3}
            </h3>
            <p>{t.support3Text}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              {t.support4}
            </h3>
            <p>{t.support4Text}</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="my-20 md:my-36"> 
        <AppointmentBanner gradientColor2='to-blue-200' buttonColor="bg-blue-600" />
      </div>
    </div>
  );
};

export default Grundungszuschuss;
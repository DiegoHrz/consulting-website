import AppointmentBanner from "@/app/components/AppointmentBanner";
import React from "react";

const Finanzierung = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 mb-12 text-white">
        <h6 className="text-lg font-semibold mb-2">
          Leistungen - Finanzierung
        </h6>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Finanzierung – Dein Weg zur optimalen Unterstützung
        </h1>
        <div className="space-y-3">
          <p className="text-lg">
            Du hast eine großartige Geschäftsidee, aber fragst dich, wie du die
            nötigen finanziellen Mittel sicherstellen kannst?
          </p>
          <p className="text-lg">
            Ob Gründungszuschuss, Bankdarlehen, Investoren oder alternative
            Finanzierungsmöglichkeiten – wir helfen dir, die beste Lösung für
            dein Vorhaben zu finden und erfolgreich umzusetzen.
          </p>
        </div>
      </div>

      {/* Importance Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Warum ist die richtige Finanzierung so wichtig?
        </h2>
        <p className="text-gray-700 mb-4">
          Eine durchdachte Finanzierung ist die Grundlage für den langfristigen
          Erfolg deines Unternehmens. Sie ermöglicht es dir:
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
              <strong>Stabil zu starten:</strong> Du sicherst dir die
              notwendigen Mittel, um dein Vorhaben professionell umzusetzen.
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
              <strong>Liquidität zu bewahren:</strong> Du kannst laufende Kosten
              decken, ohne finanzielle Engpässe zu riskieren.
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
              <strong>Wachstum zu fördern:</strong> Du hast die Ressourcen, um
              in dein Unternehmen zu investieren und es weiterzuentwickeln.
            </span>
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          Mit einer optimalen Finanzierungsstrategie schaffst du dir die
          Freiheit, dich voll auf dein Unternehmen zu konzentrieren.
        </p>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Options Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Welche Möglichkeiten gibt es?
        </h2>
        <p className="text-gray-700 mb-4">
          Wir helfen dir, die Finanzierung zu finden, die zu deinem Vorhaben
          passt:
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
              Gründungszuschuss
            </h3>
            <p className="text-gray-700">
              Eine Förderung der Agentur für Arbeit, die dich in den ersten
              Monaten deiner Selbstständigkeit unterstützt.
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
              Bankdarlehen
            </h3>
            <p className="text-gray-700">
              Wir unterstützen dich bei der Vorbereitung auf Gespräche mit
              Banken und bei der Auswahl des richtigen Kreditprogramms.
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
              Investoren
            </h3>
            <p className="text-gray-700">
              Für größere Vorhaben helfen wir dir, potenzielle Investoren zu
              finden und zu überzeugen.
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
              Alternative Finanzierung
            </h3>
            <p className="text-gray-700">
              Ob Crowdfunding, Förderprogramme oder private Darlehen – wir
              prüfen alle Optionen.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Support Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Wie wir dich unterstützen:
        </h2>
        <p className="text-gray-700 mb-4">
          Bei AS Vision Partners stehen wir dir mit Rat und Tat zur Seite:
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
              Wir analysieren gemeinsam deine finanzielle Ausgangssituation und
              deinen Bedarf.
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
              Wir entwickeln eine individuelle Finanzierungsstrategie, die auf
              deine Ziele abgestimmt ist.
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
              Wir unterstützen dich bei der Erstellung aller notwendigen
              Unterlagen.
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
              Wir bereiten dich auf Gespräche mit Banken, Investoren oder
              Förderstellen vor.
            </span>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Advantages Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Dein Vorteil mit AS Vision Partners:
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
              Transparenz
            </h3>
            <p className="text-gray-700">
              Wir erklären dir die Vor- und Nachteile jeder Finanzierungsform
              und helfen dir, die richtige Entscheidung zu treffen.
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
              Erfahrung
            </h3>
            <p className="text-gray-700">
              Wir kennen die Anforderungen von Banken, Investoren und
              Förderstellen und wissen, wie du sie überzeugst.
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
              Persönliche Betreuung
            </h3>
            <p className="text-gray-700">
              Wir stehen dir bei jedem Schritt zur Seite – von der Planung bis
              zur Umsetzung.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-green-100 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">
          Bereit für den nächsten Schritt?
        </h3>
        <p className="mb-6">
          Kontaktiere uns jetzt für eine kostenlose Beratung zur optimalen
          Finanzierung deines Vorhabens.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
          Jetzt Beratungstermin vereinbaren
        </button>
      </div> */}
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

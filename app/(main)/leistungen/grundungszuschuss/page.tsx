"use client";
import AppointmentBanner from "@/app/components/AppointmentBanner";
import React from "react";

const Grundungszuschuss = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-12 text-white">
        <h6 className="text-lg font-semibold mb-2">
          Leistungen - Gründungszuschuss
        </h6>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Gründungszuschuss – Dein Start in die Selbstständigkeit
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
            Gründerzuschuss bis zu 20.000 € für die ersten Monate deiner
            Selbstständigkeit
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
            Förderung von AVGS Weiterbildungen von bis zu 12.000 € - kostenlos
            für dich!
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="mb-12">
        <p className="text-lg mb-4">
          Du hast eine Geschäftsidee und möchtest den Schritt in die
          Selbstständigkeit wagen, aber die finanzielle Absicherung bereitet dir
          Sorgen?
        </p>
        <p className="text-lg">
          Der Gründungszuschuss kann genau die Unterstützung sein, die du
          brauchst. Diese Förderung der Agentur für Arbeit hilft dir, in der
          Anfangsphase deiner Selbstständigkeit finanziell abgesichert zu
          bleiben und deine Vision Schritt für Schritt in die Realität
          umzusetzen.
        </p>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* What is Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Was ist der Gründungszuschuss?
        </h2>
        <p className="text-gray-700">
          Der Gründungszuschuss ist eine finanzielle Förderung für
          Arbeitslosengeld-1-Empfänger, die ein eigenes Unternehmen
          gründen möchten. Er ermöglicht dir, in den ersten sechs Monaten nach
          deiner Gründung einen Zuschuss zu deinen Lebenshaltungskosten zu
          erhalten, sodass du dich voll und ganz auf den Aufbau deines
          Unternehmens konzentrieren kannst.
        </p>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Requirements Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Welche Voraussetzungen musst du erfüllen?
        </h2>
        <p className="mb-4 text-gray-700">
          Damit du den Gründungszuschuss beantragen kannst, sind folgende
          Bedingungen zu erfüllen:
        </p>
        <ul className="space-y-3 pl-5">
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              1
            </span>
            <span>
              <strong>Bezug von Arbeitslosengeld 1:</strong> Du musst aktuell
              Arbeitslosengeld 1 beziehen.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              2
            </span>
            <span>
              <strong>Restanspruch von mindestens 150 Tagen:</strong> Dein
              Anspruch auf Arbeitslosengeld muss zum Zeitpunkt der
              Antragstellung noch mindestens 150 Tage betragen.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              3
            </span>
            <span>
              <strong>Nachweis deiner Qualifikation und Geschäftsidee:</strong>{" "}
              Du benötigst einen Businessplan, der deine Geschäftsidee
              ausführlich beschreibt, sowie eine fachkundige Stellungnahme, die
              die Tragfähigkeit deiner Gründung bestätigt.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              4
            </span>
            <span>
              <strong>Hauptberufliche Selbstständigkeit:</strong> Deine geplante
              Tätigkeit muss hauptberuflich ausgeübt werden – nebenberufliche
              Tätigkeiten werden nicht gefördert.
            </span>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Application Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Wie läuft die Beantragung ab?
        </h2>
        <ol className="space-y-4 pl-5">
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              1
            </span>
            <span>
              <strong>
                Beantragung eines AVGS-Gutscheins (Aktivierungs- und
                Vermittlungsgutschein):
              </strong>{" "}
              Dieser Gutschein ermöglicht dir, eine professionelle Beratung und
              Unterstützung für deine Gründung KOSTENLOS in Anspruch zu nehmen.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              2
            </span>
            <span>
              <strong>Erstellung der erforderlichen Unterlagen:</strong> Für den
              Antrag benötigst du einen überzeugenden Businessplan, eine
              Kapitalbedarfs- und Finanzierungsübersicht sowie eine fachkundige
              Stellungnahme.
            </span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
              3
            </span>
            <span>
              <strong>Einreichung des Antrags:</strong> Mit den vorbereiteten
              Unterlagen reichst du deinen Antrag bei der Agentur für Arbeit
              ein.
            </span>
          </li>
        </ol>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Support Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Wie wir dich unterstützen:
        </h2>
        <p className="mb-4 text-gray-700">
          Bei AS Vision Partners begleiten wir dich durch den gesamten Prozess:
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
              Voraussetzungen
            </h3>
            <p>
              Wir erklären dir die Voraussetzungen und Anforderungen des
              Gründungszuschusses.
            </p>
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
              Businessplan
            </h3>
            <p>
              Wir erstellen gemeinsam mit dir einen Businessplan, der deine Idee
              klar und professionell präsentiert.
            </p>
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
              Dokumente
            </h3>
            <p>
              Wir helfen dir bei der Zusammenstellung aller notwendigen
              Dokumente und sorgen dafür, dass nichts fehlt.
            </p>
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
              Vorbereitung
            </h3>
            <p>
              Wir bereiten dich auf Gespräche mit der Agentur für Arbeit vor und
              stehen dir bei Fragen zur Seite.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-blue-100 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">Bereit für den nächsten Schritt?</h3>
        <p className="mb-6">Kontaktiere uns jetzt für eine kostenlose Beratung zum Gründungszuschuss.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
          Jetzt Termin vereinbaren
        </button>
      </div> */}
      <div className="my-20 md:my-36"> 
        <AppointmentBanner  gradientColor2='to-blue-200' buttonColor="bg-blue-600"  />
      </div>
    </div>
  );
};

export default Grundungszuschuss;

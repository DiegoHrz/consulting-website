"use client";
import React, { useState } from "react";

import Subtitle from "@/app/components/customTags/Subtitle";

const Buchhaltung = () => {
  const [hoverIn, setHoverIn] = useState(false);
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 mb-12 text-white">
        <h6 className="text-lg font-semibold mb-2">Leistungen - Buchhaltung</h6>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Buchhaltung – Verstehe deine Finanzen mit Leichtigkeit
        </h1>
        <div className="space-y-4">
          <p className="text-lg">
            Du möchtest deine Buchhaltung selbst in die Hand nehmen und dabei
            auf professionelle Unterstützung setzen? Mit meiner individuellen
            Schulung lernst du, wie du deine Buchhaltung effizient und korrekt
            führst – von den ersten Schritten bis zur eigenständigen Anwendung.
          </p>
          <p className="text-lg">
            Dabei setze ich auf bewährte Methoden und unterstütze dich mit der
            leistungsstarken Software Lexware Office, um dir den Einstieg so
            einfach wie möglich zu machen.
          </p>
        </div>
      </div>
      {/* Lexware Section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              Lexware Office – Dein Buchhaltungspartner
            </h2>
            <p className="text-gray-700 mb-4">
              Lexware Office ist eine vielseitige Buchhaltungssoftware, die
              speziell für Kleinunternehmer:innen, Freiberufler:innen und
              Selbstständige entwickelt wurde. Sie vereinfacht komplexe Prozesse
              wie Belegerfassung, Rechnungsstellung, Lohnabrechnung und
              Steuerverwaltung – alles in einer einzigen, benutzerfreundlichen
              Plattform.
            </p>
            <p className="text-gray-700">
              Die Software bietet nicht nur rechtssichere Funktionen (GoBD- und
              DSGVO-konform), sondern auch eine intuitive Bedienung, die selbst
              Einsteiger:innen schnell vertraut macht.
            </p>
          </div>
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-purple-100">
            <img
              src="https://www.lexware.de/sites/default/files/styles/logo/public/2020-09/lexware-office-logo.png"
              alt="Lexware Office Logo"
              className="w-full h-auto mb-4"
            />
            <p className="text-sm text-gray-600 text-center">
              TÜV SÜD-geprüft und ISO-zertifiziert
            </p>
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          Vorteile auf einen Blick:
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Zeitersparnis
            </h3>
            <p className="text-gray-700">
              Automatisierte Funktionen, wie die Erkennung und Buchung von
              Belegen, reduzieren den manuellen Aufwand.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Flexibilität
            </h3>
            <p className="text-gray-700">
              Zugriff von überall – ob am PC, Tablet oder Smartphone.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
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
              Rechtssicherheit
            </h3>
            <p className="text-gray-700">
              TÜV SÜD-geprüft und ISO-zertifiziert, erfüllt alle gesetzlichen
              Vorgaben.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
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
              Einfache Zusammenarbeit
            </h3>
            <p className="text-gray-700">
              Direkte Schnittstellen zu Steuerberater:innen und DATEV
              ermöglichen eine nahtlose Datenübergabe.
            </p>
          </div>
        </div>
        <p className="text-gray-700 mt-6">
          Mit Lexware Office wird deine Buchhaltung nicht nur einfacher, sondern
          auch professioneller – ein entscheidender Vorteil, um Zeit zu sparen
          und dich auf das Wachstum deines Unternehmens zu konzentrieren.
        </p>
      </div>
      <div className="border-t border-gray-200 my-8"></div>
      {/* Training Structure Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">
          Schulungsstruktur im Überblick:
        </h2>
        <p className="text-gray-700 mb-6">
          Die Schulung ist praxisnah und strukturiert aufgebaut, um dir das
          nötige Wissen und die Fähigkeiten für eine erfolgreiche Buchhaltung zu
          vermitteln:
        </p>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-800 font-bold text-xl">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Kick-off Gespräch
              </h3>
              <p className="text-gray-700">
                Wir klären deine individuellen Erwartungen und Bedürfnisse,
                besprechen den Onboarding-Prozess und legen die Schwerpunkte der
                Schulung fest. Dabei berücksichtigen wir deinen bisherigen
                Umgang mit Buchhaltung und deine Unternehmensziele.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-800 font-bold text-xl">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Grundeinstellungen festlegen
              </h3>
              <p className="text-gray-700">
                Gemeinsam wählen wir die passende Version von Lexware Office aus
                und richten alle grundlegenden Einstellungen ein, die für dein
                Unternehmen relevant sind. Dabei stelle ich sicher, dass die
                Software optimal auf deine Bedürfnisse angepasst ist.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-800 font-bold text-xl">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Einarbeitung in Lexware Office
              </h3>
              <p className="text-gray-700">
                Ich zeige dir aktiv, wie du die wichtigsten Funktionen der
                Software nutzt: Belege erfassen, Rechnungen erstellen, Zahlungen
                überwachen und Steuerunterlagen vorbereiten. Gleichzeitig lernst
                du, wie du diese Prozesse nahtlos in deinen Arbeitsalltag
                integrierst.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-800 font-bold text-xl">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Praxisphase
              </h3>
              <p className="text-gray-700">
                Du wendest das Gelernte eigenständig an und sammelst praktische
                Erfahrungen bei der Buchhaltung deines Unternehmens. Ich stehe
                dir dabei jederzeit unterstützend zur Seite.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-16 md:h-16 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-purple-800 font-bold text-xl">5</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                Analyse & Feedback
              </h3>
              <p className="text-gray-700">
                Wir besprechen deine Ergebnisse, analysieren deine Arbeitsweise
                und erarbeiten Optimierungsansätze. Ziel ist es, deine
                Buchhaltungsprozesse noch effizienter und stressfreier zu
                gestalten.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 my-8"></div>
      {/* Why Learn Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          Warum Lexware Office mit AS Vision Partners lernen?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Individuelle Anpassung
            </h3>
            <p className="text-gray-700">
              Die Schulung wird auf deine Bedürfnisse und dein Unternehmen
              abgestimmt – Lexware Office ist dabei ein hilfreiches Werkzeug,
              das wir optimal einsetzen.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
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
              Praxisorientiert
            </h3>
            <p className="text-gray-700">
              Statt trockener Theorie stehen konkrete Anwendungen im
              Vordergrund, die du direkt nutzen kannst.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 0-3.35a1.724 1.724 0 00-1.066-2.573c-1.543-.94-3.31.826-2.37 2.37a1.724 1.724 0 00-1.065 2.572c-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 001.066 2.573c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Flexibilität
            </h3>
            <p className="text-gray-700">
              Egal ob du Einsteiger bist oder dein Wissen vertiefen möchtest –
              die Inhalte richten sich nach deinem Kenntnisstand und deinem
              Alltag.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              <svg
                className="w-5 h-5 text-purple-600 mr-2"
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
              Zertifizierte Expertise
            </h3>
            <p className="text-gray-700">
              Mit meiner Erfahrung als Lexware Office Coachin zeige ich dir
              bewährte Methoden, die dir Zeit und Aufwand sparen und dich in
              deiner täglichen Arbeit unterstützen.
            </p>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      {/* <div className="bg-purple-100 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-4">
          Bereit für stressfreie Buchhaltung?
        </h3>
        <p className="mb-6">
          Vereinbare jetzt dein persönliches Beratungsgespräch und starte durch
          mit Lexware Office!
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
          Jetzt Termin vereinbaren
        </button>
      </div> */}
      <div className="my-20 md:my-36">
        {/* <AppointmentBanner
          gradientColor="from-purple-200"
          gradientColor2="to-blue-200"
          buttonColor="bg-purple-700"
        /> */}
        <div className="my-20 md:my-36">
          <div className="mx-auto  w-full rounded-xl h-[26rem] md:h-[22rem] relative overflow-hidden max-w-7xl shadow-gray-400 shadow-[-3px_0px_15px_2px_rgba(0,0,0,0.2)] ">
            <div
              className={` bg-gradient-to-r from-purple-200 to-blue-200 flex flex-col items-center gap-8 p-6  h-full justify-center text-center text-white`}
            >
              <Subtitle
                text="Bereit loszulegen?"
                color="gray-700"
                position="center"
                size="4xl"
                mobileSize="text-3xl"
              />
              <p className="text-anna-gray mb-2 font-thin text-sm sm:text-base">
                Unser Team führt dich zum Erfolg
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
                <button
                  className={`rounded-3xl bg-purple-700  text-anna-white font-medium font-cabin px-4 py-2 sm:px-5 text-sm sm:text-base hover:bg-red-700 duration-700 border border-anna-white`}
                >
                  Vereinbare einen Termin
                </button>

                <button
                  className="relative rounded-3xl bg-indigo-600 text-anna-white font-medium font-cabin px-4 py-2 sm:px-5 overflow-hidden text-sm sm:text-base w-fit mx-auto border"
                  onMouseEnter={() => setHoverIn(true)}
                  onMouseLeave={() => setHoverIn(false)}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    boxShadow:
                      "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
                  }}
                >
                  <p className="text-anna-white">Kontakt</p>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                      hoverIn ? "-bottom-3" : "-bottom-8"
                    } h-8 sm:h-11 w-8 sm:w-11 aspect-square`}
                    style={{
                      backgroundColor: "rgb(234, 168, 121)",
                      filter: "blur(10px)",
                      borderRadius: "100px",
                      opacity: 0.3,
                    }}
                  ></div>
                </button>
              </div>
              {/* <div className="absolute right-0 bottom-[0%] " >
      <img src="/profile/colleagues.png" alt="" className="bg-cover "/>
      </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buchhaltung;

import { zoomIn } from "@/app/utils/motion";
import { motion } from "framer-motion";
import GlassBoxReverse from "./GlassBoxReverse";

const Product = () => {
  return (
    <div>
      <div className="relative h-[35rem] md:h-[40rem] w-full  border">
        <div className="absolute inset-0 flex items-center justify-center z-[3]">
          <motion.div
            variants={zoomIn(0.2, 1.25)}
            initial="hidden"
            animate="show"
            className="relative w-full h-full max-w-[90vw] max-h-[90vh]"
          >
            {/* Contenedor principal de la imagen */}
            <div className="w-full h-full flex items-center justify-center">
              <a
                className="flex flex-col items-center justify-center relative z-0 w-fit mx-auto bg-[linear-gradient(180deg,_#fff_50%,_#e7dbdb_100%)]"
                style={{
                  boxSizing: "border-box",
                  boxShadow:
                    "0 5px 50px rgba(0, 0, 0, 0.5), inset 0 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="bg-transparent max-w-[300px] md:max-w-[500px] overflow-hidden">
                  <div className="flex transition-transform duration-700 ease-in-out">
                    <img
                      src="/leistungen/businessplan/businessplan-folder.png"
                      alt="Business Plan"
                      className="border-2 w-full flex-shrink-0"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Elementos GlassBox alrededor - Versión responsive */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] md:max-w-[250px]">
              <GlassBoxReverse
                title="Gründungszuschuss"
                text="Your financial kick"
                button="See more"
              />
            </div>

            <div className="absolute top-1/4 -right-2 md:-right-20 translate-y-1/2 w-[20%] max-w-[200px] md:max-w-[250px]">
              <GlassBoxReverse
                title="Asesoramiento"
                text="Professional guidance"
                button="Learn more"
              />
            </div>

            <div className="absolute top-1/2 -left-2 md:-left-20 -translate-y-1/2 w-[80%] max-w-[200px] md:max-w-[250px]">
              <GlassBoxReverse
                title="Planificación"
                text="Strategic planning"
                button="Details"
              />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[90%] md:max-w-[250px]">
              <GlassBoxReverse
                title="Financiamiento"
                text="Funding options"
                button="Explore"
              />
            </div>

            <div className="absolute bottom-1/4 -left-2 md:-left-20 translate-y-1/2 w-[80%] max-w-[200px] md:max-w-[250px]">
              <GlassBoxReverse
                title="Legal"
                text="Legal support"
                button="View"
              />
            </div>

            <div className="absolute top-3/4 -right-2 md:-right-20 -translate-y-1/2 w-[80%] max-w-[200px] md:max-w-[250px]">
              <GlassBoxReverse
                title="Networking"
                text="Business connections"
                button="Connect"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="">
        {/* Hero Section */}
        {/* <div className="">
          <h6 className="text-lg font-semibold text-gray-500 mb-2">
            Leistungen - Businessplan
          </h6>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Businessplan – Dein Fahrplan zum Erfolg
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ein Businessplan ist mehr als nur ein Dokument – er ist der Kompass
            für deine Selbstständigkeit. Er zeigt dir nicht nur, wohin du
            willst, sondern auch, wie du dorthin gelangst. Gleichzeitig dient er
            als überzeugendes Werkzeug, um Partner, Banken und Investoren von
            deiner Idee zu begeistern.
          </p>
        </div> */}

        {/* Why Important Section */}
        {/* <div className="mb-12">
          <div className="border-t border-gray-200 my-8"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Warum ist ein Businessplan wichtig?
          </h2>
          <p className="text-gray-700 mb-4">
            Ein Businessplan bildet die Grundlage für viele wichtige
            Entscheidungen – sowohl für dich selbst als auch für externe
            Partner. Er hilft dir:
          </p>
          <ul className="space-y-3 pl-5">
            {[
              "Deine Geschäftsidee zu strukturieren und weiterzuentwickeln.",
              "Klarheit über die finanziellen Anforderungen deines Vorhabens zu gewinnen.",
              "Fördermittel wie den Gründungszuschuss zu beantragen.",
              "Banken und Investoren von deiner Idee zu überzeugen.",
              "Risiken zu erkennen und ihnen frühzeitig zu begegnen.",
            ].map((item, index) => (
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
          <p className="text-gray-700 mt-4">
            Ein guter Businessplan ist nicht nur ein Dokument, sondern eine
            Strategie, die dich auf deinem Weg begleitet.
          </p>
        </div> */}

        {/* Content Section */}
        <div className="mb-12 block md:hidden">
          <div className="border-t border-gray-200 my-8"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Was gehört in einen Businessplan?
          </h2>
          <p className="text-gray-700 mb-4">
            Ein vollständiger und überzeugender Businessplan umfasst:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
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
            ].map((item, index) => (
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

        {/* Benefits Section */}
        <div className="">
          <div className="border-t border-gray-200 my-8"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dein Vorteil mit AS Vision Partners:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Erfahrung und Expertise",
                content:
                  "Wir wissen, worauf es bei einem erfolgreichen Businessplan ankommt.",
              },
              {
                icon: (
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
                title: "Individuelle Betreuung",
                content:
                  "Jeder Businessplan ist so einzigartig wie deine Idee – wir passen unsere Unterstützung an deine Bedürfnisse an.",
              },
              {
                icon: (
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
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                title: "Klarheit und Struktur",
                content:
                  "Wir helfen dir, komplexe Inhalte verständlich und überzeugend darzustellen.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h3 className="font-semibold text-lg ml-2">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            Bereit für den nächsten Schritt?
          </h3>
          <p className="mb-6 text-gray-700">
            Lass uns gemeinsam deinen Businessplan erstellen und deine Idee auf
            die Erfolgsspur bringen. Kontaktiere uns für ein unverbindliches
            Erstgespräch – wir freuen uns darauf, dich zu unterstützen!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            Jetzt Beratungstermin vereinbaren
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Product;

{
  /* <div className="mt-40 ">
        <h6>Leistungen - Businessplan</h6>
        <h1>Businessplan – Dein Fahrplan zum Erfolg</h1>
        <p className="text-black ">
          Ein Businessplan ist mehr als nur ein Dokument – er ist der Kompass
          für deine Selbstständigkeit. Er zeigt dir nicht nur, wohin du willst,
          sondern auch, wie du dorthin gelangst. Gleichzeitig dient er als
          überzeugendes Werkzeug, um Partner, Banken und Investoren von deiner
          Idee zu begeistern.
        </p>
        <div className="h-[0.02rem] w-full bg-black my-4"></div>
        <p>
          Warum ist ein Businessplan wichtig? Ein Businessplan bildet die
          Grundlage für viele wichtige Entscheidungen – sowohl für dich selbst
          als auch für externe Partner. Er hilft dir:
        </p>
        <ul className="list-disc list-inside">
          <li>Deine Geschäftsidee zu strukturieren und weiterzuentwickeln.</li>
          <li>
            Klarheit über die finanziellen Anforderungen deines Vorhabens zu
            gewinnen.
          </li>
          <li>Fördermittel wie den Gründungszuschuss zu beantragen.</li>
          <li>Banken und Investoren von deiner Idee zu überzeugen.</li>
          <li>Risiken zu erkennen und ihnen frühzeitig zu begegnen.</li>
        </ul>
        <p>
          Ein guter Businessplan ist nicht nur ein Dokument, sondern eine
          Strategie, die dich auf deinem Weg begleitet.
        </p>
        <div className="h-[0.02rem] w-full bg-black my-4"></div>

        <p>
          Was gehört in einen Businessplan? Ein vollständiger und überzeugender
          Businessplan umfasst:
        </p>
        <ul className="list-disc list-inside">
          <li>
            Executive Summary: Eine kurze, prägnante Übersicht über dein
            Vorhaben.
          </li>
          <li>
            Beschreibung des Gründers und der Geschäftsidee: Was motiviert und
            qualifiziert dich? Was macht dein Unternehmen besonders und welche
            Probleme löst es? Welche Produkte oder Leistungen bietest du an?
          </li>
          <li>
            Organisatorische Struktur: Rechtsform, Personalplanung und interne
            Abläufe.
          </li>
          <li>
            Marktanalyse: Wer sind deine Zielgruppen? Wie sieht der Wettbewerb
            aus? Was ist die aktuelle Lage am Markt?
          </li>
          <li>
            Marketing- und Vertriebsstrategie: Wie erreichst du deine Kunden und
            baust deinen Markt auf?
          </li>
          <li>
            Finanzplanung: Kapitalbedarf, Umsatzprognosen, Rentabilität und
            Liquiditätsplanung.
          </li>
        </ul>

        <div className="h-[0.02rem] w-full bg-black my-4"></div>
        <p>
          Bei AS Vision Partners stehen wir dir von Anfang an zur Seite.
          Gemeinsam erstellen wir einen professionellen Businessplan, der nicht
          nur fundiert, sondern auch ansprechend ist. Wir sorgen dafür, dass
          dein Businessplan nicht nur deine Vision widerspiegelt, sondern auch
          den Anforderungen von Banken, Investoren oder der Agentur für Arbeit
          gerecht wird.
        </p>
        <div className="h-[0.02rem] w-full bg-black my-4"></div>
        <div>
          <p>Dein Vorteil mit AS Vision Partners:</p>
          <ul className="list-disc list-inside">
            <li>
              Erfahrung und Expertise: Wir wissen, worauf es bei einem
              erfolgreichen Businessplan ankommt.
            </li>
            <li>
              Individuelle Betreuung: Jeder Businessplan ist so einzigartig wie
              deine Idee – und wir passen unsere Unterstützung an deine
              Bedürfnisse an.
            </li>
            <li>
              Klarheit und Struktur: Wir helfen dir, auch komplexe Inhalte
              verständlich und überzeugend darzustellen.
            </li>
          </ul>
        </div>
        <div className="h-[0.02rem] w-full bg-black my-4"></div>
        <p>
          Bereit für den nächsten Schritt? Lass uns gemeinsam deinen
          Businessplan erstellen und deine Idee auf die Erfolgsspur bringen.
          Kontaktiere uns für ein unverbindliches Erstgespräch – wir freuen uns
          darauf, dich zu unterstützen!
        </p>
      </div> */
}

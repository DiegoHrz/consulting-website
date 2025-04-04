import { zoomIn } from "@/app/utils/motion";
import { motion } from "framer-motion";
import GlassBoxReverse from "./GlassBoxReverse";

const Product = () => {
  return (
    <div>
      <div className="flex gap-[-10px] items-center relative h-screen">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[3] mt-20">
          <motion.div
            variants={zoomIn(0.2, 1.25)}
            initial="hidden" // Estado inicial
            animate="show"
            className=" z-[3] w-full relative "
          >
            {/* w-30rem h-96 */}
            <img
              src="/leistungen/businessplan/businessplan-folder.png"
              alt=""
              className="w-auto h-[30rem] shadow-gray-400 shadow-[0px_0px_15px] "
            />
            <div className="absolute top-20 -right-72">
              <GlassBoxReverse
                title="Gründungszuschuss"
                text=""
                button=""
              />
            </div>
            <div className="absolute top-10 -left-72">
              <GlassBoxReverse
                title="Gründungszuschuss"
                text="Your financial kick "
                button="See more"
              />
            </div>
            <div className="absolute top-80 -left-72">
              <GlassBoxReverse
                title="Gründungszuschuss"
                text="Your financial kick "
                button="See more"
              />
            </div>
            <div className="absolute left-1/2 -top-44 -translate-x-1/2">
              <GlassBoxReverse
                title="Gründungszuschuss"
                text="Your financial kick "
                button="See more"
              />
            </div>
            <div className="absolute left-96 -bottom-10">
              <GlassBoxReverse
                title="Gründungszuschuss"
                text="Your financial kick "
                button="See more"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-40 ">
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
      </div>
    </div>
  );
};

export default Product;

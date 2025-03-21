"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import BlurBgImage from "./BlurBg/BlurBgImage";

const texts = [
  {
    question: "Wie läuft das Coaching bei AS Vision Partners ab?",
    answer:
      "Unsere Coachings sind flexibel und individuell auf dich zugeschnitten. Wir bieten Online-Coachings an, die sich an deinem Zeitplan orientieren. Gemeinsam erarbeiten wir Lösungen, die zu deinen Zielen passen, und stehen dir bei jedem Schritt zur Seite.",
  },
  {
    question: "Kann das Coaching finanziert werden?",
    answer:
      "Ja, in vielen Fällen ist eine Finanzierung möglich. Wenn du Arbeitslosengeld 1 beziehst, kannst du z. B. einen AVGS-Gutschein beantragen, der die Kosten für das Coaching abdeckt. Auch für etablierte Unternehmen gibt es Fördermöglichkeiten durch das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA). Kontaktiere uns, und wir prüfen gemeinsam deine Optionen.",
  },
  {
    question: "Wie hoch ist mein Gründungszuschuss?",
    answer:
      "Der Gründerzuschuss des Arbeitsamtes beläuft sich auf Dein letztes Arbeitslosengeld I plus eine Pauschale von 300€ zur sozialen Absicherung. Dieser wird  zunächst für 6 Monate zusätzlich zum ALG I gewährt. Danach kann die Fortzahlung um weitere 9 Monate verlängert werden.",
  },
  {
    question: "Welche Unterlagen benötige ich für den Gründungszuschuss?",
    answer: [
      "Einen Businessplan",
      "Eine Kapitalbedarfs- und Finanzierungsübersicht",
      "Eine fachkundige Stellungnahme",
      "Deinen Lebenslauf und relevante Nachweise über Qualifikationen",
      "Das ausgefüllte Antragsdokument",
    ],
    additionalInfo:
      "Wir unterstützen dich bei der  Erstellung aller Unterlagen.",
  },
  {
    question: "Wie lange dauert es, einen Businessplan zu erstellen?",
    answer:
      "Die Dauer hängt von der Komplexität deines Vorhabens ab. In der Regel benötigen wir 2–3 Wochen, um einen vollständigen Businessplan inklusive Finanzplanung zu erstellen.",
  },
  {
    question: "Kann ich Lexware Office auch ohne Vorkenntnisse erlernen?",
    answer:
      "Absolut! Unsere Schulungen sind so gestaltet, dass sie sich an deinem Kenntnisstand orientieren. Auch ohne Vorkenntnisse wirst du in kurzer Zeit lernen, deine Buchhaltung mit Lexware Office effizient zu führen.",
  },
  {
    question: "Wie lange dauert es, eine Website zu erstellen?",
    answer:
      "Das hängt von den Anforderungen ab. Eine einfache Website kann in wenigen Wochen fertig sein, während komplexere Projekte mehr Zeit benötigen. Wir besprechen deine Wünsche im Vorfeld und geben dir einen realistischen Zeitrahmen.",
  },
  {
    question: "Welche Zielgruppe unterstützt ihr?",
    answer:
      "Unsere Dienstleistungen richten sich an Gründerinnen, Selbstständige und Unternehmerinnen, die Unterstützung bei der Planung, Strukturierung und Umsetzung ihrer Vorhaben suchen. Egal, ob du am Anfang stehst oder ein bestehendes Unternehmen weiterentwickeln möchtest – wir sind für dich da.",
  },
  {
    question:
      "Warum brauche ich einen Businessplan, auch wenn ich keinen Gründungszuschuss beantragen möchte?",
    answer:
      "Ein Businessplan hilft dir, deine Geschäftsidee klar zu strukturieren, potenzielle Herausforderungen frühzeitig zu erkennen und dein Vorhaben gezielt umzusetzen. Auch für Gespräche mit Banken, Investoren oder Geschäftspartnern ist ein professioneller Businessplan unerlässlich.",
  },
  {
    question: "Kann ich auch nur einzelne Leistungen buchen?",
    answer:
      "Ja, unsere Leistungen sind modular aufgebaut. Du kannst gezielt die Unterstützung wählen, die du benötigst – sei es die Erstellung eines Businessplans, eine Schulung in Lexware Office oder die Entwicklung einer Website.",
  },
  {
    question: "Bietet ihr auch langfristige Begleitung an?",
    answer:
      "Natürlich. Wir stehen dir nicht nur in der Anfangsphase zur Seite, sondern begleiten dich auch langfristig bei der Weiterentwicklung deines Unternehmens – sei es durch regelmäßige Beratungen oder spezifische Coachings.",
  },
];

const AccordionElement = () => {
  const [accordionSelected, setAccordionSelected] = useState<
    string | undefined
  >(undefined);

  const handler = (value: string) => {
    setAccordionSelected(value === accordionSelected ? undefined : value);
    console.log(value);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full no-underline text-anna-brown relative"
      value={accordionSelected}
      onValueChange={handler}
    >
      <BlurBgImage />
      {texts.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className={`px-3 rounded-lg duration-700 relative border-[#afdae8] bg-white/10   ${
            accordionSelected === `item-${index}`
              ? "shadow-anna-blue shadow-[0px_1px_3px_0px]"
              : "hover:shadow-anna-blue hover:shadow-[0px_1px_3px_0px]"
          }`}
        >
          {/* <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 hover:-bottom-1  -bottom-8
            h-11 w-11 aspect-square `}
            style={{
              backgroundColor: "rgb(234, 168, 121)",
              filter: "blur(10px)",
              borderRadius: "100px",
              opacity: 0.3,
            }}
          ></div> */}
          {/* bg-[#ebe9e9] */}
          <AccordionTrigger
            className={`no-underline ${
              accordionSelected === `item-${index}`
                ? "text-anna-blue font-semibold"
                : "hover:no-underline"
            } hover:no-underline no-underline`}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            {Array.isArray(item.answer) ? (
              <ul className="list-disc pl-6">
                {item.answer.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            ) : (
              item.answer
            )}
            {item.additionalInfo && (
              <p className="pt-2 ml-2 font-semibold ">{item.additionalInfo}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionElement;

{
  /* <Link
  href="/"
  className="z-10 w-fit mx-auto relative overflow-hidden rounded-3xl font-cabin px-5 py-2"
  style={{
    background: "rgba(255, 255, 255, 0.02)",
    boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
  }}
>
  <p className="text-anna-white">{button}</p>
  <div
    className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 hover:-bottom-1  -bottom-8
      h-11 w-11 aspect-square `}
    style={{
      backgroundColor: "rgb(234, 168, 121)",
      filter: "blur(10px)",
      borderRadius: "100px",
      opacity: 0.3,
    }}
  ></div>
</Link>; */
}

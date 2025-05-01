"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import BlurBgImage from "./BlurBg/BlurBgImage";
import { useLanguageStore } from "../store/useLanguageStore";

const faqTexts = {
  de: [
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
        "Der Gründerzuschuss des Arbeitsamtes beläuft sich auf Dein letztes Arbeitslosengeld I plus eine Pauschale von 300€ zur sozialen Absicherung. Dieser wird zunächst für 6 Monate zusätzlich zum ALG I gewährt. Danach kann die Fortzahlung um weitere 9 Monate verlängert werden.",
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
        "Wir unterstützen dich bei der Erstellung aller Unterlagen.",
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
  ],
  en: [
    {
      question: "How does coaching at AS Vision Partners work?",
      answer:
        "Our coaching is flexible and tailored to your individual needs. We offer online coaching that fits your schedule. Together we develop solutions that match your goals and support you every step of the way.",
    },
    {
      question: "Can the coaching be financed?",
      answer:
        "Yes, in many cases financing is possible. If you receive unemployment benefits (ALG I), you can apply for an AVGS voucher that covers the coaching costs. There are also funding options for established companies through the Federal Office for Economic Affairs and Export Control (BAFA). Contact us and we'll review your options together.",
    },
    {
      question: "How much is my start-up grant?",
      answer:
        "The start-up grant from the employment office amounts to your last ALG I payment plus a flat rate of €300 for social security. This is initially granted for 6 months in addition to ALG I. After that, the payment can be extended for another 9 months.",
    },
    {
      question: "What documents do I need for the start-up grant?",
      answer: [
        "A business plan",
        "A capital requirement and financing overview",
        "An expert opinion",
        "Your CV and relevant qualification certificates",
        "The completed application document",
      ],
      additionalInfo: "We support you in preparing all documents.",
    },
    {
      question: "How long does it take to create a business plan?",
      answer:
        "The duration depends on the complexity of your project. As a rule, we need 2-3 weeks to create a complete business plan including financial planning.",
    },
    {
      question: "Can I learn Lexware Office without prior knowledge?",
      answer:
        "Absolutely! Our training is designed to match your level of knowledge. Even without prior knowledge, you'll quickly learn how to efficiently manage your accounting with Lexware Office.",
    },
    {
      question: "How long does it take to create a website?",
      answer:
        "This depends on the requirements. A simple website can be completed in a few weeks, while more complex projects require more time. We'll discuss your wishes in advance and give you a realistic timeframe.",
    },
    {
      question: "Which target group do you support?",
      answer:
        "Our services are aimed at founders, self-employed individuals and entrepreneurs who are looking for support in planning, structuring and implementing their projects. Whether you're just starting out or want to develop an existing business - we're here for you.",
    },
    {
      question:
        "Why do I need a business plan even if I don't want to apply for a start-up grant?",
      answer:
        "A business plan helps you to clearly structure your business idea, identify potential challenges at an early stage and implement your project in a targeted manner. A professional business plan is also essential for discussions with banks, investors or business partners.",
    },
    {
      question: "Can I book individual services?",
      answer:
        "Yes, our services are modular. You can choose exactly the support you need - whether it's creating a business plan, Lexware Office training or developing a website.",
    },
    {
      question: "Do you also offer long-term support?",
      answer:
        "Of course. We not only support you in the initial phase, but also accompany you in the long-term development of your company - whether through regular consultations or specific coaching.",
    },
  ],
};

const AccordionElement = () => {
  const [accordionSelected, setAccordionSelected] = useState<string | undefined>(undefined);
  const { lang } = useLanguageStore();
  const texts = faqTexts[lang];

  const handler = (value: string) => {
    setAccordionSelected(value === accordionSelected ? undefined : value);
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
          className={`px-3 rounded-lg duration-700 relative border-[#afdae8] bg-white/30 shadow-anna-blue shadow-[0px_0px_0.5px_0px] my-2 ${
            accordionSelected === `item-${index}`
              ? "shadow-anna-blue shadow-[0px_1px_3px_0px]"
              : "hover:shadow-anna-blue hover:shadow-[0px_1px_3px_0px]"
          }`}
        >
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
              <p className="pt-2 ml-2 font-semibold">{item.additionalInfo}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionElement;
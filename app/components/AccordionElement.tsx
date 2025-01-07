"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const texts = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
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
      className="w-full no-underline text-anna-brown "
      value={accordionSelected}
      onValueChange={handler}
    >
      {texts.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`} 
          className={`px-2 rounded-lg duration-700 ${
            accordionSelected === `item-${index}`
              ? "shadow-gray-400 shadow-[0px_1px_3px_0px]"
              : "hover:shadow-gray-400 hover:shadow-[0px_1px_3px_0px]"
          }`}
        >
          <AccordionTrigger
            className={`no-underline ${
              accordionSelected === `item-${index}`
                ? "text-[#0171E3] font-semibold"
                : "hover:no-underline"
            } hover:no-underline no-underline`}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionElement;

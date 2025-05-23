"use client";
import Wrapper from "../hoc/Wrapper";
import { useLanguageStore } from "../store/useLanguageStore";
import AccordionElement from "./AccordionElement";
import Title from "./customTags/Title";

const FAQ = () => {
  const { lang } = useLanguageStore();
  return (
    <div className="flex flex-col gap-16" id="faq">
      <div className="flex flex-col gap-[24px]">
        <Title
          text={
            lang === "de"
              ? "Die meistgestellten Fragen unserer Kunden"
              : "The most frequently asked questions from our customers"
          }
          additionalTitle="faq"
          additionalClasses="text-center"
        />
        {/* <h2 className=" text-center text-xl pb-6" > reviews</h2>
      <h1 className=" text-center pb-8 sm:pb-20 text-2xl sm:text-[54px] max-w-[950px] mx-auto leading-[1]">
      Most questiones asked by our customers
      </h1> */}
        {/* any text */}
      </div>
      <div className="rounded-lg ">
        <AccordionElement />
      </div>
    </div>
  );
};

export default Wrapper(FAQ, "faq");

"use client";
import Wrapper from "../hoc/Wrapper";
import AccordionElement from "./AccordionElement";


const FAQ = () => {
  return (
    <div className="" id="faq">
      {/* <Title text="FAQ" additionalClasses="text-center" /> */}
      <h2 className=" text-center text-xl pb-6" > reviews</h2>
      <h1 className=" text-center pb-8 sm:pb-20 text-2xl sm:text-[54px] max-w-[950px] mx-auto leading-[1]">
        Most questiones asked by our customers
      </h1>
      <AccordionElement />
    </div>
  );
};

export default Wrapper(FAQ, "faq");

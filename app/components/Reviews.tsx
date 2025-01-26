"use client";

import { CarouselDemo } from "./CarouselDemo";
import Wrapper from "../hoc/Wrapper";

const Reviews = () => {
  return (
    <div className=" rounded-lg  py-6 ">
      {/* <Title text="Reviews" additionalClasses="text-center" /> */}
      <p className="font-vollkornSC text-center text-xl pb-6" > reviews</p>
      <h1 className="tracking-tight text-2xl sm:text-[54px] text-center font-semibold max-w-[950px] mx-auto pb-6 sm:pb-20">
        What our users say
      </h1>
      <CarouselDemo />
    </div>
  );
};

export default Wrapper(Reviews, "reviews");

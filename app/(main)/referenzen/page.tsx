'use client'
import HeroSecondary from "@/app/components/HeroSecondary";


import React from "react";
import Recommendations1 from "./recommendations/Recommendations1";
import Recommendation2 from "./recommendations/Recommendation2";
import Recommendation3 from "./recommendations/Recommendation3";
import Recommendation4 from "./recommendations/Recommendation4";
import Recommendation5 from "./recommendations/Recommendation5";
import Recommendation6 from "./recommendations/Recommendation6";
import Recommendation7 from "./recommendations/Recommendation7";
import Recommendation8 from "./recommendations/Recommendation8";
import Recommendation9 from "./recommendations/Recommendation9";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const Referenzen = () => {

  const {lang} =useLanguageStore()

  return (
    <div className="pb-10 sm:pb-24">
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="/pages-imgs/referenzen.avif"
          header="our customers"
          title={lang==='de'?'Referenzen':'Opinions'}
          text=""
        />
      </div>
      {/* <div>
        <Placeholder text="Referenzen" />
      </div> */}
      <div className="flex flex-col sm:gap-24 gap-12 " >

      <Recommendations1 />
      <Recommendation2 />
      <Recommendation3 />
      <Recommendation4 />
      <Recommendation5 />
      <Recommendation6 />
      <Recommendation7 />
      <Recommendation8 />
      <Recommendation9 />
      </div>
    </div>
  );
};

export default Referenzen;

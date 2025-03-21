import HeroSecondary from "@/app/components/HeroSecondary";

import Recommendation2 from "@/app/components/recommendations/Recommendation2";
import Recommendation3 from "@/app/components/recommendations/Recommendation3";
import Recommendation4 from "@/app/components/recommendations/Recommendation4";
import Recommendations1 from "@/app/components/recommendations/Recommendations1";
import React from "react";

const Referenzen = () => {
  return (
    <div className="pb-10 sm:pb-24">
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="/pages-imgs/referenzen.avif"
          header="our customers"
          title="Referenzen"
          text="Wir sind eine Beratungsfirma, die Unternehmen mit
      maßgeschneiderten Lösungen unterstützt. Unser Ziel ist es,
      gemeinsam Ihre Vision erfolgreich umzusetzen."
        />
      </div>
      {/* <div>
        <Placeholder text="Referenzen" />
      </div> */}
      <div className="flex flex-col sm:gap-24 gap-10 " >

      <Recommendations1 />
      <Recommendation2 />
      <Recommendation3 />
      <Recommendation4 />
      </div>
    </div>
  );
};

export default Referenzen;

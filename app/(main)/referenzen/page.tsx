import HeroSecondary from "@/app/components/HeroSecondary";
import Pitch from "@/app/components/Pitch";
import Placeholder from "@/app/components/Placeholder";
import React from "react";

const Referenzen = () => {
  return (
    <div>
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
    <div>
    <Placeholder text='Referenzen' />
    </div>
    <Pitch image=""/>
  </div>
  );
};

export default Referenzen;

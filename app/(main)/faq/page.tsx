import HeroSecondary from "@/app/components/HeroSecondary";
import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="balloons.jpg"
          header="questions"
          title="FAQ"
          text="Wir sind eine Beratungsfirma, die Unternehmen mit
        maßgeschneiderten Lösungen unterstützt. Unser Ziel ist es,
        gemeinsam Ihre Vision erfolgreich umzusetzen."
        />
      </div>
      <div></div>
    </div>
  );
};

export default Faq;

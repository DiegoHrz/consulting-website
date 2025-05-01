"use client";
import ContactForm from "@/app/components/ContactForm";
import HeroSecondary from "@/app/components/HeroSecondary";
import { useLanguageStore } from "@/app/store/useLanguageStore";

import React from "react";

const Contact = () => {
  const { lang } = useLanguageStore();
  return (
    <div>
      {/* {lang === "de" ? "kontakt" : "contact"} */}
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="/pages-imgs/kontakt.avif"
          header={lang === "de" ? "kontakt" : "contact"}
          title={lang === "de" ? "Kontakt" : "Contact"}
          text={
            lang === "de"
              ? "Wir sind eine Beratungsfirma, die Unternehmen mit maßgeschneiderten Lösungen unterstützt. Unser Ziel ist es, gemeinsam deine Vision erfolgreich umzusetzen."
              : " We are a consulting firm that supports companies with tailor-made solutions. Our goal is to successfully implement your vision together."
          }
        />
      </div>
      {/* <div>
        <Placeholder text="Kontakt" />
      </div> */}
      <ContactForm />
    </div>
  );
};

export default Contact;

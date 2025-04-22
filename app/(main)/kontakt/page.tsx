import ContactForm from "@/app/components/ContactForm";
import HeroSecondary from "@/app/components/HeroSecondary";
import Placeholder from "@/app/components/Placeholder";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="/pages-imgs/kontakt.avif"
          header="kontakt"
          title="Kontakt"
          text="Wir sind eine Beratungsfirma, die Unternehmen mit
      maßgeschneiderten Lösungen unterstützt. Unser Ziel ist es,
      gemeinsam Ihre Vision erfolgreich umzusetzen."
        />
      </div>
      <div>
        <Placeholder text="Kontakt" />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;

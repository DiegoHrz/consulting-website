"use client";
import React from "react";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Intro from "./components/Intro";
import { Table } from "./components/Table";
import Pitch from "@/app/components/Pitch";

import { ContactBanner } from "@/app/components/ContactBanner";

const Businessplan = () => {
  return (
    <div className="  h-full flex flex-col gap-[80px] md:gap-[150px]  lg:gap-[180px] ">
      <Hero />
      <Intro />

      <Table />
      <Pitch
        image="/profile/profile.jpg"
        title="Jetzt Unternehmer werden"
        text="Möchten Sie ein Unternehmen aufbauen, führen oder erweitern, das
                erfolgreich ist? Träumen Sie davon, eine unverwechselbare Marke zu
                schaffen, die Ihre Vision widerspiegelt und Ihre Zielgruppe
                inspiriert? Die Experten von AS Vision Partners unterstützen Sie
                dabei, Ihr Einkommen, Ihre Reichweite und die Stärke Ihrer Marke zu
                maximieren. Sind Sie bereit, mit uns durchzustarten?"
        button="Bunchung"
      />
      <Product />
      <ContactBanner />
    </div>
  );
};

export default Businessplan;

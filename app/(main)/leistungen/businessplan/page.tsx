"use client";
import React from "react";
import Hero from "./components/Hero";
import Product from "./components/Product";

import { Table } from "./components/Table";

import PitchBusinessplan from "./components/PitchBusinessplan";
import AppointmentBanner from "@/app/components/AppointmentBanner";

const Businessplan = () => {
  return (
    <div className="  h-full flex flex-col gap-[80px] md:gap-[150px]  lg:gap-[180px] ">
      <Hero />
      {/* <Intro /> */}

      <Table />
      <PitchBusinessplan
        image="/profile/profile.jpg"
        title="Jetzt Unternehmer werden"
        text="Mit uns, den Experten von AS Vision Partners, gründest du ein profitables Unternehmen, das deine Ziele und deine Werte widerspiegelt. Dazu erstellen wir einen Geschäftsplan, der deine Geschäftsidee oder dein Startup in ein solides Unternehmen mit Finanzierung und realistischen Meilensteinen verwandelt."
        button="Buchung"
      />
      <Product />
      {/* <ContactBanner /> */}
      <div className="mb-20 md:mb-36">
        <AppointmentBanner
          gradientColor2="to-blue-200"
          buttonColor="bg-blue-900"
        />
      </div>
    </div>
  );
};

export default Businessplan;

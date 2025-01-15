import Collage from "@/app/components/customIcons/Collage";

import Subtitle from "@/app/components/customTags/Subtitle";

import HeroSecondary from "@/app/components/HeroSecondary";
import Placeholder from "@/app/components/Placeholder";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          header="origins"
          title="Über uns"
          text="Wir sind eine Beratungsfirma, die Unternehmen mit
        maßgeschneiderten Lösungen unterstützt. Unser Ziel ist es,
        gemeinsam Ihre Vision erfolgreich umzusetzen."
        imageStyles=""
        />
      </div>
      <Placeholder text='Uber uns' />
      <div className="mb-[100px]">
        <Collage
          main_image="worker2.jpg"
          left_top_image="worker1.jpg"
          right_top_image="worker3.jpg"
          left_bottom_image="worker4.jpeg"
          right_bottom_image="worker5.jpeg"
        />
      </div>
      <div className="mt-[100px] w-full    mb-[100px]">
        <div className="mx-auto bg-[#115369] w-full max-w-7xl p-14 flex flex-col rounded-xl h-[22rem] justify-center gap-5 relative overflow-hidden">
          <Subtitle
            text="Ready to Start?"
            color="white"
            position="left"
            size="4xl"
          />
          <p className="text-white mb-2 font-thin">
          Unser Workflow – Schritt für Schritt zu deinem Erfolg
          </p>
          <div className="flex gap-4">
            <button className="rounded-3xl bg-[#4cb4d7]  text-gray-800 font-medium font-cabin px-5 py-2">
              Make an appointment
            </button>
            <button className="rounded-3xl backdrop-blur-xl bg-white/20 text-anna-white font-medium font-cabin px-5 py-2">
              Contact us
            </button>
          </div>
          {/* <div className="absolute right-0 bottom-[0%] " >
            <img src="/profile/colleagues.png" alt="" className="bg-cover "/>
          </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default About;

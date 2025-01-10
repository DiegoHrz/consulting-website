import Collage from "@/app/components/customIcons/Collage";
import Header from "@/app/components/customTags/Header";
import Title from "@/app/components/customTags/Title";
import HeroSecondary from "@/app/components/HeroSecondary";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="balloons.jpg"
          header="origins"
          title="Über uns"
          text="Wir sind eine Beratungsfirma, die Unternehmen mit
        maßgeschneiderten Lösungen unterstützt. Unser Ziel ist es,
        gemeinsam Ihre Vision erfolgreich umzusetzen."
        />
      </div>
      <div>
        <Collage
          main_image="worker2.jpg"
          left_top_image="worker1.jpg"
          right_top_image="worker3.jpg"
          left_bottom_image="worker4.jpeg"
          right_bottom_image="worker5.jpeg"
        />
      </div>
    </div>
  );
};

export default About;

"use client";
import React from "react";
import RoadmapPath from "./RoadmapSvg";
import NumberBox from "../NumberBox";
import Title from "../customTags/Title";

const RoadmapContainer = () => {
  const plans = [
    {
      id: "1",
      title: "erstgespräch",
      description: "Erste Kontaktaufnahme und Bedarfsanalyse",
      color: "#696D62",
    },
    {
      id: "2",
      title: "organisatorisches",
      description: "Planung und Abstimmung der Details",
      color: "#89ACA6",
    },
    {
      id: "3",
      title: "projektphase",
      description: "Offizielle Projektinitiierung",
      color: "#A1755D",
    },
    {
      id: "4",
      title: "nachbetreuung",
      description: "Kontinuierliche Unterstützung",
      color: "#125369",
    },
  ];

  return (
    <div>
      <div className="  max-w-7xl mx-auto relative z-0 flex flex-col gap-16">
        <div className="sm:px-16 px-10  max-w-7xl mx-auto relative z-0 flex flex-col gap-[24px]">
          <Title
            text="Unser Workflow – Schritt für Schritt zu deinem Erfolg"
            additionalClasses="text-center"
            additionalTitle="workshops"
          />
        </div>
        <RoadmapPath />
      </div>
      <div className="sm:px-16 px-10 sm:py-20 py-10 max-w-7xl mx-auto relative z-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-80 sm:max-w-max">
          {plans.map((plan, index) => (
            <div key={index} className="w-full h-full">
              <NumberBox
                number={plan.id}
                title={plan.title}
                description={plan.description}
                color={plan.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapContainer;

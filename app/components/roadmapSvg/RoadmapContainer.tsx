"use client";
import React from "react";
import RoadmapPath from "./RoadmapSvg";

import NumberBox from "../NumberBox";

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
    <div className="py-52" >
      <div className="w-full max-w-7xl mx-auto ">
        <div className="">
          <p className="font-cabin text-2xl sm:text-4xl text-center font-semibold max-w-[950px] mx-auto mb-16">
            Unser Workflow – Schritt für Schritt zu deinem Erfolg
          </p>
        </div>
        <RoadmapPath />
      </div>
      <div className="sm:px-16 px-10 sm:py-12 py-10 max-w-7xl mx-auto relative z-0">
        <div className="flex gap-8 w-full justify-evenly">
          {plans.map((plan, index) => {
            return (
              <div key={index} className="max-w-60 min-w-60">
                <NumberBox
                  number={plan.id}
                  title={plan.title}
                  description={plan.description}
                  color={plan.color}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RoadmapContainer;
// export default Wrapper(RoadmapContainer, 'RoadmapContainer')

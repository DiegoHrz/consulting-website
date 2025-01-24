"use client";
import React, { useEffect, useState } from "react";

import { ImLocation } from "react-icons/im";


const CurvedRoadmap = () => {
  const steps = [
    {
      title: "1. Erstgespräch",
      description: "Define project scope and requirements",
      position: "bottom",
    },
    {
      title: "2. Organisatorisches – Kickoff",
      description: "Create wireframes and visual designs",
      position: "top",
    },
    {
      title: "Projektstart",
      description: "Build and implement features",
      position: "bottom",
    },
    {
      title: "4. Nachbetreuung",
      description: "Deploy and monitor performance",
      position: "top",
    },
  ];

  const [animationOn, setAnimationOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationOn(true);
    }, 5000);
  }, []);

  const getLeftPosition = (index: number) => {
    const positions = ["20%", "40%", "60%", "80%"];
    return positions[index];
  };

  return (
    <div className="hidden sm:block w-full max-w-6xl mx-auto p-8">
      <div className="relative min-h-[400px]">
        {/* SVG curved path */}
        <svg
          className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C150,-10 250,90 400,40 C550,-10 650,90 800,40 C950,-10 1050,90 1200,40"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
            className="path-background"
          />
          <path
            d="M0,40 C150,-10 250,90 400,40 C550,-10 650,90 800,40 C950,-10 1050,90 1200,40"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="4"
            strokeDasharray="1200"
            strokeDashoffset="1200"
            className={`${animationOn && "animate-draw"} `}
          />
        </svg>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute w-48 -translate-x-1/2 ${
              step.position === "top" ? "top-8" : "bottom-8"
            }`}
            style={{ left: getLeftPosition(index) }}
          >
            {/* Content for top position */}
            {step.position === "top" && (
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )}

            {/* Circle indicator */}
            <div
              className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mx-auto"
              style={{
                background: "linear-gradient(to right, green 30%,# 100%)",
              }}
            >
              {/* <CheckCircle className="w-6 h-6 text-white" /> */}
              <ImLocation size={34} />
            </div>

            {/* Content for bottom position */}
            {step.position === "bottom" && (
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: draw 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CurvedRoadmap;

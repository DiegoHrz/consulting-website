"use client";

import React, { useState } from "react";
import Subtitle from "./customTags/Subtitle";



export const ContactBanner: React.FC = () => {
  const [hoverIn, setHoverIn] = useState(false);
  return (
    <div className="mx-auto bg-[#115369] w-full   flex flex-col items-center rounded-xl h-[22rem] justify-center gap-5 relative overflow-hidden p-14 ">
      <Subtitle
        text="Ready to Start your business of the best way?"
        color="white"
        position="left"
        size="4xl"
      />
      <p className="text-anna-white/70 mb-2 font-thin">
        Unser Workflow – Schritt für Schritt zu deinem Erfolg
      </p>
      <div className="flex gap-4">
        <button className="rounded-3xl bg-[#4cb4d7]  text-gray-800 font-medium font-cabin px-5 py-2">
          Make an appointment
        </button>
        <button
          className="relative rounded-3xl   text-anna-white font-medium font-cabin px-5 py-2  overflow-hidden"
          onMouseEnter={() => setHoverIn(true)}
          onMouseLeave={() => setHoverIn(false)}
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
          }}
        >
          <p className="text-anna-white">Contact us</p>
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
              hoverIn ? "-bottom-3" : "-bottom-8"
            }    h-11 w-11 aspect-square `}
            style={{
              backgroundColor: "rgb(234, 168, 121)",
              filter: "blur(10px)",
              borderRadius: "100px",
              opacity: 0.3,
            }}
          ></div>
        </button>
      </div>
      {/* <div className="absolute right-0 bottom-[0%] " >
            <img src="/profile/colleagues.png" alt="" className="bg-cover "/>
          </div> */}
    </div>
  );
};

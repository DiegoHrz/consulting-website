"use client";
import React, { useState } from "react";
import Subtitle from "./customTags/Subtitle";
import Link from "next/link";

interface AppointmentBannerProps {
  gradientColor?: string;
  gradientColor2?: string;
  buttonColor?: string;
}

const AppointmentBanner: React.FC<AppointmentBannerProps> = ({
  gradientColor = "from-[#115369]",
  gradientColor2 = "to-gray-800",
  buttonColor = "bg-anna-maroon",
}) => {
  const [hoverIn, setHoverIn] = useState(false);
  return (
    <div className="mx-auto  w-full rounded-xl h-[26rem] md:h-[22rem] relative overflow-hidden max-w-7xl shadow-gray-400 shadow-[-3px_0px_15px_2px_rgba(0,0,0,0.2)] ">
      <div
        className={` bg-gradient-to-r ${gradientColor} ${gradientColor2}  flex flex-col items-center gap-8 p-6  h-full justify-center text-center text-white`}
      >
        <Subtitle
          text="Bereit loszulegen?"
          color="white"
          position="center"
          size="4xl"
          mobileSize="text-3xl"
        />
        <p className="text-anna-white/70 mb-2 font-thin text-sm sm:text-base">
          Unser Team führt dich zum Erfolg
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
          <Link href="/kontakt" >
            <button
              className={`rounded-3xl ${buttonColor}  text-anna-white font-medium font-cabin px-4 py-2 sm:px-5 text-sm sm:text-base hover:bg-red-700 duration-700 border-anna-white`}
            >
              Vereinbare einen Termin
            </button>
          </Link>
          <Link href="/kontakt" >
            <button
              className="relative rounded-3xl text-anna-white font-medium font-cabin px-4 py-2 sm:px-5 overflow-hidden text-sm sm:text-base w-fit mx-auto"
              onMouseEnter={() => setHoverIn(true)}
              onMouseLeave={() => setHoverIn(false)}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
              }}
            >
              <p className="text-anna-white">Kontakt</p>
              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  hoverIn ? "-bottom-3" : "-bottom-8"
                } h-8 sm:h-11 w-8 sm:w-11 aspect-square`}
                style={{
                  backgroundColor: "rgb(234, 168, 121)",
                  filter: "blur(10px)",
                  borderRadius: "100px",
                  opacity: 0.3,
                }}
              ></div>
            </button>
          </Link>
        </div>
        {/* <div className="absolute right-0 bottom-[0%] " >
      <img src="/profile/colleagues.png" alt="" className="bg-cover "/>
    </div> */}
      </div>
    </div>
  );
};

export default AppointmentBanner;

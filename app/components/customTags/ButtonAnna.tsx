"use client";
import Link from "next/link";
import React, { useState } from "react";

interface ButtonAnnaProps {
  text: string;
  color?: string;
  colorText?: string;
}

const ButtonAnna: React.FC<ButtonAnnaProps> = ({
  text,
  color = "bg-anna-blue",
  colorText = "text-anna-white",
}) => {
  const [hoverIn, setHoverIn] = useState(false);

  return (
    <div className="w-fit relative">
      {/* <div className="absolute inset-0 -z-10 backdrop-blur-md rounded-3xl animate-fade-subtitle"></div> */}
      <div
        className={`w-fit animate-fade-subtitle ${color} overflow-hidden rounded-3xl relative z-10`}
        onMouseEnter={() => setHoverIn(true)}
        onMouseLeave={() => setHoverIn(false)}
      >
        <Link href="/kontakt" className="block">
          <button
            className="relative rounded-3xl font-medium font-cabin px-[21px] py-[11px] w-full transition-all duration-700 "
            style={
              hoverIn
                ? {
                    background: "rgba(255, 255, 255, 0.02)",
                    boxShadow:
                      "rgba(18, 83, 105, 0.05) 0px 1px 10px 0px inset",
                  }
                : {
                    background: "rgba(255, 255, 255, 0.02)",
                    boxShadow:
                      "rgba(255, 255, 255, 0.5) 0px 1px 10px 0px inset",
                  }
            }
          >
            {/* Capa del efecto blur */}
            {/* <div
            className={`absolute inset-0 transition-all duration-700 ${
              hoverIn ? 'opacity-100' : 'opacity-100'
            }`}
          ></div> */}

            <div
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 -z-10
              ${
                hoverIn ? "-bottom-1 h-14 w-32" : "-bottom-10 h-14 w-14"
              }  aspect-square`}
              style={{
                backgroundColor: "#00FFFF",
                filter: "blur(10px)",
                borderRadius: "100px",
                opacity: 0.3,
              }}
            ></div>

            {/* Texto */}
            <span
              className={`${colorText} relative text-white mix-blend-normal  transition-all duration-700 ${
                hoverIn && "text-white"
              }`}
              // style={{
              //   background: "linear-gradient(to right, #125369, #3CA3B5)",
              //   backgroundClip: "text",
              // }}
            >
              {text}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonAnna;

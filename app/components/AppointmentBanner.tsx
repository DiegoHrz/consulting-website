"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Subtitle from "./customTags/Subtitle";
import Link from "next/link";
import { useLanguageStore } from "../store/useLanguageStore";

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
  const { lang } = useLanguageStore();
  const [hoverIn, setHoverIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    // Detectar en el montaje del componente
    if (typeof window !== "undefined") {
      handleResize(); // Detectar al cargar
    }

    window.addEventListener("resize", handleResize); // Detectar cambios
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return null; // No renderizar nada mientras no esté determinado el tamaño de la pantalla
  }

  return (
    <motion.div
      className="mx-auto  w-full rounded-xl h-[26rem] md:h-[22rem] relative overflow-hidden max-w-7xl shadow-gray-400 
      
    "
      // shadow-[-3px_0px_15px_2px_rgba(0,0,0,0.2)]
      initial={{}}
      whileInView={{ shadow: "shadow-[-3px_0px_15px_2px_rgba(0,0,0,0.2)]" }}
      transition={{
        duration: 0.7,
        delay: 0,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="h-[26rem] md:h-[22rem]"
        initial={{ scaleY: 0, y: 0 }}
        whileInView={{ scaleY: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div
          className={` bg-gradient-to-r ${gradientColor} ${gradientColor2}  flex flex-col items-center gap-8 p-6  h-full justify-center text-center text-white`}
        >
          <motion.div
            className=""
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Subtitle
              text={
                lang === "de" ? "Bereit loszulegen?" : "Ready to get started?"
              }
              color="white"
              position="center"
              size="4xl"
              mobileSize="text-3xl"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-anna-white/70 mb-2 font-thin text-sm sm:text-base">
              {lang === "de"
                ? "Unser Team führt dich zum Erfolg"
                : "Our team will guide you to success."}
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <Link href="/kontakt">
              <motion.div
                className=""
                initial={{ scale: 0.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <button
                  className={`rounded-3xl ${buttonColor}  text-anna-white font-medium font-cabin px-4 py-2 sm:px-5 text-sm sm:text-base hover:bg-red-700 duration-700 border-anna-white`}
                >
                  {lang === "de"
                    ? "Vereinbare einen Termin"
                    : "Schedule an appointment"}
                </button>
              </motion.div>
            </Link>
            <Link href="/kontakt">
              <motion.div
                className=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: "circInOut",
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <button
                  className="relative rounded-3xl text-anna-white font-medium font-cabin px-4 py-2 sm:px-5 overflow-hidden text-sm sm:text-base w-fit mx-auto"
                  onMouseEnter={() => setHoverIn(true)}
                  onMouseLeave={() => setHoverIn(false)}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    boxShadow:
                      "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
                  }}
                >
                  <p className="text-anna-white">
                    {lang === "de" ? "Kontakt" : "Contact"}
                  </p>
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
              </motion.div>
            </Link>
          </div>
          {/* <div className="absolute right-0 bottom-[0%] " >
      <img src="/profile/colleagues.png" alt="" className="bg-cover "/>
    </div> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppointmentBanner;

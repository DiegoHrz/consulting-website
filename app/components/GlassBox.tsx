"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface GlassBoxProps {
  title: string;
  text: string;
  button: string;
  special?: string;
}

const GlassBox: React.FC<GlassBoxProps> = ({
  title,
  text,
  button,
  special,
}) => {
  const [hoverIn, setHoverIn] = useState(false);
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Outer container for glass effect */}
      <motion.div
        className="absolute inset-0 backdrop-blur-lg rounded-lg bg-[#0F0F10] shadow-[0px_0px_15px] shadow-gray-400 border-2 border-[rgba(255, 255, 255, .1)]"
        initial={{ scale: 0, opacity: 0.1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      />

      {/* Main content container with overflow control */}
      <div className="relative flex flex-col justify-center items-center h-full rounded-lg overflow-hidden">
        {/* Gradient circle */}
        <div
          className="absolute h-24 w-24 -right-3 -top-3"
          style={{
            background: "rgba(81, 47, 235, 0.5)",
            filter: "blur(50px)",
            borderRadius: "231px",
            opacity: 1,
            zIndex: 1,
          }}
        />

        {/* Badges */}
        {special === "bestSeller" && (
          <motion.div
            className="absolute left-[82%] -top-0 z-40"
            initial={{ scale: 0, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <img
              src="/icons/best-seller.png"
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14"
            />
          </motion.div>
        )}

        {special === "exclusive" && (
          <motion.div
            className="absolute -top-0 left-[82%] z-40"
            initial={{ scale: 0, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <img
              src="/icons/exclusive.png"
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14"
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="z-20 flex flex-col gap-4 p-10 sm:p-9">
          <div className="text-lg lg:text-2xl font-medium z-10 font-cabin_sans text-white">
            {title}
          </div>
          <p className="text-xs lg:text-sm z-10 font-cabin_sans font-extralight text-anna-brown">
            {text}
          </p>
          <Link
            href="/"
            className="z-10 w-fit mx-auto relative overflow-hidden rounded-3xl font-cabin px-5 py-2"
            onMouseEnter={() => setHoverIn(true)}
            onMouseLeave={() => setHoverIn(false)}
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
            }}
          >
            <p className="text-anna-white">{button}</p>
            <div
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 ${
                hoverIn ? "-bottom-1" : "-bottom-8"
              }    h-11 w-11 aspect-square `}
              style={{
                backgroundColor: "rgb(234, 168, 121)",
                filter: "blur(10px)",
                borderRadius: "100px",
                opacity: 0.3,
              }}
            ></div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GlassBox;

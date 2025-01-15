"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
  return (
    <motion.div
      className=" flex flex-col justify-center items-center h-full  rounded-lg relative inset-0  "
      initial={{ scale: 0, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className={`inset-0  absolute flex justify-center items-center backdrop-blur-lg rounded-lg  bg-white/10  shadow-gray-400

        shadow-[0px_0px_15px]`}
        style={
          {
            // this gives the transparent and the backdrop the blur
            // backgroundColor: "rgba(142,190,206,0.5)",
          }
          // ${
          //   special === "bestSeller"
          //     ? "shadow-[#E44846]"
          //     : special === "exclusive"
          //     ? "shadow-[#BF9932]"
          //     : "shadow-gray-400"
          // }  
        }
        initial={{ scale: 0, opacity: 0.1 }} // Estado inicial
        whileInView={{ scale: 1, opacity: 1 }} // Animación mientras está en el viewport
        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      ></motion.div>
      {special === "bestSeller" && (
        <motion.div
          className="absolute left-[82%] -top-0 z-40"
          initial={{ scale: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <img src="/icons/best-seller.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14" />
        </motion.div>
      )}
      {special === "exclusive" && (
        <motion.div
          className="absolute  -top-0 left-[82%] z-40"
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
      <div className="z-20 flex flex-col gap-4 p-10 sm:p-0">
        <div className=" text-lg lg:text-2xl font-medium  z-10  font-cabin_sans ">
          {/* <BouncingText>40+</BouncingText> */}
          {title}
        </div>
        <p className=" text-xs lg:text-sm z-10 font-cabin_sans font-extralight text-anna-brown">
          {/* Completed Projects */}
          {text}
        </p>
        <Link href="/" className="z-10 w-fit mx-auto">
          <p className="text-white text-sm bg-[#3767A6] w-fit py-1 px-2 rounded-sm text-center mx-auto">
            {" "}
            {button}
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default GlassBox;

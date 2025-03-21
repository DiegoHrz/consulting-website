"use client";
import { motion } from "framer-motion";
import ButtonAnnaBurgundy from "@/app/components/customTags/ButtonAnnaMaroon";
import ButtonAnnaTransparent from "@/app/components/customTags/ButtonTransparent";
import Title from "@/app/components/customTags/Title";

import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { fadeIn, zoomIn } from "@/app/utils/motion";

const Hero = () => {
  return (
    <div>
      <div className="z-10 max-w-7xl mx-auto sm:mt-40 flex flex-col lg:flex-row gap-16 h-full ">
        <div className="flex flex-col w-1/2 gap-[24px] ">
          <div className="max-w-[28rem]">
            <Title
              text="Empower Your Financial Journey with AS"
              textPosition="left"
              additionalClass="text-white font-normal"
              noLengthMax={true}
            />
          </div>
          <div>
            <p className="text-left max-w-[400px]  text-lg text-anna-white-dark">
              Modern technology, trusted expertise and{" "}
              <b className="text-anna-white">limitless potential</b>
            </p>
          </div>
          {/* <div>
              <div className="flex gap-3">
                <ButtonAnna text="Play" />
                <ButtonAnnaTransparent text="My list" />
              </div>
            </div> */}
          <div className="flex  gap-[16px]">
            {/* <p className="font-semibold text-black">Our Trusted Partners:</p>
              <ul className="flex gap-4 bg-[#72A98F]">
                <li>Visa</li>
                <li>Stripe</li>
                <li>OV</li>
                <li>Paypal</li>
              </ul> */}
            <ButtonAnnaBurgundy text="Get started today" />
            <ButtonAnnaTransparent text="Kontakt" />
          </div>
          <div className="sm:mt-10">
            <div className=" flex gap-4  w-fit p-8 rounded-lg backdrop-blur-3xl">
              <div>
                <p className="font-vollkornSC text-anna-black">memory</p>
                <p className="font-semibold text-xl text-anna-black ">
                  2GB RAM
                </p>
              </div>
              <div className="w-[0.05rem] h-auto bg-anna-gray"></div>
              <div className="">
                <p className="font-vollkornSC text-anna-black">screen</p>
                <p className="font-semibold text-xl text-anna-black ">HD 4K</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-[-10px] items-center mt-6">
              <div className="w-10 h-10 rounded-full border-2 border-anna-blue">
                <img
                  src="/people/girl1.svg"
                  alt=""
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-anna-blue -ml-3 overflow-hidden">
                <img
                  src="/people/sam.png"
                  alt=""
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-anna-blue -ml-3">
                <img
                  src="/people/guy1.svg"
                  alt=""
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="ml-3 flex items-center">
                <span className="font-vollkornSC font-bold text-anna-blue text-[1.5rem]">
                  60
                </span>
                <span className="text-sm font-bold text-anna-blue mr-1">+</span>
                <span className="font-vollkornSC text-anna-blue font-semibold">
                  satisfied clients
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-3 relative ">
          <div className="relative w-fit">
            <IoShieldCheckmark
              size={50}
              color="#5B1C31"
              className=" rounded-full"
            />
            <div className="absolute top-1/2 -z-10 bg-white w-6 h-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className=" relative">
            <p className="text-anna-white-dark  text-sm max-w-40">
              Smart, Secure and Seamless Solutions for Transactions
            </p>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[3]">
              <motion.div
                variants={zoomIn(0.2, 1.25)}
                initial="hidden" // Estado inicial
                animate="show"
                className=" z-[3] w-[27.2rem] "
              >
                {/* w-30rem h-96 */}
                <img
                  src="/leistungen/6.png"
                  alt=""
                  className="w-full h-[21.8rem] rounded-2xl "
                  style={{
                    transform: "skew(-30deg) rotate(25deg)",
                  }}
                />
              </motion.div>
            </div>
            <div className=" absolute top-20 left-1/2 -translate-x-1/2 z-[2]">
              <motion.div
                className="z-[2] w-[27.2rem]"
                variants={fadeIn("up", "tween", 1, 1.25)}
                initial="hidden" // Estado inicial
                animate="show"
              >
                <img
                  src="/leistungen/12.png"
                  alt=""
                  className="w-full h-[21.8rem] rounded-2xl"
                  style={{
                    transform: "skew(-30deg) rotate(25deg)",
                  }}
                />
              </motion.div>
            </div>
            <div
              className="absolute top-36 left-1/2 -translate-x-1/2 z-[1] w-[27.2rem]
              "
            >
              <motion.div
                className="z-[1] w-[27.2rem]"
                variants={fadeIn("up", "tween", 1.75, 1.25)}
                initial="hidden" // Estado inicial
                animate="show"
              >
                <img
                  src="/leistungen/11.png"
                  alt=""
                  className="w-full h-[21.8rem] rounded-2xl"
                  style={{
                    transform: "skew(-30deg) rotate(25deg)",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";
import ButtonAnnaBurgundy from "@/app/components/customTags/ButtonAnnaMaroon";
import ButtonAnnaTransparent from "@/app/components/customTags/ButtonTransparent";
import Title from "@/app/components/customTags/Title";
import GradientBackground from "@/app/components/gradient/GradientBackground";

import React from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { fadeIn, zoomIn } from "@/app/utils/motion";

const ServicesPage = () => {
  return (
    <div>
      {/* <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="/pages-imgs/leistungen.avif"
          header="services"
          title="leistungen"
          text="Wir sind eine Beratungsfirma, die Unternehmen mit
      maßgeschneiderten Lösungen unterstützt. Unser Ziel ist es,
      gemeinsam Ihre Vision erfolgreich umzusetzen."
        />
      </div> */}

      <div className="relative h-screen w-full overflow-hidden">
        <GradientBackground />
        <div className="z-10 max-w-7xl mx-auto sm:mt-40 flex  gap-16 h-full">
          <div className="flex flex-col w-1/2 gap-[24px] ">
            <div className="max-w-[26rem]">
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
              <ButtonAnnaTransparent text="get start" />
            </div>
            {/* <button className="rounded-3xl bg-anna-burgundy  text-anna-white font-medium font-cabin px-5 py-2 w-fit">
              Get started today
            </button> */}
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
                  variants={zoomIn(0.2, 1)}
                  initial="hidden" // Estado inicial
                  animate="show"
                  className=" z-[3] w-[27.2rem] "
                >
                  {/* w-30rem h-96 */}
                  <img
                    src="/leistungen/10.png"
                    alt=""
                    className="w-full h-[21.8rem] "
                    style={{
                      transform: "skew(-30deg) rotate(25deg)",
                    }}
                  />
                </motion.div>
              </div>
              <div className=" absolute top-20 left-1/2 -translate-x-1/2 z-[2]">
                <motion.div
                  className="z-[2] w-[27.2rem]"
                  variants={fadeIn("up", "tween", 1, 1)}
                  initial="hidden" // Estado inicial
                  animate="show"
                >
                  <img
                    src="/leistungen/12.png"
                    alt=""
                    className="w-full h-[21.8rem] "
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
                  variants={fadeIn("up", "tween", 2, 1)}
                  initial="hidden" // Estado inicial
                  animate="show"
                >
                  <img
                    src="/leistungen/11.png"
                    alt=""
                    className="w-full h-[21.8rem] "
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
    </div>
  );
};

export default ServicesPage;

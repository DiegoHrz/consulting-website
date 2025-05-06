"use client";
import { motion } from "framer-motion";
import * as React from "react";
import BouncingText from "./BouncingText";
import ButtonAnna from "@/app/components/customTags/ButtonAnna";
import { useLanguageStore } from "@/app/store/useLanguageStore";

export const Table: React.FC = () => {

  const {lang} =useLanguageStore()

  const tableText ={
    de:{
      title:"Unsere Erfahrung und erfolgreich betreuten Projekte sprechen für sich.",
      first_grid_text:"zufriedene Kunden",
      second_grid_headline:"Fertigstellung nach",
      second_grid_text:"wenigen Wochen",
      third_grid_text:"erfolgreich beim Gründungszuschuss",
      fourth_grid_headline:"Betreuung bei Finanzierungsmöglichkeiten in ",
      fourth_grid_text:"ganz Deutschland",
      title_text:"Dein Business. Deine Vision. Unsere Unterstützung.",
      text:"Du willst dich selbstständig machen oder dein bestehendes Business aufs nächste Level bringen? Bei AS Vision Partners bekommst du die Unterstützung, die du wirklich brauchst – individuell, praxisnah und auf Augenhöhe. Wir helfen dir, deine Ideen zu strukturieren, deine Marke klar zu positionieren und den Grundstein für nachhaltigen Erfolg zu legen – egal ob du ganz am Anfang stehst oder schon mittendrin bist.",
      button:"Kontakt",
    },
    en:{
      title:"Our experience and successfully managed projects speak for themselves.",
      first_grid_text:"satisfied customers",
      second_grid_headline:"Completion after",
      second_grid_text:"a few weeks",
      third_grid_text:"successful with start-up grant",
      fourth_grid_headline:"Support with financing options in ",
      fourth_grid_text:"all of Germany",
      title_text:"Your business. Your vision. Our support.",
      text:"Do you want to start your own business or take your existing business to the next level? At AS Vision Partners, you get the support you really need – personalized, practical, and at eye level. We help you structure your ideas, clearly position your brand, and lay the foundation for sustainable success – whether you're just starting out or in the middle of it.",
      button:"Contact",
    }
  }

  const t = tableText[lang]

  return (
    <div className="">
      <div className="max-w-[50rem]">
        <h1
          className="text-xl sm:text-2xl lg:text-[40px] lg:leading-[2.7rem] text-transparent "
          style={{
            background: "linear-gradient(to right,#125369,#3CA3B5)",
            backgroundClip: "text",
          }}
        >
          {t.title}
        </h1>
      </div>
      <div className="mt-10 md:flex flex-col md:flex-row gap-5 lg:gap-8 w-full   max-h-[45rem]  md:h-96 ">
        <div
          className=" h-1/2  md:h-full w-full md:w-1/2 sm:py-2 md:py-0     grid text-center items-center relative gap-3 sm:gap-4  lg:mx-5 min-h-[238px] md:min-h-max "
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr ",
          }}
        >
          <div
            className=" border flex flex-col justify-center items-center h-full   border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_2px_4px_0px]"
            style={{ gridColumn: "1/2" }}
          >
            <h3 className="text-3xl lg:text-5xl font-medium text-anna-black">
              <BouncingText>100+</BouncingText>
            </h3>
            <p className="text-[#A5A5A5] text-xs lg:text-base ">
              {/* Completed Projects */}
              {t.first_grid_text}
            </p>
          </div>
          <div
            className=" border flex flex-col justify-center items-center h-full text-xl lg:text-3xl border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_2px_4px_0px]"
            style={{ gridColumn: "2/3" }}
          >
            <BouncingText>
              <h3 className="text-anna-black text-xs lg:text-base">{t.second_grid_headline}</h3>
              <h3 className="text-anna-black ">
                 {t.second_grid_text}
              </h3>
            </BouncingText>
          </div>

          <div
            className=" border flex flex-col  justify-center items-center h-full border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_2px_4px_0px]"
            style={{ gridColumn: "1/2" }}
          >
            <div>
              <BouncingText>
                <span className="text-3xl lg:text-5xl font-medium mr-1">
                  100
                </span>
                <span>%</span>
              </BouncingText>
            </div>
            <p className="text-[#A5A5A5] text-xs lg:text-base ">
              {t.third_grid_text}
            </p>
          </div>
          <div
            className="border flex flex-col justify-center items-center h-full border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_2px_4px_0px]"
            style={{ gridColumn: "2/3" }}
          >
            <BouncingText>
              <h3 className="text-anna-black text-[0.68rem] lg:text-base" >{t.fourth_grid_headline} </h3>
              <h3 className="text-anna-black text-xl lg:text-2xl" >
                {t.fourth_grid_text}
              </h3>
            </BouncingText>
          </div>

          <motion.div
            className=" bg-anna-blue rounded-full absolute top-1/2 left-1/2 -z-10"
            initial={{ scale: 0, opacity: 0.1 }} // Estado inicial
            whileInView={{ scale: 1, opacity: 0.9 }} // Animación mientras está en el viewport
            transition={{ duration: 1.7, delay: 0.5, ease: "easeOut" }}
            style={{ boxShadow: "0px 0px 100px 120px rgba(18, 83, 105, 1)" }}
            viewport={{ once: false, amount: 0.5 }} // Repite la animación cada vez que el componente vuelva a estar en el viewport
          ></motion.div>
        </div>

        <div className=" border flex flex-col justify-center   md:h-full w-full md:w-1/2 p-5  lg:p-10 mt-6 md:mt-0 border-[#D5E0E2] rounded-xl bg-white md:shadow-[#125369] md:shadow-[0px_3px_10px_0px]">
          <h2 className="text-xl lg:text-[1.85rem] font-cabin">
            <BouncingText>{t.title_text}</BouncingText>
          </h2>
          <p className="mt-5 mb-3 text-[#A5A5A5] md:text-sm lg:text-base">
            {t.text}
          </p>
          {/* <p className="mb-3 text-anna-blue md:text-sm lg:text-base ">
            ¿Listo para un aliado inquebrantable?
          </p>
          <p className="mb-3 text-anna-blue md:text-sm lg:text-base ">
            Hablemos y hagámoslo realidad.
          </p> */}
          <ButtonAnna text={t.button} />
        </div>
      </div>
    </div>
  );
};

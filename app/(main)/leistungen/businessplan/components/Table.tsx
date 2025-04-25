"use client";
import { motion } from "framer-motion";
import * as React from "react";
import BouncingText from "./BouncingText";
import ButtonAnna from "@/app/components/customTags/ButtonAnna";

export const Table: React.FC = () => {
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
          Unsere Erfahrung und erfolgreich betreuten Projekte sprechen für sich.
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
              zufriedene Kunden
            </p>
          </div>
          <div
            className=" border flex flex-col justify-center items-center h-full text-xl lg:text-3xl border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_2px_4px_0px]"
            style={{ gridColumn: "2/3" }}
          >
            <BouncingText>
              <h3 className="text-anna-black">Fertigstellung </h3>
              <h3 className="text-anna-black text-xs lg:text-base">
                nach wenigen Wochen
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
              erfolgreich beim Gründungszuschuss
            </p>
          </div>
          <div
            className="border flex flex-col justify-center items-center h-full border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_2px_4px_0px]"
            style={{ gridColumn: "2/3" }}
          >
                        <BouncingText>
              <h3 className="text-anna-black">Betreuung bei </h3>
              <h3 className="text-anna-black text-xs lg:text-base">
              Finanzierungsmöglichkeiten
              in ganz Deutschland
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
            <BouncingText>Jetzt Unternehmer werden</BouncingText>
          </h2>
          <p className="mt-5 mb-3 text-[#A5A5A5] md:text-sm lg:text-base">
            Möchten Sie ein Unternehmen aufbauen, führen oder erweitern, das
            erfolgreich ist? Träumen Sie davon, eine unverwechselbare Marke zu
            schaffen, die Ihre Vision widerspiegelt und Ihre Zielgruppe
            inspiriert? Die Experten von AS Vision Partners unterstützen Sie
            dabei, Ihr Einkommen, Ihre Reichweite und die Stärke Ihrer Marke zu
            maximieren. Sind Sie bereit, mit uns durchzustarten?
          </p>
          {/* <p className="mb-3 text-anna-blue md:text-sm lg:text-base ">
            ¿Listo para un aliado inquebrantable?
          </p>
          <p className="mb-3 text-anna-blue md:text-sm lg:text-base ">
            Hablemos y hagámoslo realidad.
          </p> */}
          <ButtonAnna text="Kontak" />
        </div>
      </div>
    </div>
  );
};
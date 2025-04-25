"use client";

import Link from "next/link";
import GlassBox from "./GlassBox";
import ParallaxBanner from "./Parallax/ParallaxBanner";
import Title from "./customTags/Title";

const Services: React.FC = ({}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, red 1%,red 10%,#F5F6F9 5%,#F5F6F9 100%)",
      }}
    >
      <div
        className="  h-full bg-[#F5F6F9] "
        style={{
          background:
            "linear-gradient(to bottom, white 1%,#F5F6F9 5%,#F5F6F9 100%)",
        }}
      >
        <div className="  max-w-[1200px] mx-auto relative z-0 flex flex-col gap-16">
          <div className="   relative z-0 flex flex-col gap-[24px]">
            <Title
              text="Unsere Angebote – Deine Möglichkeiten"
              additionalClasses="text-center"
              additionalTitle="bis zu 100% kostenfrei für dich"
            />
            <p className=" text-anna-gray max-w-[523px] mx-auto text-center">
              Stelle dir dein individuelles Leistungspaket zusammen – ganz nach
              deinem Bedarf.
            </p>
          </div>
          {/* <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Stack
        </p>
        <h2 className="  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tecnologías
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-black"
        >
          <p className="text-black">
            Desde mis inicios en el 2023 en la industría de la tecnología he
            perfeccionado mis habilidades en
          </p>
          <span className=" text-black">
            {" "}
            JavaScript, Node, React, Typescript, Express JS, PostgreSql{" "}
          </span>
          <span className="text-black">
            , entre otros. Soy un apasionado en{" "}
          </span>
          <span className="font-semibold text-black">modelos en 3D</span>
          <span className="text-black">
            en programación y en el desarrollo de App móviles con React Native.
          </span>
        </motion.div>
      </div> */}
          <div className=" md:h-full flex justify-center px-10 md:px-0 ">
            <div className="h-1/2 md:h-full w-full  pb-20 md:pb-36 lg:pb-44  text-center gap-10 sm:gap-8 min-h-[238px] md:min-h-max grid grid-cols-6 ">
              {/* <div className="w-40 h-40 bg-red-700 z-0 absolute -left-10" ></div> */}
              {/* <motion.div
              className="absolute left-[60%] -top-0 z-40"
              initial={{ scale: 0, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <img src="/icons/best-seller.png" alt="" className="w-14 h-14" />
            </motion.div>
            <motion.div
              className="absolute  -top-0 left-64 z-40"
              initial={{ scale: 0, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <img src="/icons/exclusive.png" alt="" className="w-14 h-14" />
            </motion.div> */}
              <div className=" col-span-6 md:col-span-3 lg:col-span-2">
                <Link href="/leistungen/grundungszuschuss">
                  <GlassBox
                    title="Gründungszuschuss"
                    text="Wir unterstützen dich bei der Beantragung deines Gründungszuschusses – Schritt für Schritt bis zur Förderung."
                    button="See more"
                  />
                </Link>
              </div>

              <div className=" col-span-6 md:col-span-3 lg:col-span-2">
                <Link href="/leistungen/businessplan">
                  <GlassBox
                    title="Businessplan"
                    text="Individuell und professionell – wir erstellen gemeinsam deinen Businessplan für Förderungen, Banken und Investoren."
                    button="See more"
                    special="bestSeller"
                  />
                </Link>
              </div>

              {/* <GlassBox
              title="Business Consulting"
              text="Your financial kick start in independence"
              button="See more"
            /> */}
              <div className=" col-span-6 md:col-span-3 lg:col-span-2 cursor-pointer">
                <Link href="/leistungen/finanzierung">
                  <GlassBox
                    title="Finanzierung"
                    text="Ob Gründungsdarlehen, Bankkredite oder alternative Finanzierungen – wir finden die passende Lösung für dein Vorhaben."
                    button="See more"
                  />
                </Link>
              </div>

              <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-2">
                <Link href="/leistungen/buchhaltung">
                  <GlassBox
                    title="Buchhaltung"
                    text="Einfach, verständlich und effizient – wir zeigen dir, wie du deine Buchhaltung sicher im Griff hast."
                    button="See more"
                    special="exclusive"
                  />
                </Link>
              </div>
              <div className=" col-span-6 md:col-span-4 md:col-start-2 lg:col-span-2 lg:col-start-4">
              <Link href='/leistungen/websites-marketing'>
                <GlassBox
                  title="Websites und Marketing"
                  text="Online sichtbar werden – mit einer klaren Website und gezielten Marketingstrategien für deinen Erfolg."
                  button="See more"
                  />
                  </Link>
              </div>

              {/* <motion.div
            className=" bg-[#2B1413] rounded-full absolute top-1/2 left-44 -z-10 w-96 -translate-x-1/2"
            initial={{ scale: 0, opacity: 0.5 }} // Estado inicial
            whileInView={{ scale: 1, opacity: 0.6, borderRadius: "100%" }} // Animación mientras está en el viewport
            transition={{ duration: 1.7, delay: 0.5, ease: "easeOut" }}
            style={{ boxShadow: "0px 0px 90px 210px rgba(139, 0, 0, 1)" }}
            viewport={{ once: false, amount: 0.5 }} // Repite la animación cada vez que el componente vuelva a estar en el viewport
          ></motion.div> */}
            </div>

            {/* <div className="bg-[#111111] border-[#3A3A3A] border flex flex-col justify-center   md:h-full w-full md:w-1/3 p-5  lg:p-10 rounded-xl mt-6 md:mt-0">
          <h2 className="text-xl lg:text-[1.85rem]">
            <BouncingText>Tu aliado en el código. Todo o nada</BouncingText>
          </h2>
          <p className="mt-5 mb-3 text-[#A5A5A5] md:text-sm lg:text-base ">
            Desarrollo soluciones y las vivo hasta el último detalle. Mi
            compromiso va más allá del horario: haré lo necesario y más para
            cumplir las metas. Con experiencia en JavaScript, React, Node.js y
            otras tecnologías modernas, trabajaré sin descanso para que tus
            proyectos brillen.
          </p>
          <p className="mb-3 text-[#d5d4d4] md:text-sm lg:text-base ">
            ¿Listo para un aliado inquebrantable?
          </p>
          <p className="mb-3 text-[#e4e4e4] md:text-sm lg:text-base ">
            Hablemos y hagámoslo realidad.
          </p>
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
            className="text-blue-300 hover:border-b border-blue-300 w-fit hover:cursor-pointer"
          >
            Get in touch
          </a>
        </div> */}
          </div>
        </div>
      </div>
      <div
        className="text-[#d0e8f3]"
        style={{
          background:
            "linear-gradient(to bottom, #F5F6F9 1%, #EBF6FB 20% ,#d0e8f3 49%,white 50%,white 100%)",
        }}
      >
        <ParallaxBanner />
      </div>
    </div>
  );
};

export default Services;

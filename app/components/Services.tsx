"use client";
import { motion } from "framer-motion";
import BouncingText from "./BouncingText";
import { fadeIn } from "../utils/motion";
import Wrapper from "../hoc/Wrapper";
import Link from "next/link";

const Services: React.FC = ({}) => {
  return (
    <div
      className="bg-[#8B97A5] "
      style={{
        background:
          "linear-gradient(to bottom, white 30%,#DFDFDF 100%)",
      }}
    >
      <div>

      
      <motion.div variants={fadeIn("up", "spring", 1 * 0.5, 0.75)}>
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
      </div>

      <div className="mt-10 md:flex flex-col md:flex-row gap-5 lg:gap-2 w-full   max-h-[45rem]  md:h-96 px-2 sm:px-5 md:px-0 justify-center ">
        <div
          className=" h-1/2  md:h-full w-full md:w-2/3 sm:py-2 md:py-0 grid text-center items-center relative gap-3 sm:gap-4  lg:mx-5 min-h-[238px] md:min-h-max"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr ",
          }}
        >
          {/* <div className="w-40 h-40 bg-red-700 z-0 absolute -left-10" ></div> */}
          <motion.div
            className=" flex flex-col justify-center items-center h-full  rounded-lg relative inset-0  shadow-gray-400 shadow-[0px_0px_15px]"
            initial={{ scale: 0, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="inset-0  absolute flex justify-center items-center backdrop-blur-lg rounded-lg  bg-gray-400/10"
              style={
                {
                  // this gives the transparent and the backdrop the blur
                  // backgroundColor: "rgba(142,190,206,0.5)",
                }
              }
              initial={{ scale: 0, opacity: 0.1 }} // Estado inicial
              whileInView={{ scale: 1, opacity: 1 }} // Animación mientras está en el viewport
              transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            ></motion.div>

            {/* <motion.div
            className=" bg-[#2B1413] rounded-full absolute top-1/2 left-44 -z-10 w-96 -translate-x-1/2"
            initial={{ scale: 0, opacity: 0.5 }} // Estado inicial
            whileInView={{ scale: 1, opacity: 0.6, borderRadius: "100%" }} // Animación mientras está en el viewport
            transition={{ duration: 1.7, delay: 0.5, ease: "easeOut" }}
            style={{ boxShadow: "0px 0px 90px 210px rgba(139, 0, 0, 1)" }}
            viewport={{ once: false, amount: 0.5 }} // Repite la animación cada vez que el componente vuelva a estar en el viewport
          ></motion.div> */}
            <div className=" text-3xl lg:text-5xl font-medium  z-10  ">
              {/* <BouncingText>40+</BouncingText> */}
              40
            </div>
            <p className=" text-xs lg:text-base z-10 ">
              {/* Completed Projects */}
              Repositorios Subidos
            </p>
            <Link href="/" className="z-10 bg-[#3767A6] py-1 px-2 rounded-md">
              <p className="text-white">See more</p>
            </Link>
          </motion.div>

          {/* <motion.div
            className=" bg-[#2B1413] rounded-full absolute top-1/2 left-44 -z-10 w-96 -translate-x-1/2"
            initial={{ scale: 0, opacity: 0.5 }} // Estado inicial
            whileInView={{ scale: 1, opacity: 0.6, borderRadius: "100%" }} // Animación mientras está en el viewport
            transition={{ duration: 1.7, delay: 0.5, ease: "easeOut" }}
            style={{ boxShadow: "0px 0px 90px 210px rgba(139, 0, 0, 1)" }}
            viewport={{ once: false, amount: 0.5 }} // Repite la animación cada vez que el componente vuelva a estar en el viewport
          ></motion.div> */}

          <div className="flex flex-col justify-center items-center h-full text-xl lg:text-3xl relative  ">
            <div
              className="inset-0  absolute  flex justify-center items-center z-10 backdrop-blur-sm rounded-lg"
              style={{
                // this gives the transparent and the backdrop the blur
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            ></div>
            <div className=" text-3xl lg:text-3xl font-medium  z-50">
              <BouncingText>
                <h3>React</h3>
                <h3>Progamador</h3>
              </BouncingText>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-full text-xl lg:text-3xl relative  ">
            <div
              className="inset-0  absolute  flex justify-center items-center z-10 backdrop-blur-sm rounded-lg"
              style={{
                // this gives the transparent and the backdrop the blur
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            ></div>
            <div className=" text-3xl lg:text-3xl font-medium  z-50">
              <BouncingText>
                <span className="text-3xl lg:text-5xl font-medium mr-1">4</span>
                <span>ever</span>
              </BouncingText>
            </div>
            <p className=" text-xs lg:text-base z-50">Learning</p>
          </div>

          <div className="flex flex-col justify-center items-center h-full text-xl lg:text-3xl relative  ">
            <div
              className="inset-0  absolute  flex justify-center items-center z-10 backdrop-blur-sm rounded-lg"
              style={{
                // this gives the transparent and the backdrop the blur
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            ></div>
            <div className="text-3xl lg:text-5xl font-medium z-50">
              <BouncingText>10+</BouncingText>
            </div>
            <p className=" text-xs lg:text-base z-50">Tecnologías Aplicadas</p>
          </div>
          <div className="flex flex-col justify-center items-center h-full text-xl lg:text-3xl relative  ">
            <div
              className="inset-0  absolute  flex justify-center items-center z-10 backdrop-blur-sm rounded-lg"
              style={{
                // this gives the transparent and the backdrop the blur
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            ></div>
            <div className=" text-3xl lg:text-5xl font-medium  z-50">
              <BouncingText>10+</BouncingText>
            </div>
            <p className=" text-xs lg:text-base z-50">Tecnologías Aplicadas</p>
          </div>
          <div className="flex flex-col justify-center items-center h-full text-xl lg:text-3xl relative  ">
            <div
              className="inset-0  absolute  flex justify-center items-center z-10 backdrop-blur-sm rounded-lg"
              style={{
                // this gives the transparent and the backdrop the blur
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            ></div>
            <div className="text-3xl lg:text-5xl font-medium z-50">
              <BouncingText>10+</BouncingText>
            </div>
            <p className=" text-xs lg:text-base z-50">Tecnologías Aplicadas</p>
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
  );
};

export default Services;

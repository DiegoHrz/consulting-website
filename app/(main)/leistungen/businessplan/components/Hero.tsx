"use client";
import { motion } from "framer-motion";
import ButtonAnnaBurgundy from "@/app/components/customTags/ButtonAnnaMaroon";
import ButtonAnnaTransparent from "@/app/components/customTags/ButtonTransparent";



import { IoShieldCheckmark } from "react-icons/io5";
import { fadeIn, zoomIn } from "@/app/utils/motion";

const Hero = () => {

  return (
    <div className="">
      <div className="z-10 max-w-7xl mx-auto  flex flex-col md:flex-row gap-1 h-full">
        <div className="flex flex-col md:w-[55%] gap-4 sm:gap-[28px] relative">
          <div className="max-w-[32rem] md:max-w-[28rem]">
            <div className="rounded-3xl w-fit px-2 sm:px-4 sm:py-1 text-white bg-[#273641] mb-2 border border-gray-600">
            <p
              className=" text-transparent"
              style={{
                background: "linear-gradient(to right,#3CA3B5,#fff)",
                backgroundClip: "text",
              }}
            >
              Leistungen - Businessplan

            </p>
            </div>
            {/* 
            <Title
              text="Der perfekte Businessplan für dich mit AVP"
              textPosition="left"
              additionalClass="text-white font-normal"
              noLengthMax={true}
            /> */}
            <h1 className="text-[36px] sm:text-[42px] md:text-[46px] lg:text-[58px] text-anna-white font-semibold sm:font-medium leading-[2.7rem] sm:leading-[3.5rem] md:leading-[4rem] ">
              Der perfekte Businessplan für dich mit AVP
            </h1>
          </div>
          <div className="hidden top-0 right-0 absolute lg:flex flex-col w-full  justify-center items-start gap-1  max-w-40 translate-x-1/2">
            <div className="relative">
              <IoShieldCheckmark
                color="#5B1C31"
                className="rounded-full text-[36px] lg:text-[50px] "
              />
              <div className="absolute top-1/2 -z-10 bg-white w-3 h-3 lg:w-6 lg:h-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <p
              className="text-sm text-transparent"
              style={{
                background: "linear-gradient(to right,#3CA3B5,#fff)",
                backgroundClip: "text",
              }}
            >
              Individuell und überzeugend auf deine Wünsche angepasst
            </p>
          </div>
          <div>
            <p className="text-left md:max-w-[200px]  text-lg text-anna-white-dark">
              Dein Businessplan für{" "}
              <b className="text-anna-white">deinen Erfolg</b>
            </p>
          </div>

          <div className="hidden md:flex  gap-[16px]">
            <ButtonAnnaBurgundy text="Lege heute los" />
            <ButtonAnnaTransparent text="Kontakt" />
          </div>
          {/* <div className="sm:mt-10">
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
          </div> */}
          {/* <div className="flex md:hidden w-full flex-col gap-3 relative mx-auto">

            <div className="hidden md:block w-fit absolute top-0 left-0">
              <div className=" w-fit">
                <div className="relative">
                  <IoShieldCheckmark
                    size={50}
                    color="#5B1C31"
                    className="rounded-full"
                  />
                  <div className="absolute top-1/2 -z-10 bg-white w-6 h-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              <p className="text-anna-white-dark text-sm max-w-40">
                Individuell und überzeugend auf deine Wünsche angepasst
              </p>
            </div>
            <div className="relative w-full h-[60vh] flex items-center justify-center overflow-visible">
              <div className="relative w-[50vw] h-auto aspect-[3/3]">
                {" "}
                <motion.div
                  variants={zoomIn(0.2, 1.25)}
                  initial="hidden"
                  animate="show"
                  className="flex justify-center h-full z-[10]"
                >
                  <img
                    src="/leistungen/6.png"
                    alt=""
                    className="w-full h-full max-h-72 max-w-72 rounded-2xl  z-[3]" // Cambiado a object-scale-down
                    style={{
                      // Reducción adicional con scale
                      transform: "skew(-30deg) rotate(25deg) ",
                      marginTop: "40%",
                    }}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 1, 1.25)}
                  initial="hidden"
                  animate="show"
                  className="flex justify-center  h-full z-[9] "
                >
                  <img
                    src="/leistungen/12.png"
                    alt=""
                    className="w-full h-full max-h-72 max-w-72 rounded-2xl z-[2] "
                    style={{
                      transform: "skew(-30deg) rotate(25deg)",
                      transformOrigin: "center",
                      marginTop: "-40%",
                    }}
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", "tween", 1.75, 1.25)}
                  initial="hidden"
                  animate="show"
                  className="flex justify-center py-[-300px] h-full"
                >
                  <img
                    src="/leistungen/11.png"
                    alt=""
                    className="w-full h-full max-h-72 max-w-72 rounded-2xl z-[1] sm:mt-[-100%] "
                    style={{
                      transform: "skew(-30deg) rotate(25deg)",
                      transformOrigin: "center",
                      marginTop: "-120%",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div> */}

          <div className="hidden md:block">
            <div className="flex flex-col gap-[20px]  mt-20">
              <div className="flex items-center gap-2">
                <span className=" font-semibold text-anna-black text-2xl">
                  100+
                </span>

                <span className="font-vollkornSC text-anna-black font-bold text-xl">
                  zufriedene kunden
                </span>
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="w-28 h-8 border-anna-blue overflow-hidden">
                  <img
                    src="/brands/brand2.webp"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="w-28 h-8 border-anna-blue overflow-hidden ">
                  <img
                    src="/brands/brand4.png"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="w-28 h-8 border-anna-blue overflow-hidden">
                  <img
                    src="/brands/brand1.avif"
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="w-28 h-8 border-anna-blue overflow-hidden">
                  <img
                    src="/brands/brand3.png"
                    alt=""
                    className="object-cover h-full w-full border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hidden md:flex w-1/2  flex-col gap-3 relative ">
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
              Individuell und überzeugend auf deine Wünsche angepasst
            </p>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[3]">
              <motion.div
                variants={zoomIn(0.2, 1.25)}
                initial="hidden" // Estado inicial
                animate="show"
                className=" z-[3] w-[27.2rem] "
              >

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
        </div> */}
        <div className="relative w-full lg:w-[45%] flex justify-center items-center mt-16 md:mt-0">
          {/* Contenedor con espacio proporcional fijo */}
          <div className="relative w-4/5 max-w-xs pb-32 ">
            <div className="relative">
              {/* Imagen 1 - La primera imagen establece el tamaño base */}
              <div className="relative lg:top-4 aspect-[1] w-[80%]  md:w-[full] z-[3] rounded-xl">
                <motion.div
                  variants={zoomIn(0.2, 1.25)}
                  initial="hidden"
                  animate="show"
                  className="flex justify-center h-auto w-full z-[10]  aspect-[1]"
                >
                  <img
                    src="/leistungen/6.png"
                    alt="Imagen 1"
                    className="w-3/4 sm:w-full h-auto rounded-xl "
                    style={{ transform: "skew(-15deg) rotate(27deg)" }}
                  />
                </motion.div>
              </div>

              {/* Imagen 2 - Posicionada relativamente a la primera */}
              <div className="absolute top-10 lg:top-[4.5rem] w-[80%]  md:w-[full] z-[2] aspect-[1]">
                <motion.div
                  variants={fadeIn("up", "tween", 1, 1.25)}
                  initial="hidden"
                  animate="show"
                  className="flex justify-center w-full h-auto z-[9] aspect-[1] "
                >
                  <img
                    src="/leistungen/12.png"
                    alt="Imagen 2"
                    className="w-3/4 sm:w-full h-auto rounded-xl "
                    style={{ transform: "skew(-15deg) rotate(27deg)" }}
                  />
                </motion.div>
              </div>

              {/* Imagen 3 - Posicionada relativamente a la primera */}
              <div className="absolute top-20 lg:top-[8rem] w-[80%]  md:w-[full] z-[1] aspect-[1]">
                <motion.div
                  variants={fadeIn("up", "tween", 1.75, 1.25)}
                  initial="hidden"
                  animate="show"
                  className="flex justify-center h-auto w-full z-[8]  aspect-[1]"
                >
                  <img
                    src="/leistungen/11.png"
                    alt="Imagen 3"
                    className="w-3/4 sm:w-full h-auto rounded-xl "
                    style={{ transform: "skew(-15deg) rotate(27deg)" }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" md:hidden w-full flex justify-center items-center gap-4  my-16 ">
            <div className="relative">
              <IoShieldCheckmark
                size={50}
                color="#5B1C31"
                className="rounded-full"
              />
              <div className="absolute top-1/2 -z-10 bg-white w-6 h-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <p
              className=" text-base  text-transparent"
              style={{
                background: "linear-gradient(to right,#125369,#3CA3B5)",
                backgroundClip: "text",
              }}
            >
              Individuell und überzeugend auf deine Wünsche angepasst
            </p>
          </div>

          <div className="md:hidden flex flex-col gap-[10px]  mt-4">
            <div className="flex items-center justify-center gap-2">
              <span className=" font-semibold text-anna-black text-lg">
                100+
              </span>

              <span className="font-vollkornSC text-anna-black font-bold text-lg">
                zufriedene kunden
              </span>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="w-28 h-8 border-anna-blue overflow-hidden">
                <img
                  src="/brands/brand2.webp"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-28 h-8 border-anna-blue overflow-hidden ">
                <img
                  src="/brands/brand4.png"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-28 h-8 border-anna-blue overflow-hidden">
                <img
                  src="/brands/brand1.avif"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-28 h-8 border-anna-blue overflow-hidden">
                <img
                  src="/brands/brand3.png"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-28 h-8 border-anna-blue overflow-hidden">
                <img
                  src="/brands/brand6.2.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden w-full  justify-center items-center gap-4 mt-10">
        <div className="">
          <div className="relative">
            <IoShieldCheckmark
              size={50}
              color="#5B1C31"
              className="rounded-full"
            />
            <div className="absolute top-1/2 -z-10 bg-white w-6 h-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <p
          className="font-cabin_sans font-medium w-full   text-transparent"
          style={{
            background: "linear-gradient(to right,#121369,#3fffff)",
            backgroundClip: "text",
          }}
        >
          Individuell und überzeugend auf deine Wünsche angepasst
        </p>
      </div>
    </div>
  );
};

export default Hero;

<div className="flex md:hidden w-1/2  flex-col gap-3 relative ">
  <div className="relative w-fit">
    <IoShieldCheckmark size={50} color="#5B1C31" className=" rounded-full" />
    <div className="absolute top-1/2 -z-10 bg-white w-6 h-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  <div className=" relative">
    <p className="text-anna-white-dark  text-sm max-w-40">
      Individuell und überzeugend auf deine Wünsche angepasst
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
</div>;

<div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 border">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Texto a la izquierda */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Título Principal
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula
        ipsum a arcu
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300">
        Saber más
      </button>
    </div>

    {/* Imágenes a la derecha */}
    <div className="relative w-full lg:w-1/2 flex justify-center mt-12 md:mt-0">
      {/* Contenedor con espacio proporcional fijo */}
      <div className="relative w-4/5 max-w-xs pb-32">
        {" "}
        {/* Altura proporcional al ancho */}
        {/* Contenedor de imágenes apiladas */}
        <div className="relative">
          {/* Imagen 1 - La primera imagen establece el tamaño base */}
          <div className="relative aspect-[1] w-full z-[3] rounded-xl">
            <motion.div
              variants={zoomIn(0.2, 1.25)}
              initial="hidden"
              animate="show"
              className="flex justify-center h-full z-[10]  "
            >
              <img
                src="/leistungen/6.png"
                alt="Imagen 1"
                className="w-full h-auto rounded-xl  "
                style={{ transform: "skew(-15deg) rotate(27deg)" }}
              />
            </motion.div>
          </div>

          {/* Imagen 2 - Posicionada relativamente a la primera */}
          <div className="absolute top-10 w-full z-[2] aspect-[1]">
            <motion.div
              variants={fadeIn("up", "tween", 1, 1.25)}
              initial="hidden"
              animate="show"
              className="flex justify-center  h-full z-[9] "
            >
              <img
                src="/leistungen/12.png"
                alt="Imagen 2"
                className="w-full h-auto rounded-xl"
                style={{ transform: "skew(-15deg) rotate(27deg)" }}
              />
            </motion.div>
          </div>

          {/* Imagen 3 - Posicionada relativamente a la primera */}
          <div className="absolute top-20 w-full z-[1] aspect-[1]">
            <motion.div
              variants={fadeIn("up", "tween", 1.75, 1.25)}
              initial="hidden"
              animate="show"
              className="flex justify-center  h-full"
            >
              <img
                src="/leistungen/11.png"
                alt="Imagen 3"
                className="w-full h-auto rounded-xl "
                style={{ transform: "skew(-15deg) rotate(27deg)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

"use client";

import Subtitle from "@/app/components/customTags/Subtitle";
import Title from "@/app/components/customTags/Title";

import HeroSecondary from "@/app/components/HeroSecondary";

import React, { useState } from "react";

const founders = [
  {
    name: "Patrick Rösner",
    position: "Berater",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    imgSource: "founders/pat-no-bg.png",
  },
  {
    name: "Anna Schenk",
    position: "Founder",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    imgSource: "founders/anna.avif",
  },
  {
    name: "Jennifer Weisheit",
    position: "Beraterin",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    imgSource: "founders/jen-no-bg.png",
  },
];

const About = () => {
  const [hoverIn, setHoverIn] = useState(false);

  return (
    <div>
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          header="origins"
          title="Über uns"
          text="You should have all the support for empezar tu negocio de forma solida inquebrantable porque eso hace mas seguro tu exito "
          imageStyles=""
        />
      </div>
      {/* <Placeholder text="Uber uns" /> */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase text-gray-500 tracking-wide">
          Contamos con el respaldo de las mejores Organizaciones e Instituciones
          a nivel nacional
        </p>
        <div className="mt-6 flex flex-row flex-wrap justify-center">
          <a
            href=""
            className="col-span-1 flex justify-center relative w-36 h-28 mx-5 "
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <img
                src="/brands/brand1.avif"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
          </a>
          <a
            href=""
            className="col-span-1 flex justify-center relative w-36 h-28 mx-5"
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <img
                src="/brands/brand2.webp"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
          </a>
          <a
            href=""
            className="col-span-1 flex justify-center relative w-36 h-28 mx-5"
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <img
                src="/brands/brand5.jpeg"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
          </a>
          <a
            href=""
            className="col-span-1 flex justify-center relative w-36 h-28 mx-5"
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <img
                src="/brands/brand4.png"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
          </a>
          <a
            href=""
            className="col-span-1 flex justify-center relative w-36 h-28 mx-5"
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <img
                src="/brands/brand3.png"
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
          </a>
        </div>
      </div>

      {/* <div className="mb-[100px]">
        <Collage
          main_image="worker2.jpg"
          left_top_image="worker1.jpg"
          right_top_image="worker3.jpg"
          left_bottom_image="worker4.jpeg"
          right_bottom_image="worker5.jpeg"
        />
      </div> */}
      <div className="mt-[70px] w-full  mb-[70px] max-w-7xl sm:px-16 px-10 mx-auto">
        <div>
          <div className="bg-anna-cream rounded-xl p-10">
            <div className="mb-40">
              {/* <Title text="why we do it?" /> */}
              {/* <div className="rounded-ss-[5rem] rounded-br-[5rem] overflow-hidden w-full h-80 flex items-center">
                <img
                  src="/about/hand.jpg"
                  alt=""
                  className="object-cover bg-center"
                />
              </div> */}
              <div className="w-1/2">
                <h1
                  className={`font-cabin text-3xl sm:text-[2rem] text-yellow-500 `}
                >
                  Why we do it?
                </h1>
                <div className="font-cabin text-3xl sm:text-[2rem] mb-10">
                  <span>Because we shouldnt </span>
                  <span className="text-cyan-800">start a business with</span>
                  <span>out </span>
                  <span className="text-cyan-800">a formidable guide</span>
                </div>
              </div>

              <div className="flex w-full mt-12">
                <div className="w-1/3 ">
                  <img
                    src="/logo/logo-no-bg/logo-black-no-bg.png"
                    alt=""
                    className="w-32 aspect-auto mx-auto"
                  />
                </div>
                <div className="w-1/3 p-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil quidem aspernatur repudiandae maiores laboriosam
                    repudiandae
                  </p>
                </div>
                <div className="w-1/3 p-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste itaque nesciunt quis quia nisi amet minus doloribus
                    repudiandae maiores
                  </p>
                </div>
              </div>
              <div className="h-[1px] bg-white mt-12"></div>
              {/* <p>
                why we do it? -hacemos esto porque no deberias empezar tu
                negocio tu solo sin soporte -se de primera mano lo dificil que
                es empezar tu empresa tu solo why you are the best? -una
                historia de ti de como eres la mejor para el trabajo haciendolo
                lucir lo mas humano posible how do you help your clients? -como
                yo lo haces? como lo entregas y como haras sus vidas mejor
              </p> */}
            </div>

            <div className="flex lg:flex-row flex-col mb-32">
              <div className="w-1/2 flex flex-col  ">
                <span className="font-vollkorn   tracking-[1px] italic">
                  Our story
                </span>
                <Title text="Our passionate Team" additionalClasses="" />
                <div className="font-cabin text-lg pt-12">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                    placeat dolorem est, harum dolorum impedit eum eos nisi,
                    autem sit, minus eius libero in possimus accusantium ipsam
                    mollitia doloremque pariatur!
                  </p>
                  <p className="mt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                    placeat dolorem est, harum dolorum impedit eum eos nisi,
                    autem sit, minus eius libero in possimus accusantium ipsam
                    mollitia doloremque pariatur!
                  </p>
                </div>
              </div>
              <div className="w-1/2 relative ">
                <div className=" h-[30rem] w-full ">
                  <div>
                    <img
                      src="/banner/newspaper.jpg"
                      alt=""
                      className="rounded-xl h-60 aspect-square object-cover absolute left-[45%] bottom-[45%] shadow-gray-400 shadow-[0px_0px_15px]  z-[1]"
                    />
                  </div>
                  <img
                    src="/banner/camara.jpg"
                    alt=""
                    className="rounded-xl h-60 aspect-square object-cover absolute right-[45%] top-[45%] shadow-gray-400 shadow-[0px_0px_15px] z-[2]"
                  />
                </div>
                <div className="rounded-xl absolute  bg-white aspect-square h-60 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0 shadow-gray-400 shadow-[0px_0px_15px]">
                  {/* <img
                    src="logo/logo-no-bg/logo-black-no-bg.png"
                    alt=""
                    className=""
                  /> */}
                </div>
              </div>
            </div>

            <div>
              <div className="flex">
                <div className="flex flex-col  justify-center items-center  w-full">
                  <span className="font-vollkorn text-center  tracking-[1px] italic">
                    Our team
                  </span>
                  <Title text="who are we?" additionalClasses="text-center" />
                  <div className="font-cabin text-lg pt-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam obcaecati ipsum debitis animi ex
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",

                      flex: "0 0 auto",
                      gap: "40px",
                      gridAutoRows: "minmax(0px, 1fr)",
                      gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
                      height: "min-content",
                      justifyContent: "center",
                      padding: "0px",
                      position: "relative",
                      width: "100%",
                      zIndex: 1,
                    }}
                  >
                    {founders.map((item, index) => {
                      return (
                        <div
                          style={{
                            placeSelf: "start",
                            flex: "0 0 auto",
                            height: "auto",
                            position: "relative",
                            width: "100%",
                          }}
                          key={index}
                        >
                          <div
                            style={{
                              width: "100%",
                              opacity: 1,
                              transform: "none",
                              alignContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              display: "flex",
                              flexDirection: "column",
                              flexWrap: "wrap",
                              gap: "12px",
                              height: "auto",
                              justifyContent: "flex-start",
                              padding: 0,
                              position: "relative",
                            }}
                          >
                            <div
                              className="flex flex-none flex-nowrap gap-2 h-80 justify-center overflow-hidden p-0 relative w-60 items-center"
                              style={{
                                borderBottomLeftRadius: "480px",
                                borderBottomRightRadius: "480px",
                              }}
                            >
                              <div
                                className="aspect-square bottom-0 flex-none h-60 left-0 overflow-hidden absolute right-0 z-[1] opacity-100 border-4"
                                style={{
                                  background: "rgb(230, 230, 230)",
                                  borderRadius: "480px",
                                }}
                              ></div>

                              <div
                                className="aspect-[0.75/1] -bottom-1 flex-none h-80 left-0 absolute right-0 z-[1] transform-none opacity-100"
                                style={{ transformOrigin: "50% 50% 0px" }}
                              >
                                <div
                                  className="absolute inset-0"
                                  style={{ borderRadius: "inherit" }}
                                >
                                  <img
                                    src={item.imgSource}
                                    alt=""
                                    className="block w-full h-full object-center object-cover"
                                    style={{ borderRadius: "inherit" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div>{item.position}</div>
                            <div className="font-semibold font-vollkornSC">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-black">
          why we do it? why you are the best? i know from firsthand the
          difficulties of doing this
        </p>

        <p className="text-black">who we are?</p>
        <div className="mx-auto bg-[#115369] w-full   flex flex-col items-center rounded-xl h-[22rem] justify-center gap-5 relative overflow-hidden p-14 ">
          <Subtitle
            text="Ready to Start your business of the best way?"
            color="white"
            position="left"
            size="4xl"
          />
          <p className="text-anna-white/70 mb-2 font-thin">
            Unser Workflow – Schritt für Schritt zu deinem Erfolg
          </p>
          <div className="flex gap-4">
            <button className="rounded-3xl bg-[#4cb4d7]  text-gray-800 font-medium font-cabin px-5 py-2">
              Make an appointment
            </button>
            <button
              className="relative rounded-3xl   text-anna-white font-medium font-cabin px-5 py-2  overflow-hidden"
              onMouseEnter={() => setHoverIn(true)}
              onMouseLeave={() => setHoverIn(false)}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                boxShadow: "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
              }}
            >
              <p className="text-anna-white" >Kontakt</p>
              <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  hoverIn ? "-bottom-3" : "-bottom-8"
                }    h-11 w-11 aspect-square `}
                style={{
                  backgroundColor: "rgb(234, 168, 121)",
                  filter: "blur(10px)",
                  borderRadius: "100px",
                  opacity: 0.3,
                }}
              ></div>
            </button>
          </div>
          {/* <div className="absolute right-0 bottom-[0%] " >
            <img src="/profile/colleagues.png" alt="" className="bg-cover "/>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;

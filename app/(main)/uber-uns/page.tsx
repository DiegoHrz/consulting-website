"use client";

import AppointmentBanner from "@/app/components/AppointmentBanner";

import HeroSecondary from "@/app/components/HeroSecondary";

import React from "react";

// const founders = [
//   {
//     name: "Patrick Rösner",
//     position: "Berater",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     imgSource: "founders/pat-no-bg.png",
//   },
//   {
//     name: "Anna Schenk",
//     position: "Founder",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     imgSource: "founders/anna.webp",
//   },
//   {
//     name: "Jennifer Weisheit",
//     position: "Beraterin",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     imgSource: "founders/jen-no-bg.png",
//   },
// ];

const About = () => {
  return (
    <div>
      <div className="h-screen w-full m-auto text-black  bg-anna-turquoise  ">
        <HeroSecondary
          image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          header="unser team"
          title="Über uns"
          text="Weil jedes erfolgreiche Business mit der richtigen Unterstützung beginnt."
          imageStyles=""
        />
      </div>
      {/* <Placeholder text="Uber uns" /> */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase text-gray-500 tracking-wide">
          Tagtäglich unterstützen wir zahlreiche Unternehmer deutschlandweit
        </p>
        <div className="mt-6 flex flex-row flex-wrap justify-center">
          <div className="col-span-1 flex justify-center relative w-36 h-28 mx-5 ">
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
          </div>
          <div className="col-span-1 flex justify-center relative w-36 h-28 mx-5">
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
          </div>
          <div className="col-span-1 flex justify-center relative w-36 h-28 mx-5">
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
          </div>
          <div className="col-span-1 flex justify-center relative w-36 h-28 mx-5">
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
          </div>
          <div className="col-span-1 flex justify-center relative w-36 h-28 mx-5">
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
          </div>
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
      </div>
      <div className="mt-[70px] w-full  mb-[70px] max-w-7xl px-8 sm:px-16  mx-auto">
        <div>
          <div className="bg-anna-cream rounded-xl p-10">
            <div className="mb-40">
              <Title text="why we do it?" />
              <div className="rounded-ss-[5rem] rounded-br-[5rem] overflow-hidden w-full h-80 flex items-center">
                <img
                  src="/about/hand.jpg"
                  alt=""
                  className="object-cover bg-center"
                />
              </div>
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
              <p>
                why we do it? -hacemos esto porque no deberias empezar tu
                negocio tu solo sin soporte -se de primera mano lo dificil que
                es empezar tu empresa tu solo why you are the best? -una
                historia de ti de como eres la mejor para el trabajo haciendolo
                lucir lo mas humano posible how do you help your clients? -como
                yo lo haces? como lo entregas y como haras sus vidas mejor
              </p>
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
                  <img
                    src="logo/logo-no-bg/logo-black-no-bg.png"
                    alt=""
                    className=""
                  />
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
      </div> */}

      <div className="bg-gray-50 min-h-screen text-justify">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-anna-cream to-[#D7E2DC]  text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              AS Vision Partners
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Unternehmensberatung für Gründer und etablierte Unternehmen
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-8 lg:px-16  max-w-7xl mx-auto">
          <div className="">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-7xl text-justify relative border-4">
              <img
                src="/logo/logo-no-bg/logo-black-no-bg.png"
                alt=""
                className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-[3%] max-w-full max-h-full w-auto h-auto object-contain "
              />
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed ">
                Als strategisches Netzwerk eng verbundener Partner haben wir es
                uns zur Aufgabe gemacht, Gründer, Start-Ups und Selbstständige
                dabei zu unterstützen, ihre Visionen zu verwirklichen und ihre
                Träume in die Realität umzusetzen.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Dank unseres remote-first Ansatzes agieren wir flexibel von
                diversen Standorten aus und verbinden Innovation, Strategie und
                persönliche Beratung – stets mit einem klaren Fokus auf deine
                individuellen Bedürfnisse.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className=" px-8 sm:px-6 lg:px-8 bg-white">
          <div className="grid md:grid-cols-2 gap-12 py-16 lg:px-16 max-w-7xl mx-auto">
            <div className="bg-indigo-50 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
                Unsere Mission
              </h3>
              <blockquote className="text-gray-700  text-lg leading-relaxed">
                Wir begleiten Menschen auf ihrem Weg in die Selbstständigkeit
                und helfen ihnen, ihre beruflichen Visionen in die Realität
                umzusetzen. Mit persönlicher Beratung, fachlicher Expertise und
                individuellen Lösungen bieten wir unseren Kunden die
                Unterstützung, die sie für eine erfolgreiche Zukunft brauchen.
              </blockquote>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Unsere Vision
              </h3>
              <blockquote className="text-gray-700  text-lg leading-relaxed">
                Wir möchten eine zentrale Anlaufstelle für Gründerinnen und
                Unternehmerinnen sein, die nach klarer Orientierung, praxisnaher
                Unterstützung und langfristigem Erfolg streben. Unsere Vision
                ist es, ein Netzwerk zu schaffen, in dem jede/r die Möglichkeit
                hat, mit einer klaren Strategie und nachhaltigen Lösungen seine
                oder ihre beruflichen Träume zu verwirklichen.
              </blockquote>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-6 mb-10 text-justify md:text-center px-8 lg:px-16">
            <p className="text-lg text-gray-700 ">
              Seit der Gründung konnten wir bereits zahlreiche Kunden
              erfolgreich unterstützen und sind stolz darauf, Teil ihrer
              Erfolgsgeschichten zu sein.
            </p>
            <p className="text-lg text-gray-700">
              Wir arbeiten eng mit dir zusammen, um deine Herausforderungen zu
              meistern und nachhaltigen Erfolg zu erzielen.
            </p>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 lg:px-8 bg-gray-100">
          <div className=" px-8 lg:px-16 max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Unser Versprechen
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  Maßgeschneiderte Beratung
                </h4>
                <p className="text-gray-600">
                  Passend zu dir und deiner Vision.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  Engagiertes Team
                </h4>
                <p className="text-gray-600">
                  Fachwissen und Erfahrung an deiner Seite.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  Klare Strategie
                </h4>
                <p className="text-gray-600">
                  Für ein Unternehmen, das auf das nächste Level wächst.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 sm:px-6 lg:px-8 bg-white">
          <div className="px-8 lg:px-16 max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Meet the Founder - Anna Schenk
            </h3>

            <div className="flex flex-col md:flex-row gap-12 ">
              <div className="md:w-1/3">
                <div className="bg-gray-200 rounded-xl overflow-hidden  w-full max-w-md mx-auto shadow-[#125369] shadow-[0px_3px_10px_0px]">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-br from-white to-anna-white flex items-center justify-center text-gray-500 ">
                    {/* <svg
                      className="w-20 h-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg> */}
                    <div
                      style={{
                        placeSelf: "start",
                        flex: "0 0 auto",
                        height: "auto",
                        position: "relative",
                        width: "100%",
                      }}
                      key={1}
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
                            className="aspect-square bottom-0 flex-none h-60 left-0 overflow-hidden absolute right-0 z-[1] opacity-100 "
                            style={{
                              background: "rgba(255, 215, 0,0.2)",
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
                                src="founders/anna.webp"
                                alt=""
                                className="block w-full h-full object-center object-cover"
                                style={{ borderRadius: "inherit" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" text-black text-lg my-2 text-center">
                          <div className="font-vollkornSC font-semibold text-xl  tracking-[3px]">
                            anna schenk
                          </div>
                          <div className="font-vollkorn">Gründerin</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Mit einem Abschluss in Betriebswirtschaftslehre und dem
                  Schwerpunkt Finanzen habe ich mir fundiertes Fachwissen
                  angeeignet, das ich seit 2023 als selbstständige Beraterin
                  erfolgreich einsetze. Meine Mission ist es, Menschen dabei zu
                  unterstützen, ihre Berufung zum Beruf zu machen – und dadurch
                  einen Alltag zu schaffen, der sich nicht wie Arbeit anfühlt,
                  sondern wie die Erfüllung eines Traums.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Stationen in den USA und Peru haben meinen Blick auf die Welt
                  erweitert. Ich durfte nicht nur neue Perspektiven gewinnen,
                  sondern auch interkulturelle Kompetenzen entwickeln – ein
                  wertvoller Vorteil, um Unternehmen mit internationaler
                  Ausrichtung zu unterstützen. Zudem spreche ich mehrere
                  Sprachen, darunter Deutsch, Englisch und Spanisch, was mir
                  ermöglicht, auf die Bedürfnisse einer vielfältigen Kundschaft
                  einzugehen.
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    Werte, die mich antreiben:
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">
                          Freiheit durch Selbstständigkeit:
                        </p>
                        <p className="text-gray-600">
                          Mein Ziel ist es, Menschen die Möglichkeit zu geben,
                          ihr Leben selbstbestimmt zu gestalten, indem sie ihr
                          eigenes Business erfolgreich umsetzen. Freiheit
                          bedeutet für mich, die Kontrolle über die eigene
                          berufliche und private Zukunft zu haben.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">
                          Gesundheit und Zufriedenheit im Beruf:
                        </p>
                        <p className="text-gray-600">
                          Eine bewusste und gesunde Lebensweise liegt mir am
                          Herzen, denn sie ist die Grundlage für nachhaltigen
                          Erfolg. Dabei ist vor allem die Zufriedenheit im Beruf
                          essenziell – denn nur wer mit Leidenschaft und Freude
                          arbeitet, kann langfristig erfolgreich und erfüllt
                          sein.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">
                          Entdeckungsfreude:
                        </p>
                        <p className="text-gray-600">
                          Neue Länder, Kulturen und Ideen zu erkunden,
                          bereichert nicht nur mein Leben, sondern auch meine
                          Arbeit. Diese Offenheit ermöglicht es mir, innovative
                          Perspektiven zu entwickeln und flexibel auf die
                          Bedürfnisse meiner Kunden einzugehen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-medium">Optimismus:</p>
                        <p className="text-gray-600">
                          Ich bin überzeugt, dass alles möglich ist, wenn man
                          seine Ziele mit Klarheit, Mut und Überzeugung
                          verfolgt. Diese Haltung prägt meinen Ansatz, Menschen
                          auf ihrem Weg in die Selbstständigkeit zu begleiten.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-8 sm:px-6 lg:px-8 bg-gray-100">
          <div className="lg:px-16 max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Unser Team
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Patrick Rösner */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:items-center">
                  <div className="md:w-2/4 ">
                    {/* Placeholder for image */}
                    {/* <div className="w-full h-full aspect-square bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center text-gray-500 rounded-full">
                      <svg
                        className="w-16 h-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div> */}
                    <div
                      style={{
                        placeSelf: "start",
                        flex: "0 0 auto",
                        height: "auto",
                        position: "relative",
                        width: "100%",
                      }}
                      key={1}
                    >
                      <div
                        style={{
                          width: "100%",
                          opacity: 1,
                          transform: "none",
                          alignContent: "center",
                          alignItems: "center",
                          cursor: "none",
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
                                src="founders/pat-no-bg.png"
                                alt="pat"
                                className="block w-full h-full object-center object-cover"
                                style={{ borderRadius: "inherit" }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className=" text-black my-2 text-center">
                          <div className="font-vollkornSC font-semibold text-xl tracking-[3px] md:tracking-[0px] lg:tracking-[3px]">
                            patrick rösner{" "}
                          </div>
                          <div className="font-vollkorn">- Berater -</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-full p-6 text-justify">
                    <p className="text-gray-600 mb-4">
                      Mit mehr als 10 Jahren Erfahrung in der Beratung ist
                      Patrick Rösner eine zentrale Stütze unseres Teams. Seine
                      umfassenden Kenntnisse und sein tiefes Verständnis für
                      verschiedenste Wirtschaftssektoren machen ihn zu einem
                      wertvollen Experten, vor allem in der Entwicklung von
                      Businessplänen, der Optimierung von Geschäftsstrategien
                      und der Analyse von Marktchancen.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Patrick hat zahlreiche Gründer und Unternehmen auf ihrem
                      Weg begleitet und ihnen geholfen, fundierte Entscheidungen
                      zu treffen sowie ihre Ziele sicher und effizient zu
                      erreichen. Seine strategische Herangehensweise und sein
                      Blick fürs Wesentliche machen ihn zu einem unverzichtbaren
                      Bestandteil unseres Teams.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/patrick-r%C3%B6sner-8763031bb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      LinkedIn Profil
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Jennifer Weisheit */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col items-center">
                  <div className="sm:w-2/4">
                    {/* Placeholder for image */}
                    {/* <div className="w-full h-full aspect-square bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center text-gray-500 rounded-full">
                      <svg
                        className="w-16 h-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div> */}
                    <div
                      style={{
                        placeSelf: "start",
                        flex: "0 0 auto",
                        height: "auto",
                        position: "relative",
                        width: "100%",
                      }}
                      key={1}
                    >
                      <div
                        style={{
                          width: "100%",
                          opacity: 1,
                          transform: "none",
                          alignContent: "center",
                          alignItems: "center",
                          cursor: "none",
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
                                src="founders/jen-no-bg.png"
                                alt=""
                                className="block w-full h-full object-center object-cover"
                                style={{ borderRadius: "inherit" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" text-black my-2 text-center w-full">
                          <div className="font-vollkornSC font-semibold text-xl tracking-tighter">
                            jennifer weisheit{" "}
                          </div>
                          <div className="font-vollkorn">- Beraterin -</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-full p-6 text-justify">
                    {/* <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Jennifer Weisheit - Beraterin
                    </h4> */}
                    <p className="text-gray-600 mb-4">
                      Jennifer Weisheit ist deine kompetente Begleiterin auf dem
                      Weg zur erfolgreichen Gründung. Mit ihrer langjährigen
                      Erfahrung als Unternehmensberaterin hat sie bereits
                      zahlreiche Gründer:innen auf ihrem Weg zum Erfolg
                      unterstützt.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Nach wertvollen Jahren als angestellte Beraterin entschied
                      sie sich, selbst den Schritt in die Selbstständigkeit zu
                      wagen – ein Weg, der sie geprägt und bereichert hat. Heute
                      nutzt sie ihre umfassende Expertise, um Gründer:innen
                      dabei zu helfen, ihre Vorhaben sicher und gewinnbringend
                      umzusetzen.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Jennifer legt großen Wert darauf, dir nicht nur praktische
                      Werkzeuge und Strategien an die Hand zu geben, sondern
                      dich auch mental auf die Herausforderungen und Chancen des
                      Unternehmertums vorzubereiten.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/jennifer-weisheit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      LinkedIn Profil
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 px-8 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto lg:px-16">
            <h3 className="text-3xl font-bold text-center  text-gray-800">
              Kooperationspartner
            </h3>
            <p className="text-justify md:text-center my-10 max-w-4xl mx-auto">
              Wir freuen uns, dir die mit AS Vision Partners verbundenen
              Kooperationspartner vorzustellen. Durch diese langjährige,
              professionelle Zusammenarbeit werden optimale Voraussetzungen für
              die jungen Unternehmer von morgen geschaffen.
            </p>

            <div className="grid md:grid-cols-2 gap-10 md:gap-20 max-w-7xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <a
                  href="https://institut-weisheit.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                      <svg
                        className="w-8 h-8 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-800 hover:text-indigo-600 transition-colors">
                      Institut Weisheit
                    </span>
                  </div>
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <a
                  href="https://starthilfe-marketing.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors">
                      Starthilfe Marketing
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="my-20 md:my-36">
              <AppointmentBanner />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

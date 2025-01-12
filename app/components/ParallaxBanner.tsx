"use client";
import React, { useEffect, useState } from "react";


const ParallaxBanner = () => {
  const [scrollPosition, setScrollPosition] = useState(-500);

  useEffect(() => {
    const handleScroll = () => {
      const position = -window.pageYOffset - 500;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const parallaxShift = scrollPosition * 0.15;
  return (
    <div className="overflow-hidden  border-red-500 h-[26rem]  w-full sm:px-16 px-14 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-anna-white z-50">
        <img
          src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
          alt="White Logo"
          className="h-auto w-40  mx-auto px-3 animate-fade-title"
        />
        <p className="font-cabin text-3xl">Bereit für die Veränderung?</p>
      </div>
      <div className="h-full w-full relative">
        <div
          className="absolute w-full h-full max-w-7xl "
          style={{
            transform: `translateY(${parallaxShift}px)`,
          }}
        >
          <img
            src="/banner/parallax-image-2.jpg"
            alt="Parallax Background"
            className="w-full h-screen object-cover bg-center"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform  w-full"></div>
      </div>

      {/* <div className="hidden lg:block h-screen" id="home">
        <div
          className="relative flex h-full w-full justify-center bg-fixed bg-cover bg-center bg-no-repeat safari-fix"
          style={{ backgroundImage: "url('/assets/home-cafe-2.jpg')" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <img
              src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
              alt=""
              className=" h-full w-fit mx-auto px-3 "
            />
            <img
              src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
              alt=""
              className=" mx-auto mt-4  "
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ParallaxBanner;

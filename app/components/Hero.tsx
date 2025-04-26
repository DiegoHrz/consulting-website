"use client";

import CarouselContainer from "./carousel/CarouselContainer";
import Subtitle from "./customTags/Subtitle";

const Hero = () => {
  return (
    <div>
      <div className="h-screen relative shadow-anna-blue shadow-[0px_1px_7px_0px]">
        <div className="h-full w-full relative">
          <div className="absolute w-full h-full"></div>
          {/* <img
            src="/video/hero-foto-desktop.png"
            alt="Full-width GIF"
            className="hidden md:block w-screen h-screen object-cover"
          />
          <img
            src="/video/hero-foto-mobile.png"
            alt="Full-width GIF"
            className="md:hidden w-screen h-screen object-cover"
          /> */}
          <video
            autoPlay
            muted
            loop
            playsInline // 👈 Necesario para iOS/móviles
            controls={false} // 👈 Oculta controles (opcional)
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/video/hero-video-desktop.mov"
              type="video/mp4"
              className="hidden md:block"
            />
            <source
              src="/video/hero-video-mobile.mov"
              type="video/mp4"
              className="md:hidden block"
            />
          </video>
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
            <img
              src="/logo/logo-no-bg/logo-white-no-bg.png"
              alt="White Logo"
              className="h-auto w-96  mx-auto px-3 animate-fade-title"
            />
            <Subtitle text="Starte dein Unternehmen mit dem perfekten Businessplan" />
            <div className="w-full flex justify-center animate-fade-subtitle pt-8">
              <button className="text-white mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition">
                KONTAKT
              </button>
            </div>
            {/* <img
            src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png "
            alt="Cafe Logo"
            className="mx-auto mt-4 animate-fade-subtitle"
            /> */}
          </div>
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
      <CarouselContainer />
    </div>
  );
};
export default Hero;

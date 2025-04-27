"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CarouselContainer from "./carousel/CarouselContainer";
import Subtitle from "./customTags/Subtitle";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    handleResize(); // detectar al cargar
    window.addEventListener("resize", handleResize); // detectar cambios
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="h-screen relative shadow-anna-blue shadow-[0px_1px_7px_0px]">
        <div className="h-full w-full relative">
          
          {isMobile ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disableRemotePlayback
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/video/hero-video-mobile.mp4" type="video/mp4" />
            </video>
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              disableRemotePlayback
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/video/hero-video-desktop.mp4" type="video/mp4" />
            </video>
          )}

          {/* Tu contenido de siempre */}
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
            <img
              src="/logo/logo-no-bg/logo-white-no-bg.webp"
              fetchPriority="high"
              loading="eager"
              alt="White Logo"
              className="h-full w-96  mx-auto px-3 animate-fade-title"
            />
            <Subtitle text="Starte dein Unternehmen mit dem perfekten Businessplan" />
            <Link href="/kontakt">
              <div className="w-full flex justify-center animate-fade-subtitle pt-8">
                <button className="text-white mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition">
                  KONTAKT
                </button>
              </div>
            </Link>
          </div>

        </div>
      </div>

      <CarouselContainer />
    </div>
  );
};

export default Hero;

"use client";
import React from "react";

interface ParallaxBannerProps {
  imageUrl: string; // URL de la imagen de fondo
  height: string | number; // Altura del contenedor
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ imageUrl, height }) => {
  return (
    <div
      className="parallax-container"
      style={{
        height: typeof height === "number" ? `${height}rem` : height,
      }}
    >
      {/* Contenido del banner */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <img
          src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
          alt="White Logo"
          className="h-auto w-40 mx-auto px-3 animate-fade-title"
        />
        <p className="font-cabin text-3xl">Bereit für die Veränderung?</p>
      </div>
    </div>
  );
};

export default ParallaxBanner;

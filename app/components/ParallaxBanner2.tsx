"use client";
import React from "react";

interface ParallaxBannerProps {
  imageUrl: string;
  height: string | number; // Altura del contenedor (por ejemplo, 600px)
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  imageUrl,
  height,
}) => {
  return (
    <div
      style={{
        position: "relative",
        height: typeof height === "number" ? `${height}rem` : height,
        overflow: "hidden",
      }}
    >
      {/* Fondo con imagen fija */}
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundAttachment: "fixed", // La clave del efecto parallax
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Se asegura que quede detrás del contenido
        }}
      ></div>

      {/* Contenido del contenedor */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // Para estar sobre la imagen de fondo
        }}
      >
      </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-anna-white ">
          <img
            src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
            alt="White Logo"
            className="h-auto w-40  mx-auto px-3 animate-fade-title"
          />
          <p className="font-cabin text-3xl">Bereit für die Veränderung?</p>
        </div>
    </div>
  );
};

export default ParallaxBanner;

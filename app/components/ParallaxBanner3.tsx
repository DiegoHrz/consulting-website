"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSections: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]); // Ref definido como un array de divs

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      // Asegúrate de que el elemento existe
      if (!section) return;

      // Selecciona el elemento y verifica su tipo
      const bg = section.querySelector(".bg");

      if (bg instanceof HTMLDivElement) {
        // Aplica los estilos iniciales al fondo
        bg.style.backgroundImage = `url(https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random=${i})`;

        if (i > 0) {
          bg.style.backgroundPosition = `50% ${window.innerHeight / 2}px`;

          gsap.to(bg, {
            backgroundPosition: `50% ${-window.innerHeight / 2}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              scrub: true,
            },
          });
        }
      } else {
        console.warn(`Elemento con clase "bg" no es un div en la sección ${i}`);
      }
    });
  }, []);

  return (
    <div className="min-h-screen">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) sectionsRef.current[i] = el;
          }}
          className="relative flex items-center justify-center h-screen overflow-hidden parallax"
        >
          {/* Fondo parallax */}
          <div className="bg absolute top-0 left-0 w-full h-full z-[-1] bg-cover bg-center bg-fixed"></div>

          {/* Contenido */}
          <h1 className="text-white text-4xl md:text-6xl font-bold z-10">
            Section {i + 1}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ParallaxSections;

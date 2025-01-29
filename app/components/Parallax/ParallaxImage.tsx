"use client";

import { useLenis } from "@studio-freight/react-lenis";
import React, { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src?: string;
  alt?: string;
}

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const bounds = useRef<{ top: number; bottom: number } | null>(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );

        if (
          Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01
        ) {
          // imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) `;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  useLenis(({ scroll }: { scroll: number }) => {
    if (!bounds.current) return;
    const relativeScroll = scroll - bounds.current.top;
    targetTranslateY.current = relativeScroll * 0.2;
  });
  // return <img ref={imageRef} src={src} alt={alt} className="absolute w-full h-full object-cover will-change-transform" />;
  return <img ref={imageRef} src={src} alt={alt} className="absolute w-full h-screen object-cover will-change-transform brightness-105" />;
};

export default ParallaxImage;

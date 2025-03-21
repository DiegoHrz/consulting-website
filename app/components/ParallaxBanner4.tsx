"use client";
import React, { useEffect, useRef, useState } from 'react';

const ParallaxBanner4 = () => {
  const parallaxDivRef = useRef<HTMLDivElement>(null);
  const parallaxImageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [initialOffset, setInitialOffset] = useState(0);

  useEffect(() => {
    const calculateOffsets = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect.top + scrollTop;
      setInitialOffset(offset);

      // Establecer las posiciones iniciales
      if (parallaxDivRef.current && parallaxImageRef.current) {
        parallaxDivRef.current.style.transform = `translate3d(0px, ${offset}px, 0px)`;
        parallaxImageRef.current.style.transform = `translate3d(0px, ${offset * -0.8}px, 0px)`;
        console.log('initial translate div : ',parallaxImageRef.current.style.transform  )
        console.log('initial translate image : ',parallaxDivRef.current.style.transform)
      }
    };

    const handleScroll = () => {
      if (!parallaxDivRef.current || !parallaxImageRef.current || !containerRef.current) return;
        
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRect.height;

      // Calcular la distancia desde el inicio del contenedor
      const distanceFromStart = currentScroll - initialOffset;
      console.log('currentScroll: ',currentScroll)
      console.log('containerRect: ',containerRect)
      console.log('distanceFromStart: ',distanceFromStart)
      
      // Solo aplicar el efecto cuando estamos cerca del contenedor
      if (currentScroll >= initialOffset - window.innerHeight && 
          currentScroll <= initialOffset + containerHeight + window.innerHeight) {
        
        // Calcular las nuevas posiciones
        // const divTranslate = initialOffset + distanceFromStart;
        const imageTranslate = -initialOffset + (distanceFromStart * -0.8);

        // Aplicar las transformaciones
        parallaxDivRef.current.style.transform = `translate3d(0px, ${distanceFromStart}px, 0px)`;
        parallaxImageRef.current.style.transform = `translate3d(0px, ${imageTranslate}px, 0px)`;
      }
    };

    // Calcular posiciones iniciales
    calculateOffsets();

    // Agregar event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', calculateOffsets);
    window.addEventListener('load', calculateOffsets);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffsets);
      window.removeEventListener('load', calculateOffsets);
    };
  }, [initialOffset]);

  return (
    <div ref={containerRef} className="parallax-div-div mx-auto w-full border-black border-4">
      <div ref={parallaxDivRef} className="parallax-div mx-auto">
        <img 
          ref={parallaxImageRef} 
          src="/banner/parallax-image-2.jpg" 
          alt="Parallax" 
          className="parallax-image"
        />
      </div>
    </div>
  );
};

export default ParallaxBanner4;

      //parallaxDivOffset = alto de toda la pagina hasta el contenedor
        //se reduce en 1px por 1px
        //max= parallaxDivOffeet + altura del contenedor

        //ImageOffset = parallaxDivOffset * -0.8
        //se reduce en 0.8px por 1px
        //max= max * -0.8
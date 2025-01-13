// // @ts-nocheck
// "use client";
// import React, { useEffect, useRef, useState } from "react";

// const ParallaxBanner3: React.FC = () => {
//   const parallaxDivRef = useRef<HTMLDivElement>(null);
//   const parallaxImageRef = useRef<HTMLImageElement>(null);


//   const [initialOffsetDiv, setInitialOffsetDiv] = useState(0);

//   useEffect(() => {
//     const calculateInitialOffset = () => {
//       if (parallaxDivRef.current) {
//         const offset =
//           parallaxDivRef.current.getBoundingClientRect().top + window.scrollY; // Distancia total desde el inicio
//         setInitialOffsetDiv(offset); // Guardamos el valor en un estado
//         console.log("Initial Offset Div (correcto):", offset);
//       }
//     };

//     // Calcula el offset cuando la página esté completamente cargada
//     calculateInitialOffset();

//     // Si cambian las dimensiones del viewport, recalcular
//     window.addEventListener("resize", calculateInitialOffset);
//     calculateInitialOffset();
//     return () => {
//       window.removeEventListener("resize", calculateInitialOffset);
//     };
//   }, []);




//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY; //pixel donde se encuentra la pagina
//       console.log("scrollY: ", scrollY);
//       const parallaxDiv = parallaxDivRef.current;
//       const parallaxImage = parallaxImageRef.current;

//       if (parallaxDiv && parallaxImage) {

//         // START
//         // translate3d(0px, ${parallaxDivOffset}px, 0px) = (0px,4000px,0px)
//         // translate3d(0px, ${parallaxDivOffset}px, 0px) = (0px,-2000px,0px)



//         const containerHeight = parallaxDiv.offsetHeight; // Altura del contenedor (320px)
//         const imageHeight = parallaxImage.offsetHeight; // Altura de la imagen (1122px)
//         const maxScroll = imageHeight - containerHeight; // Máximo desplazamiento permitido

//         const parallaxDivQuery = document.querySelector(".parallax-div");
//         const parallaxImageQuery = document.querySelector(".parallax-image");

//         const initialOffsetDiv =
//         parallaxDivQuery.getBoundingClientRect().top + window.scrollY; // Distancia desde el top
//         console.log("initialOffsetDiv :", initialOffsetDiv);

//         const initialOffsetImage =
//           -parallaxImageQuery.getBoundingClientRect().top - window.scrollY; // Distancia desde el top
//         console.log("initialOffsetImage :", initialOffsetImage);

//         // Evitar que el desplazamiento exceda el rango
//         const parallaxDivOffset = Math.min(
//           Math.max(initialOffsetDiv - scrollY * 1, -maxScroll),
//           -containerHeight //-552
//         ); // Rango para el contenedor
//         const imageOffset = Math.min(
//           Math.max(initialOffsetImage + 300 + scrollY * 0.8, maxScroll),
//           initialOffsetImage
//         ); // Rango para la imagen
//         console.log("PARALLAXOFFSET : ", parallaxDivOffset);
//         console.log("imageOffset: ", imageOffset);



//         // Aplicar los valores de desplazamiento
//         parallaxDiv.style.transform = `translate3d(0px, ${parallaxDivOffset}px, 0px)`;
//         parallaxImage.style.transform = `translate3d(-45px, ${imageOffset}px, 0px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="parallax-div-div mx-auto w-full border-black border-4">
//       <div ref={parallaxDivRef} className="parallax-div mx-auto">
//         <img
//           ref={parallaxImageRef}
//           src="/banner/parallax-image-2.jpg"
//           alt="Parallax"
//           className="parallax-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default ParallaxBanner3;

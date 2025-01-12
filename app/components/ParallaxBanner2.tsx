"use client";
import React from "react";

interface ParallaxBannerProps {
  height: string | number; // Altura del contenedor (por ejemplo, 600px)
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ height }) => {
  return (
    <div className="parallax" style={{ height: typeof height === "number" ? `${height}rem` : height }}>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "20px", // Ajusta el padding del contenido
        }}
      >
        <h1 className="text-white text-4xl">Hello World</h1>
        <p className="text-white mt-2">
          This is a parallax effect with a fixed background image.
        </p>
      </div>
    </div>
  );
};

export default ParallaxBanner;




// "use client";
// import React, { useEffect, useState } from "react";

// interface ParallaxBannerProps {
//   imageUrl: string;
//   height: string | number;
// }

// const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ imageUrl, height }) => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isSafari, setIsSafari] = useState(false);

//   useEffect(() => {
//     // Detectar si es Safari iOS
//     const isIOSSafari = 
//       /iPad|iPhone|iPod/.test(navigator.userAgent) &&
//       /Safari/i.test(navigator.userAgent) &&
//       !(/Chrome/i.test(navigator.userAgent));
//     setIsSafari(isIOSSafari);

//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "relative",
//         height: typeof height === "number" ? `${height}rem` : height,
//         overflow: "hidden",
//       }}
//     >
//       {/* Fondo con imagen fija */}
//       <div
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1,
//           ...(isSafari
//             ? {
//                 transform: `translateY(${scrollPosition * 0.5}px)`,
//                 transition: "transform 0.1s linear",
//               }
//             : {
//                 backgroundAttachment: "fixed",
//               }),
//         }}
//       ></div>

//       {/* Contenido del contenedor */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//       </div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-anna-white">
//         <img
//           src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
//           alt="White Logo"
//           className="h-auto w-40 mx-auto px-3 animate-fade-title"
//         />
//         <p className="font-cabin text-3xl">Bereit für die Veränderung?</p>
//       </div>
//     </div>
//   );
// };

// export default ParallaxBanner;
"use client";
import React, { useEffect, useState } from "react";

interface ParallaxBannerProps {
  imageUrl?: string;
  height: string | number;
}

const ParallaxBanner: React.FC<ParallaxBannerProps> = ({
  imageUrl='/banner/parallax-image-2.jpg',
  height,
}) => {
  const [isIOSSafari, setIsIOSSafari] = useState(false);

  useEffect(() => {
    // Detecta específicamente Safari en iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsIOSSafari(isIOS && isSafari);
  }, []);

  return (
    <div>
      {isIOSSafari ? (
        <div className="h-[27rem] relative overflow-hidden">
          <div
            style={{
              position: 'absolute',
              top: '-50vh',
              left: 0,
              right: 0,
              height: '200vh', // Extra altura para asegurar cobertura
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // Uso de perspective para mejorar el efecto 3D
              transform: 'translateZ(0)',
              WebkitOverflowScrolling: 'touch', // Mejora el scroll en iOS
              zIndex: -1,
            }}
          />
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none', // Permite scroll a través
              zIndex: -1,
            }}
            className="ios-parallax-container"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-anna-white z-10">
            <img
              src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
              alt="White Logo"
              className="h-auto w-40 mx-auto px-3 animate-fade-title"
            />
            <p className="font-cabin text-3xl">Bereit für die Veränderung?</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            height: typeof height === "number" ? `${height}rem` : height,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-anna-white">
            <img
              src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
              alt="White Logo"
              className="h-auto w-40 mx-auto px-3 animate-fade-title"
            />
            <p className="font-cabin text-3xl">Bereit für die Veränderung?</p>
          </div>
        </div>
      )}
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

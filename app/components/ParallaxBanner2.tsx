"use client";
import React, { useEffect, useState } from "react";

interface ParallaxBannerProps {
  imageUrl?: string;
  height: string | number;
}

const ParallaxBanner4: React.FC<ParallaxBannerProps> = ({
  imageUrl = '/banner/parallax-image-2.jpg',
  height,
}) => {
  const [isSafari, setSafari] = useState(false);

  useEffect(() => {
    // Detecta cualquier versión de Safari
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setSafari(isSafariBrowser);
  }, []);

  if (isSafari) {
    return (
      <div className="relative h-[27rem] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            transform: 'translate3d(0,0,0)',
            willChange: 'transform'
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
    );
  }

  return (
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
  );
};

export default ParallaxBanner4;

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

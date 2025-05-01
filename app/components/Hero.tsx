"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CarouselContainer from "./carousel/CarouselContainer";
import Subtitle from "./customTags/Subtitle";
import { useLanguageStore } from "../store/useLanguageStore";

const Hero = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const { lang } = useLanguageStore();

  const heroTexts = {
    de: {
      text: "Starte dein Unternehmen mit dem perfekten Businessplan",
      button: "KONTAKT",
    },
    en: {
      text: "Start your business with the perfect business plan",
      button: "CONTACT",
    },
  };

  const t = heroTexts[lang]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    // Detectar en el montaje del componente
    if (typeof window !== "undefined") {
      handleResize(); // Detectar al cargar
    }

    window.addEventListener("resize", handleResize); // Detectar cambios
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return null; // No renderizar nada mientras no esté determinado el tamaño de la pantalla
  }

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
            <Subtitle text={t.text} />
            <Link href="/kontakt">
              <div className="w-full flex justify-center animate-fade-subtitle pt-8">
                <button className="text-white mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition">
                {t.button}
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

// "use client";

// import Link from "next/link";
// import CarouselContainer from "./carousel/CarouselContainer";
// import Subtitle from "./customTags/Subtitle";

// const Hero = () => {
//   return (
//     <div>
//       <div className="h-screen relative shadow-anna-blue shadow-[0px_1px_7px_0px]">
//         <div className="h-full w-full relative">
//           <div className="absolute w-full h-full"></div>
//           {/* <img
//             src="/video/hero-foto-desktop.png"
//             alt="Full-width GIF"
//             className="hidden md:block w-screen h-screen object-cover"
//           />
//           <img
//             src="/video/hero-foto-mobile.png"
//             alt="Full-width GIF"
//             className="md:hidden w-screen h-screen object-cover"
//           /> */}
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline // 👈 Necesario para iOS/móviles
//             preload="metadata"
//             disableRemotePlayback
//             className="absolute inset-0 h-full w-full object-cover"
//           >
//             <source
//               src="/video/hero-video-desktop.mp4"
//               type="video/mp4"
//               className="hidden md:block"
//             />
//             <source
//               src="/video/hero-video-mobile.mp4"
//               type="video/mp4"
//               className="md:hidden block"
//             />
//           </video>
//           <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ">
//             <img
//               src="/logo/logo-no-bg/logo-white-no-bg.webp"
//               fetchPriority="high"
//               loading="eager"
//               alt="White Logo"
//               className="h-full w-96  mx-auto px-3 animate-fade-title"
//             />
//             <Subtitle text="Starte dein Unternehmen mit dem perfekten Businessplan" />
//             <Link href="/kontakt" className="">
//             <div className="w-full flex justify-center animate-fade-subtitle pt-8">
//               <button className="text-white mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition">
//                 KONTAKT
//               </button>
//             </div>
//             </Link>
//             {/* <img
//             src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png "
//             alt="Cafe Logo"
//             className="mx-auto mt-4 animate-fade-subtitle"
//             /> */}
//           </div>
//         </div>

//         {/* <div className="hidden lg:block h-screen" id="home">
//         <div
//         className="relative flex h-full w-full justify-center bg-fixed bg-cover bg-center bg-no-repeat safari-fix"
//         style={{ backgroundImage: "url('/assets/home-cafe-2.jpg')" }}
//         >
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
//         <img
//         src="/assets/logo/logo-no-bg/logo-white-no-bg.png"
//         alt=""
//         className=" h-full w-fit mx-auto px-3 "
//         />
//         <img
//         src="/assets/logo/logo-no-bg/logo-cafe-bistre-no-bg.png"
//         alt=""
//         className=" mx-auto mt-4  "
//         />
//         </div>
//         </div>
//         </div> */}
//       </div>
//       <CarouselContainer />
//     </div>
//   );
// };
// export default Hero;

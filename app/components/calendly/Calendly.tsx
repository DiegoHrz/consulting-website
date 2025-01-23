"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import LockSvg from "../svg/LockSvg";

const CalendlyIframe = dynamic(() => import("./CalendlyIframe"), {
  ssr: false,
});

interface CalendlyProps {
  accepted: boolean;
}

const Calendly: React.FC<CalendlyProps> = ({ accepted }) => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [animationSvg, setAnimationSvg] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("calendlyConsent");
    console.log("consent: ", consent);
    console.log("LocalStorage: ", localStorage);
    if (consent === "accepted") {
      setConsentGiven(true);
    }
  }, []);

  useEffect(() => {
    if (accepted) {
      localStorage.setItem("calendlyConsent", "accepted");
      setAnimationSvg(true);
      setTimeout(() => {
        setConsentGiven(!consentGiven);
      }, 2000);
    }
  }, [accepted]);



  return (
    <div className="w-full h-[600px] relative ">
      {consentGiven ? (
        <div className="  w-fit">
          <CalendlyIframe />
        </div>
      ) : (
        <div className="">
          <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  h-full w-full inset-0 p-8 lg:p-20">
            <img src="/calendly-preview.png" alt="" className="w-full h-full blur-sm object-cover " />
            <LockSvg isChecked={animationSvg} />
          </div>
          {/* <button
            onClick={handleConsent}
            className="border bg-blue-600 rounded-lg p-4 mt-10 text-white"
          >
            aceptas que soy tu papi y los terminos y condiciones?
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Calendly;

// useEffect(() => {
//     const consent = localStorage.getItem('calendlyConsent');
//     if (consent === 'accepted') {
//       setConsentGiven(true);
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem('calendlyConsent', 'accepted');
//     setConsentGiven(true);
//   };

//   return (
//     <div>
//       {!consentGiven ? (
//         <div className="consent-banner">
//           <p>Para utilizar el calendario de reuniones, acepta los términos y condiciones de Calendly.</p>
//           <button onClick={handleAccept}>Aceptar</button>
//         </div>
//       ) : (
//         <CalendlyIframe />
//       )}
//     </div>
//   );

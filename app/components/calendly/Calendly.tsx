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
  }, [accepted, consentGiven]);

  return (
    <div className="w-full h-[500px] relative">
      {consentGiven ? (
        <div className="w-full pt-6 sm:pt-0 sm:mx-auto">
          <CalendlyIframe />
        </div>
      ) : (
        <div>
          <div className="w-full pt-6 sm:pt-0 sm:mx-auto">
            <img
              src="/calendly.png"
              alt=""
              className="w-full h-full blur-sm object-cover"
            />
            <LockSvg isChecked={animationSvg} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendly;
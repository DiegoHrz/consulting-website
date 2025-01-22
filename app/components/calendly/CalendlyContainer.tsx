"use client";
import React, { useEffect, useState } from "react";
import Calendly from "./Calendly";
import Wrapper from "@/app/hoc/Wrapper";

import { MdOutlineLocationOn, MdOutlineWatchLater } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const CalendlyContainer = () => {
  const [accepted, setAccepted] = useState(false);
  const [acceptedLocalStorage, setAcceptedLocalStorage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [checkboxInput, setCheckboxInput] = useState(false);
  const [highlightCheckbox, setHighlightCheckbox] = useState(false);

  const handleAccept = () => {
    if (!checkboxInput) {
      setHighlightCheckbox(true);
      return;
    }
    setHighlightCheckbox(false);
    setAccepted(true);
    setAcceptedLocalStorage(true); // Añadir esta línea
    localStorage.setItem("calendlyConsent", "accepted"); 
  };

  useEffect(() => {
    const consent = localStorage.getItem("calendlyConsent");
    if (consent) {
      setAcceptedLocalStorage(true);
    }
    setIsLoading(false);
  }, []);

  const HandleCheckbox = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setCheckboxInput(e.target.checked)
    setHighlightCheckbox(false)
  }


  if (isLoading) {
    return (
      <>
        <div className=" bg-[#505960] w-full rounded-t-xl shadow-gray-400 shadow-[0px_0px_15px]">
          <p className="py-2 px-4  text-anna-white">
            To book a meeting first{" "}
            <b>you need to accept the terms and conditions of Calendly</b>
          </p>
        </div>
        <div className="border-b border-x  flex rounded-b-xl justify-between overflow-hidden shadow-gray-400 shadow-[0px_0px_15px] h-[600px]"></div>
      </>
    );
  }

  return (
    <>
      <div className=" bg-[#505960] w-full rounded-t-xl shadow-gray-400 shadow-[0px_0px_15px]">
        <p className="py-2 px-4  text-anna-white">
          To book a meeting first{" "}
          <b>you need to accept the terms and conditions of Calendly</b>
        </p>
      </div>
      <div className="border-b border-x  flex rounded-b-xl  overflow-hidden shadow-gray-400 shadow-[0px_0px_15px]">
        <div className="p-12 border-r border-4">
          <div className="rounded-full w-24 h-24 overflow-hidden bg-[#D3CFC7]">
            <img
              src="/founders/anna.avif"
              alt=""
              className="w-24 object-contain brightness-110"
            />
          </div>
          <div className="font-original_text font-semibold text-anna-black/70 mt-4 ">
            Anna S. Schenk
          </div>
          <div className="font-cabin font-semibold text-anna-black text-3xl mt-1">
            Sales Demo
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <div>
                <MdOutlineWatchLater size={23} />{" "}
              </div>
              <div className="font-original_text font-semibold text-anna-black/70 italic">
                30 min
              </div>
            </div>
            <div className="flex gap-2 ">
              <div>
                <MdOutlineLocationOn size={25} />
              </div>
              <div className="max-w-72 font-original_text font-semibold text-anna-black/70 italic">
                Web conferencing details provided upon confirmation
              </div>
            </div>
          </div>
          {!acceptedLocalStorage ? (
            <div className="mt-12">
              <div className="flex gap-3">
                <div
                  
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={checkboxInput}
                    onChange={(e) => HandleCheckbox(e)}
                    className={`${
                        highlightCheckbox ? "outline outline-2 outline-offset-2 outline-red-600" : ""
                      }`}
                  />
                </div>
                <p>
                  I agree with the term and conditions of{" "}
                  <a
                    href="https://calendly.com"
                    className="text-[#016BFF] hover:underline"
                  >
                    Calendly{" "}
                  </a>{" "}
                  <span className="text-lg text-red-600">*</span>
                </p>
              </div>
              <div>
                <button
                  className="border bg-blue-600 rounded-lg p-4 mt-4 text-white pulseCustom"
                  onClick={handleAccept}
                >
                  Book your Meeting
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-12 flex gap-3 items-center">
              <FaCheckCircle color="green" />
              <p>
                You&apos;ve agreed with the term and conditions of{" "}
                <a
                  href="https://calendly.com"
                  className="text-[#016BFF] underline"
                >
                  Calendly{" "}
                </a>{" "}
              </p>
            </div>
          )}
        </div>
        <div className="flex-1 w-full h-full">
          <Calendly accepted={accepted} />
        </div>
      </div>
    </>
  );
};

export default Wrapper(CalendlyContainer, "calendlyContainer");

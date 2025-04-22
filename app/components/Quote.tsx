"use client";
import React from "react";
import Wrapper from "../hoc/Wrapper";
import Title from "./customTags/Title";
import ButtonAnna from "./customTags/ButtonAnna";

const Quote = () => {
  return (
    <div
      className=" rounded-lg my-[80px]"
      style={{
        background:
          "radial-gradient(21% 42% at 50% 50%, rgba(27, 119, 150,0.2) 0%, rgba(56, 54, 61, 0) 100%)",
      }}
    >
      {/* <BlurBgImage/> */}
      <div className=" relative z-0 flex flex-col gap-16 max-w-[500px] mx-auto">
        <div className="relative z-0 flex flex-col gap-[24px]">
          <div className="reltive">
            <img
              src="/logo/logo_only_letter.png"
              alt=""
              className="w-32 sm:w-20 mx-auto z-[10] object-cover relative"
            />
            <img
              src="/logo/logo_only_name.png"
              alt=""
              className="w-32 sm:w-52 mx-auto z-[10] object-cover relative"
            />
          </div>
          <Title
            text="Bereit für deinen nächsten großen Schritt?
"
            additionalClasses="text-center"
            rainbow={true}
          />
          <p className="text-center max-w-[450px] mx-auto text-lg text-balance">
            Buche dir jetzt ein kostenloses Gespräch und finde heraus, wie wir
            dich unterstützen können.
          </p>
          <div>
            <div className="w-fit  animate-fade-subtitle  overflow-hidden rounded-3xl mx-auto">
              {/* <Link href="/" className="">
                <button
                  className="relative rounded-3xl   text-anna-white font-medium font-cabin px-[21px] py-[9px]  overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    boxShadow:
                      "rgba(255, 255, 255, 0.05) 0px 1px 10px 0px inset",
                  }}
                >
                  <p className="text-white relative z-10">Buchung</p>{" "}

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 transition-all duration-700 
                    hover:-bottom-1 -bottom-8 h-12 w-32 aspect-square `}
                    style={{
                      backgroundColor: "#00FFFF",
                      filter: "blur(10px)",
                      borderRadius: "100px",
                      opacity: 0.3,
                    }}
                  ></div>
                </button>
              </Link> */}
              <ButtonAnna text="Buchung" />
            </div>
            {/* <p className="w-fit mx-auto mt-1 font-vollkornSC">
              it&apos;s{" "}
              <span className="text-anna-black font-medium">free</span>
            </p> */}
          </div>
        </div>
      </div>
      {/* 
      <div className="w-full flex justify-center animate-fade-subtitle ">
        <button className="bg-anna-brown rounded-lg text-white mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-white hover:bg-anna-blue duration-700 transition border-anna-white ">
          Know us
        </button>
      </div> */}
    </div>
  );
};

export default Wrapper(Quote, "quote");

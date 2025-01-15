import React from "react";
import ParallaxImage from "./ParallaxImage";

const ParallaxBanner = () => {
  return (
    <section className="relative w-screen h-[30vh] sm:h-[60vh]  overflow-hidden flex justify-center items-center">
      <div className=" absolute top-0 left-0 w-full h-full overflow-hidden">
        <ParallaxImage src="/banner/parallax-image-5.avif" alt="" />
      </div>
      {/* <div className=" relative text-center">
        <p>Be the</p>
        <h1
          className="uppercase text-[#dbccc0] text-7xl"
          style={{
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          First to know
        </h1>
        <p className="w-[75%] text-[#DACDC0] " style={{ margin: "1em auto" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis,
          ab repellendus quisquam{" "}
        </p>
        <button
          style={{
            border: "none",
            outline: "none",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 600,
            margin: "0.25em 0",
            padding: "0.3em 0.75em 0.25em 0.75em",
            color: "#0f0f0f",
            backgroundColor: "#dbccc0",
            borderRadius: "2em",
          }}
        >
          Join the newsletter
        </button>
      </div> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-anna-white w-full">
        <img
          src="/logo/logo-no-bg/logo-white-no-bg.png"
          alt="White Logo"
          className="h-auto w-40  mx-auto px-3 animate-fade-title"
        />
        <p className="w-full font-cabin text-center text-xl sm:text-3xl">
        Bereit für die Veränderung ?
        </p>
      </div>
    </section>
  );
};

export default ParallaxBanner;

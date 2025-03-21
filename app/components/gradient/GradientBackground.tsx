import React from "react";


const GradientBackground = () => {
  return (
    <div
      className="absolute inset-0 text-[#1c4654] -z-10"
      style={{
        background:
          "linear-gradient(to bottom, #163641 1%,#163641 20%,#1c4654 30%,#3a6f81 45%, #5b828f 55% ,#909da1 75% , white 100%)",
      }}
    >
      {/* Grid overlay */}
      {/* <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgb(226 232 240 / 0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(226 232 240 / 0.025) 1px, transparent 1px)
            `,
          backgroundSize: "10rem 10rem",
        }}
      /> */}

      {/* Blur spots */}
      {/* <div className="absolute top-20 left-[20%] w-72 h-72 bg-white/30 rounded-full blur-3xl" /> */}
      <div className="absolute top-[28rem] -left-[2%] w-[40rem] h-[28rem] bg-white/50 rounded-full blur-3xl" />
      <div className="absolute top-64 -right-[20%] w-[45rem] h-[30rem] bg-white/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-[0%] w-[40rem] h-[40rem] bg-white/50 rounded-full blur-3xl" />
      <div className="absolute bottom-1 left-[30%] w-80 h-80 bg-white/55 rounded-full blur-3xl" />

      {/* Additional smaller blur spots */}
      {/* <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-white/20 rounded-full blur-2xl" /> */}
      <div className="absolute bottom-[0%] right-1/3 w-80 h-72 bg-white/55  blur-3xl" />
    </div>
  );
};

export default GradientBackground;

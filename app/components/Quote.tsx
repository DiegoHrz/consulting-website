'use client'
import React from "react";
import Wrapper from "../hoc/Wrapper";

const Quote = () => {
  return (

      <div className=" pt-10 rounded-lg ">
        <div className="max-w-2xl mx-auto pb-10">
          <p className="text-center  font-vollkorn font-medium text-lg sm:text-xl">
            Our name is inspired by the Japanese concept of mono no aware – the
            profound appreciation of the beauty in fleeting moments.
          </p>
        </div>
        <div className="w-full flex justify-center animate-fade-subtitle ">
          <button className="bg-anna-brown rounded-lg text-white mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-white hover:bg-anna-blue duration-700 transition border-anna-white ">
            LEARN MORE
          </button>
        </div>

    </div>
  );
};

export default Wrapper(Quote, "quote");
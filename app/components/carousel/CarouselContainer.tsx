"use client";
import React from "react";
import Carousel from "./Carousel";
import { useLanguageStore } from "@/app/store/useLanguageStore";

const CarouselContainer = () => {
  const { lang } = useLanguageStore();
  return (
    <div className=" w-full  h-24 rounded-lg my-12 md:my-14 lg:mt-28">
      <div className="w-full sm:px-16 px-8">
        <p
          className="text-center mx-auto w-fit text-xl mb-6 text-transparent  font-medium"
          style={{
            background: "linear-gradient(to right,#581D1D,#0000008F)",
            backgroundClip: "text",
          }}
        >
          {" "}
          {lang === "de"
            ? "Mehr als 100 Unternehmen vertrauen bereits auf unsere Expertise"
            : "More than 100 companies already trust in our expertise"}
        </p>
        <Carousel />
      </div>
    </div>
  );
};

export default CarouselContainer;

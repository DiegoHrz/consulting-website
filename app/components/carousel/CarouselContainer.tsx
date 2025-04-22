import React from "react";
import Carousel from "./Carousel";

const CarouselContainer = () => {
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
          Mehr als 100 Unternehmen vertrauen bereits auf unsere Expertise
        </p>
        <Carousel />
      </div>
    </div>
  );
};

export default CarouselContainer;

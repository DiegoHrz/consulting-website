'use client'
import Title from "./customTags/Title";
import { CarouselDemo } from "./CarouselDemo";
import Wrapper from "../hoc/Wrapper";

const Reviews = () => {
  return (
    <div className="border rounded-lg shadow-gray-300 shadow-[0px_0px_15px] py-6" >
      <Title text="Reviews" additionalClasses="text-center" />
      <p className="font-vollkorn text-center pb-8" > What our customers say about us</p>
      <CarouselDemo />
    </div>
  );
};

export default Wrapper(Reviews, "reviews");

"use client";
import Title from "./customTags/Title";
import { CarouselDemo } from "./CarouselDemo";
import Wrapper from "../hoc/Wrapper";

interface ReviewsProps{
  lang:string,
}

const Reviews:React.FC<ReviewsProps> = ({lang}) => {
  return (
    <div className=" rounded-lg  flex flex-col gap-16">
      <div className="flex flex-col gap-[24px]">
        <Title
          text={lang === 'de'?'Was unsere Kunden berichten':"What our customers say"}
          additionalClasses="text-center"
          additionalTitle={lang === 'de'?'referenzen':"references"}
        />
      </div>
      {/* <p className="font-vollkornSC text-center text-xl pb-6" > reviews</p> */}
      {/* <h1 className="tracking-tight text-2xl sm:text-[54px] text-center font-semibold max-w-[950px] mx-auto pb-6 sm:pb-20">
        What our users say
      </h1> */}

      <CarouselDemo />
    </div>
  );
};

export default Wrapper(Reviews, "reviews");

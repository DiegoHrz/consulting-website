"use client";

import { GoShieldCheck } from "react-icons/go";
import { SlCalender, SlUserFollowing } from "react-icons/sl";

import Title from "./customTags/Title";

const BusinessPlans = () => {
  return (
    <div className="px-10 sm:px-16  sm:max-w-7xl mx-auto relative pt-10 ">
      <div className="mb-12 sm:mb-[3.8rem] lg:mb-20">
        <div className="w-28 aspect-square rounded-full mx-auto relative overflow-hidden ">
          <img
            src="/logo/logo_only_letter.png"
            alt=""
            className="w-24 sm:w-28 mx-auto z-[10] object-cover relative"
          />
          <div className="absolute bg-[linear-gradient(180deg,_#125369_0%,_#f7f7f7_25%,_#fff_80%)] blur-sm inset-0 z-[0]"></div>
        </div>
        <Title
          text="Verlässlichkeit, Erfahrung und echtes Engagement – wir begleiten dich auf deinem Weg"
          title={false}
        />

      </div>
      <div className="text-black flex flex-col md:flex-row w-full justify-between gap-8  md:gap-2 lg:gap-10 max-w-96 sm:max-w-max mx-auto  ">
        <div className="flex flex-col  items-center gap-3 p-6 md:p-4  flex-1  border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_4px_2px_0px] min-h-56 lg:min-h-64 justify-center">
          <GoShieldCheck size={40} color="#581D1D" />
          <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">
          100% Erfolgsrate
          </h6>
          <p className="font-original_text text-base lg:text-lg text-anna-gray text-center max-w-80 py-2">
            Every one of our suitcases comes with a limited lifetime warranty.
          </p>
        </div>
        {/* <div className="w-[0.07rem] bg-black "></div> */}
        
        {/* shadow-gray-300 shadow-[0px_4px_2px_0px] */}
        <div className="flex flex-col  items-center gap-3 p-6 md:p-4  flex-1  border-[#D5E0E2] rounded-xl bg-white shadow-[#125369] shadow-[0px_3px_10px_0px] min-h-56 lg:min-h-64 justify-center">
          <SlCalender size={40} color="#581D1D" />
          <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">
            Free Consultation
          </h6>
          <p className="font-original_text text-base lg:text-lg text-center max-w-80 py-2">
            Try it out for 100 days. If you don’t love it, send it back. Learn
            more.
          </p>
        </div>
        {/* <div className="w-[0.07rem] bg-black "></div> */}
        <div className="flex flex-col  items-center gap-3 p-6 md:p-4  flex-1  border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_4px_2px_0px] min-h-56 lg:min-h-64 justify-center">
          <SlUserFollowing size={40} color="#581D1D" />
          <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">
            +50 clients satisfied
          </h6>
          <p className="font-original_text text-base lg:text-lg  text-center max-w-80 py-2 text-anna-gray ">
            We’ll cover shipping on all orders to the contiguous US and Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlans;

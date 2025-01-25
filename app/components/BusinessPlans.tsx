"use client";

import { GoShieldCheck } from "react-icons/go";
import { SlCalender, SlUserFollowing } from "react-icons/sl";
import Wrapper from "../hoc/Wrapper";

const BusinessPlans = () => {
  return (
    <div className="mt-28">
      <div className="mb-20">
        <div className="w-fit rounded-full mx-auto relative overflow-hidden mb-6">
          <img
            src="/logo/logo_only_letter.png"
            alt=""
            className="w-32 sm:w-28 mx-auto z-[10] object-cover relative"
          />
          <div className="absolute bg-[linear-gradient(180deg,_#D0D5DB_0%,_#f7f7f7_25%,_#fff_80%)] blur-md inset-0 z-[0]"></div>
        </div>

        <p className="font-original_title text-2xl sm:text-4xl text-center font-semibold max-w-[950px] mx-auto">
          Empowering authentic connections for a vibrant social experience.
        </p>
      </div>

      <div className="text-black flex flex-col md:flex-row w-full justify-between gap-8  md:gap-2 lg:gap-10">
        <div className="flex flex-col justify-start items-center gap-3 p-6 md:p-4  flex-1  border-[#D5E0E2] rounded-xl bg-white shadow-lg">
          <GoShieldCheck size={40} />
          <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">100% success rate</h6>
          <p className="font-original_text text-lg text-anna-blue text-center max-w-80">
            Every one of our suitcases comes with a limited lifetime warranty.
          </p>
        </div>
        {/* <div className="w-[0.07rem] bg-black "></div> */}
        <div className="flex flex-col justify-start items-center gap-3 p-6 sm:p-4 flex-1  border-[#D5E0E2] rounded-xl bg-white shadow-lg">
          <SlCalender size={40} />
          <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">Free Consultation</h6>
          <p className="font-original_text text-lg text-anna-blue text-center max-w-80">
            Try it out for 100 days. If you don’t love it, send it back. Learn
            more.
          </p>
        </div>
        {/* <div className="w-[0.07rem] bg-black "></div> */}
        <div className="flex flex-col justify-start items-center gap-3 p-6 sm:p-4 flex-1  border-[#D5E0E2] rounded-xl bg-white shadow-lg">
          <SlUserFollowing size={40} />
          <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">
            +50 clients satisfied
          </h6>
          <p className="font-original_text text-lg text-anna-blue text-center max-w-80">
            We’ll cover shipping on all orders to the contiguous US and Canada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wrapper(BusinessPlans, "business plans");

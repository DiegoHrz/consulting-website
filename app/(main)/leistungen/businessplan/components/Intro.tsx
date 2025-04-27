import ButtonAnna from "@/app/components/customTags/ButtonAnna";
import * as React from "react";
import { GoShieldCheck } from "react-icons/go";
import { SlCalender } from "react-icons/sl";



const Intro: React.FC = () => {
  return (
    <div>
      <div>
        <p className="border border-anna-gray-light  w-fit rounded-3xl px-[11px] py-[1px] text-anna-blue font-medium ">
          Our Mission
        </p>
        {/* <div>
          <div className="w-60 border ">
            <div className="h-40 w-40 aspect-square border rounded-xl overflow-hidden mx-auto">
              <img
                src="/about/hand.jpg"
                alt=""
                className="object-cover h-full"
              />
            </div>
            <h2>Secure your future</h2>
            <p>
              We believe financial growth begins with trust. That's why we
              prioritize world-class security to safeguard your assets
            </p>
            <button>See Details</button>
          </div>
        </div> */}
        <div className="text-black flex flex-col md:flex-row w-full justify-between gap-8  md:gap-2 lg:gap-10 max-w-96 sm:max-w-[55rem] mx-auto  ">
          <div className="flex flex-col   gap-3 p-6 md:p-4  flex-1  border-[#D5E0E2] rounded-xl bg-white  min-h-56 lg:min-h-64">
            {/* md:shadow-gray-300 md:shadow-[0px_4px_2px_0px] */}
            <GoShieldCheck size={80} color="#581D1D" className="mx-auto"  />
            <h6 className="font-cabin text-2xl md:text-xl lg:text-4xl text-left w-full mt-6">
              Secure Your Future
            </h6>
            <p className="font-original_text text-base lg:text-md text-anna-gray text-left  pb-2">
              We believe financial growth begins with trust. That is why we
              prioritize world-class security to safeguard your assets.
            </p>
            <ButtonAnna text="See details" />
          </div>
          <div className="flex flex-col  gap-3 p-6 md:p-4  flex-1  border-[#D5E0E2] rounded-xl bg-white  min-h-56 lg:min-h-64 ">
            {/* shadow-[#125369] shadow-[0px_3px_10px_0px] */}
            <SlCalender size={80} color="#581D1D" className="mx-auto" />
            <h6 className="font-cabin text-2xl md:text-xl lg:text-4xl mt-6">
              Empower with Speed{" "}
            </h6>
            <p className="font-original_text text-base lg:text-md max-w-80  pb-2">
              In a fast-paced world, we deliver instant solutions that adapt to
              your needs, helping you stay ahead.
            </p>
            <ButtonAnna text="See details" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;

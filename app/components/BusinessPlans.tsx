"use client";

import { FiUserCheck } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { MdFreeCancellation } from "react-icons/md";
import { SlCalender, SlUserFollowing } from "react-icons/sl";
import Wrapper from "../hoc/Wrapper";

const BusinessPlans = () => {
  return (
    <div className="text-black flex flex-col sm:flex-row w-full justify-between">
      <div className="flex flex-col justify-center items-center gap-3 p-4">
        <GoShieldCheck size={30} />
        <h6 className="font-cabin text-2xl " >100% success rate</h6>
        <p className="font-vollkorn text-lg text-anna-blue text-center" >Every one of our suitcases comes with a limited lifetime warranty.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-4">
        <SlCalender size={30}/>
        <h6 className="font-cabin text-2xl" >Free Consultation</h6>
        <p className="font-vollkorn text-lg text-anna-blue text-center">Try it out for 100 days. If you don’t love it, send it back. Learn more.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-4">
        <SlUserFollowing size={30}/>
        <h6 className="font-cabin text-2xl" >+50 clients satisfied</h6>
        <p className="font-vollkorn text-lg text-anna-blue text-center">We’ll cover shipping on all orders to the contiguous US and Canada.</p>
      </div>
    </div>
  );
};

export default Wrapper(BusinessPlans, 'business plans')

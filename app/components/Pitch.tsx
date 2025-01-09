"use client";

import Wrapper from "../hoc/Wrapper";
import Title from "./customTags/Title";

const Pitch = () => {
  return (
    <div className="flex w-full flex-col-reverse  md:justify-center  md:flex-row  overflow-visible md:mb-0 md:h-fit h-full gap-10 md:gap-0 ">
      <div className="md:w-1/2 ">
        <Title text="Jetzt Unternehmer werden" />
        <p className="sm:pr-20 font-vollkorn text-[#808080] pt-4">
          Möchten Sie ein Unternehmen aufbauen, führen oder erweitern, das
          erfolgreich ist? Träumen Sie davon, eine unverwechselbare Marke zu
          schaffen, die Ihre Vision widerspiegelt und Ihre Zielgruppe
          inspiriert? Die Experten von AS Vision Partners unterstützen Sie
          dabei, Ihr Einkommen, Ihre Reichweite und die Stärke Ihrer Marke zu
          maximieren. Sind Sie bereit, mit uns durchzustarten?
        </p>
        <div className="w-full  animate-fade-subtitle pt-8">
          <button className="font-cabin_sans rounded-lg text-anna-blue mx-auto w-fit border-2 px-10 py-4 font-semibold text-sm hover:text-anna-brown hover:bg-white duration-700 transition border-anna-blue">
            BUNCHUNG
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="/profile/profile.jpg" className=" rounded-lg shadow-gray-400 shadow-[0px_0px_15px]" />
      </div>
    </div>
  );
};

export default Wrapper(Pitch,'pitch')
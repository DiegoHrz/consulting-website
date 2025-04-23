"use client";

import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <div
      className="sm:mt-0 mt-4 pt-20 pb-[20px] bg-anna-blue text-white lg:text-[#d9d9d9] relative w-full  border-anna-black"
      style={{
        background:
          "linear-gradient(to bottom, white 0%, #F8F8F8 1%, #d0e8f3 1.5%, #8FB9D0 2%, #3C6D82 2.5%, #125369 3%, #125369 100%)"
      }}
    >
      <div className="text-black max-w-7xl mx-auto  sm:px-16 flex  flex-col sm:flex-row items-center sm:justify-between">
        <div className="text-black max-w-7xl  flex flex-col justify-center items-center sm:items-start">
          <img
            src="/logo/logo_horizontal.png"
            alt=""
            className="block aspect-auto h-16 invert"
          />
          {/* <img
            src="/logo/logo_only_letter.png"
            alt=""
            className="sm:hidden aspect-auto w-28"
          /> */}
          {/* <img
            src="/logo/logo_only_name.png"
            alt=""
            className="sm:hidden aspect-auto h-20 "
          /> */}
          <a
            href="https://wa.me/4916091471897?text=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center pt-7"
          >
            <FaWhatsapp
              size={28}
              className="text-anna-gray-light  transition-all duration-700 hover:scale-110  rounded-full hover:text-rilke-red p-1"
            />
            <p className="text-anna-gray-light"> +49 160 91471897</p>
          </a>
          <a
            href="tel:+4915679314176"
            // target="_blank"
            // rel="noopener noreferrer"
            className="flex items-center pb-3"
          >
            <MdPhone
              size={25}
              className="text-anna-gray-light  transition-all duration-700 hover:scale-110  rounded-full hover:text-rilke-red p-1"
            />
            <p className="text-anna-gray-light">+49 15679 314176</p>
          </a>

          <a
            href="mailto:info@as-vision-partners.com?subject=Kontaktinformationen&body=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
            className=" transition-all duration-700 rounded-xl  text-anna-gray-light flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMailOutline
              size={28}
              className="text-anna-gray-light  transition-all duration-700  hover:scale-110 rounded-full hover:text-rilke-red p-1"
            />
            <p className="text-anna-gray-light">info@as-vision-partners.com</p>
          </a>
        </div>
        <div className="text-[#464646] flex flex-col  gap-3 my-10 items-center sm:items-end">
          <p className="text-white">Vereinbare einen Termin</p>
          <a
            href="https://calendly.com/asvisionpartners/30min"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src="/banner/calendly.png"
              alt=""
              className="rounded-lg aspect-auto h-14 "
            />
          </a>
        </div>
      </div>

      {/* Desktop version */}
      <FooterDesktop />

      {/* Mobile version */}
      <FooterMobile />

      <div className="w-full text-center text-[14px] font-medium text-[#666666] pt-16">
        <div className="h-[0.1rem] w-full bg-[#DDDDDD] mb-4"></div>
        <div className="flex flex-col sm:flex-row justify-center items-center ">
          <p className="text-anna-white pr-3">
            © 2024 Alle Rechte vorbehalten{" "}
          </p>
          <p className="hidden sm:flex pr-3 text-white">|</p>
          <div className="flex">
            <Link
              href="/impresum"
              className="text-anna-gray-light hover:text-black transition-all duration-500 pr-3"
            >
              Impressum{" "}
            </Link>
            <span className="block sm:hidden pr-3">|</span>
            <Link
              href="/datenschutzerklarung"
              className="text-anna-gray-light hover:text-black transition-all duration-500 pr-3"
            >
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

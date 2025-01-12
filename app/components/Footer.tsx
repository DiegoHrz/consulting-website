"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import { MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-10 pb-[20px] bg-[#F8F8F8] text-white lg:text-[#d9d9d9] relative w-full">
      <div className="text-black max-w-7xl mx-auto  sm:px-16 pb-1 flex  flex-col sm:flex-row items-center sm:justify-between">
        <div className="text-black max-w-7xl  flex flex-col justify-center items-center sm:items-start">
          <img
            src="/logo/logo_horizontal.png"
            alt=""
            className="hidden sm:block aspect-auto h-16 "
          />
          <img
            src="/logo/logo_only_letter.png"
            alt=""
            className="sm:hidden aspect-auto w-32"
          />
          <img
            src="/logo/logo_only_name.png"
            alt=""
            className="sm:hidden aspect-auto h-24 w-full"
          />
          <a
            href="https://wa.me/4916091471897?text=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center pt-7"
          >
            <FaWhatsapp
              size={28}
              className="text-[#808080]  transition-all duration-700 hover:scale-110  rounded-full hover:text-rilke-red p-1"
            />
            <p className="text-[#808080]"> +49 160 91471897</p>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center pb-3"
          >
            <MdPhone
              size={25}
              className="text-[#808080]  transition-all duration-700 hover:scale-110  rounded-full hover:text-rilke-red p-1"
            />
            <p className="text-[#808080]">+49 15679 314176</p>
          </a>

          <a
            href="mailto:info@as-vision-partners.com?subject=Consulta&body=Halo"
            className=" transition-all duration-700 rounded-xl  text-[#808080] flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMailOutline
              size={28}
              className="text-[#808080]  transition-all duration-700  hover:scale-110 rounded-full hover:text-rilke-red p-1"
            />
            <p>info@as-vision-partners.com</p>
          </a>
        </div>
        <div className="text-[#464646] flex flex-col  gap-3 mt-10 sm:items-end">
          <p>Make an appointment</p>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src="/banner/calendly.png"
              alt=""
              className="rounded-lg aspect-auto h-14 w-fit"
            />
          </a>
        </div>
      </div>

      <div className="hidden md:flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start gap-10 md:gap-40 w-full max-w-7xl mx-auto  sm:px-14 pt-10">
        {/* Company */}
        <div className=" w-full flex flex-col gap-3">
          <p className="text-[#464646] text-xl">Company</p>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 ">
              Home
            </p>
          </Link>
          <Link href="/uber-uns">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              About us
            </p>
          </Link>
          <Link href="/leistungen">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Leinstugen
            </p>
          </Link>
          <Link href="/referenzen">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Referenzen
            </p>
          </Link>
          <Link href="/faq">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              FAQ
            </p>
          </Link>
        </div>

        {/* Services */}
        <div className=" w-full flex flex-col gap-3">
          <p className="text-[#464646] text-xl">Services</p>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Gründungszuschuss
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Businessplan
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Business Consulting
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Finanzierung
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Buchhaltung
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Websites und Marketing
            </p>
          </Link>
        </div>
        {/* Contact */}
        <div className=" w-full flex flex-col gap-3">
          <p className="text-[#464646] text-xl">Contact</p>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Mail
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Calendly
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Whatsapp
            </p>
          </Link>
        </div>
        {/* Socials */}
        <div className=" w-full flex flex-col gap-3">
          <p className="text-[#464646] text-xl">Socials</p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center "
          >
            <FaInstagram
              size={18}
              className="text-[#808080]  transition-all duration-700  mr-1 "
            />
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Instagram
            </p>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaFacebookF
              size={16}
              className="text-[#808080]  transition-all duration-700 mr-1 "
            />
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500">
              Facebook
            </p>
          </a>
        </div>
      </div>

      <div className="w-full text-center text-[14px] font-medium text-[#666666] pt-16">
        <div className="h-[0.1rem] w-full bg-[#DDDDDD] mb-4"></div>
        <div className="flex justify-center items-center gap-3">
          <p className="text-anna-brown">© 2024 Alle Rechte vorbehalten</p>
          <p>|</p>
          <Link
            href="/impresum"
            className="text-[#808080] hover:text-black transition-all duration-500"
          >
            Impressum{" "}
          </Link>
          <p>|</p>
          <Link
            href="/datenschutzerklarung"
            className="text-[#808080] hover:text-black transition-all duration-500"
          >
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

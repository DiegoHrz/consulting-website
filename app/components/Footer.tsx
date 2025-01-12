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
            className="sm:hidden aspect-auto w-28"
          />
          <img
            src="/logo/logo_only_name.png"
            alt=""
            className="sm:hidden aspect-auto h-20 w-full"
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

      {/* Desktop version */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto sm:px-16 pt-10">
        {/* Company */}
        <div className="flex flex-col gap-3">
          <p className="text-[#070908] text-xl">Company</p>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Home
            </p>
          </Link>
          <Link href="/uber-uns">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              About us
            </p>
          </Link>
          <Link href="/leistungen">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Leinstugen
            </p>
          </Link>
          <Link href="/referenzen">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Referenzen
            </p>
          </Link>
          <Link href="/faq">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              FAQ
            </p>
          </Link>
        </div>

        {/* espacio x */}
        <div className="flex-1"></div>

        {/* Services */}

        <div className="flex flex-col gap-3">
          <p className="text-[#070908] text-xl">Services</p>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Gründungszuschuss
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Businessplan
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Business Consulting
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Finanzierung
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Buchhaltung
            </p>
          </Link>
          <Link href="/">
            <div className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm relative">
              Websites und Marketing
              <div className="top-1/2 -translate-y-1/2 -right-[48%] text-[0.6rem] bg-gradient-to-r from-red-600 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-blue-300 to-blue-600 rounded-xl px-[10px] h-fit absolute text-white">
                Very Soon
              </div>
            </div>
          </Link>
        </div>

        {/* espacio x */}
        <div className="flex-1 "></div>

        {/* Contact */}

        <div className=" flex flex-col gap-3">
          <p className="text-[#070908] text-xl">Contact</p>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Mail
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Calendly
            </p>
          </Link>
          <Link href="/">
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Whatsapp
            </p>
          </Link>
        </div>

        {/* espacio x */}
        <div className="flex-1"></div>

        {/* Socials */}
        <div className="  flex flex-col gap-3 ">
          <p className="text-[#070908] text-xl  ">Socials</p>

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
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
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
            <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
              Facebook
            </p>
          </a>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden flex flex-col gap-10  w-full max-w-7xl mx-auto sm:px-16 pt-10 px-10">
        <div className="flex gap-4">
          {/* Company */}
          <div className="flex flex-col gap-3 w-full">
            <p className="text-[#070908] text-xl">Company</p>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Home
              </p>
            </Link>
            <Link href="/uber-uns">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                About us
              </p>
            </Link>
            <Link href="/leistungen">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Leinstugen
              </p>
            </Link>
            <Link href="/referenzen">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Referenzen
              </p>
            </Link>
            <Link href="/faq">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                FAQ
              </p>
            </Link>
          </div>

          {/* Services */}

          <div className="flex flex-col gap-3 w-full">
            <p className="text-[#070908] text-xl">Services</p>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Gründungszuschuss
              </p>
            </Link>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Businessplan
              </p>
            </Link>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Business Consulting
              </p>
            </Link>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Finanzierung
              </p>
            </Link>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Buchhaltung
              </p>
            </Link>
            <Link href="/">
              <div className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm relative  flex">
                <span className="relative ">
                  <p>Websites und</p>
                  <p>Marketing</p>
                  <div className="top-1/2 left-[100%] text-[0.6rem] bg-gradient-to-r from-red-600 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-blue-300 to-blue-600 rounded-xl px-2  absolute text-white whitespace-nowrap">
                    Soon
                  </div>
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex gap-3">
          {/* Contact */}
          <div className=" flex flex-col gap-3 w-full">
            <p className="text-[#070908] text-xl">Contact</p>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Mail
              </p>
            </Link>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Calendly
              </p>
            </Link>
            <Link href="/">
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Whatsapp
              </p>
            </Link>
          </div>

          {/* Socials */}
          <div className="  flex flex-col gap-3 w-full">
            <p className="text-[#070908] text-xl  ">Socials</p>

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
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
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
              <p className="text-anna-brown/70 hover:text-black transition-all duration-500 text-sm">
                Facebook
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-center text-[14px] font-medium text-[#666666] pt-16">
        <div className="h-[0.1rem] w-full bg-[#DDDDDD] mb-4"></div>
        <div className="flex flex-col sm:flex-row justify-center items-center ">
          <p className="text-anna-brown pr-3">
            © 2024 Alle Rechte vorbehalten{" "}
          </p>
          <p className="hidden sm:flex pr-3">|</p>
          <div className="flex">
            <Link
              href="/impresum"
              className="text-[#808080] hover:text-black transition-all duration-500 pr-3"
            >
              Impressum{" "}
            </Link>
            <span className="block sm:hidden pr-3">|</span>
            <Link
              href="/datenschutzerklarung"
              className="text-[#808080] hover:text-black transition-all duration-500 pr-3"
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

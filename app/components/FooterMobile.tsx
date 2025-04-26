import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { useFAQNavigation } from "../hooks/useFAQNavigation";

const FooterMobile: React.FC = () => {
  
  const { handleFAQClick } = useFAQNavigation();

  return (
    <div className="md:hidden justify-center flex flex-col gap-10  w-full max-w-7xl mx-auto sm:px-16 pt-10 px-10">
      <div className="flex w-full gap-4">
        {/* Company */}
        <div className="flex flex-col gap-3 w-1/2 ">
          <div className="flex flex-col text-left gap-3">
            <p className="text-white text-xl border-b border-gray-200 pb-1">
              Unternehmen
            </p>
            <Link href="/">
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Home
              </p>
            </Link>
            <Link href="/uber-uns">
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Über uns
              </p>
            </Link>
            {/* <Link href="/leistungen">
                <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                  
                </p>
              </Link> */}
            <Link href="/referenzen">
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Referenzen
              </p>
            </Link>
            <Link href="/" onClick={handleFAQClick}>
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                FAQ
              </p>
            </Link>
          </div>
        </div>

        {/* Services */}

        <div className="flex flex-col  w-1/2">
          <div className="flex flex-col text-left gap-3">
            <p className="text-white text-xl border-b border-gray-200 pb-1">
              Leistungen
            </p>
            <Link href="/leistungen/grundungszuschuss">
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Gründungszuschuss
              </p>
            </Link>
            <Link href="/leistungen/businessplan">
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Businessplan
              </p>
            </Link>
            <Link href="/leistungen/finanzierung">
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Finanzierung
              </p>
            </Link>
            <Link href="/leistungen/buchhaltung">
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Buchhaltung
              </p>
            </Link>
            <Link href="/leistungen/websites-marketing">
              <div className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm relative  flex">
                <span className="relative ">
                  <p className="text-anna-gray-light">Websites und</p>
                  <p className="text-anna-gray-light">Marketing</p>
                  {/* <div className="top-1/2 left-[110%] text-[0.6rem] bg-gradient-to-r from-red-600 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-blue-300 to-blue-600 rounded-xl px-2  absolute text-white whitespace-nowrap">
                    Soon
                  </div> */}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4">
        {/* Contact */}
        <div className=" flex flex-col gap-3 w-1/2">
          <div className="flex flex-col text-left gap-3">
            <p className="text-white text-xl border-b border-gray-200 pb-1">
            <Link href="/kontakt" className="">
              Kontakt
            </Link>
            </p>
            <a
              href="mailto:info@as-vision-partners.com?subject=Kontaktinformationen&body=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
              className=" transition-all duration-700 rounded-xl  text-anna-gray-light flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Mail
              </p>
            </a>

            <a
              href="https://calendly.com/asvisionpartners/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Calendly
              </p>
            </a>
            <a
              href="https://wa.me/4916091471897?text=Hallo,%20ich%20würde%20gerne%20mit%20Ihnen%20zusammenarbeiten%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
                Whatsapp
              </p>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className=" flex flex-col gap-3 w-1/2">
          <p className="text-white text-xl  border-b border-gray-200 pb-1">
            Social Media
          </p>

          <a
            href="https://www.linkedin.com/in/anna-schenk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center "
          >
            <FaLinkedin
              size={18}
              className="text-anna-gray-light  transition-all duration-700  mr-1 "
            />
            <p className="text-anna-gray-light hover:text-black transition-all duration-500 text-sm">
              Linkedin
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;

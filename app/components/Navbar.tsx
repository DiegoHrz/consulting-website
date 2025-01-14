"use client";
import Image from "next/image";
import logoWhite from "../../public/logo/logo-no-bg/logo-white-no-bg.png";
import logoBlack from "../../public/logo/logo-no-bg/logo-black-no-bg.png";

import { useEffect, useLayoutEffect, useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { useNavStore } from "../store/useNavStore";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    const headerOffset = 100; // Adjust this value based on your header height
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Über Uns", href: "/uber-uns" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "FAQ", href: "faq" },
  { name: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [enterMouse, setEnterMouse] = useState(false);
  const {
    currentSection,
    setSelectedTab,
    isLoading,
    setIsLoading,
    setCurrentSection,
  } = useNavStore();
  const [clickHamburgerMenu, setClickHamburgerMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [scrollPositionOnClick, setScrollPositionOnClick] = useState(0);

  useEffect(() => {
    setIsLoading(true); // Forzar un estado inicial para evitar desajustes en SSR
    setTimeout(() => setIsLoading(false), 100); // Simular la carga completa
  }, [setIsLoading]);

  const router = useRouter();
  const pathname = usePathname();

  const handleFAQClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    // If not on home page, navigate to home first
    if (pathname !== "/") {
      await router.push("/");
      // Wait for navigation to complete
      setTimeout(() => {
        smoothScroll("faq");
      }, 100);
    } else {
      smoothScroll("faq");
    }

    setSelectedTab("faq");
    setCurrentSection("faq");
  };

  const tabHandler = (tab: string, href: string, e?: React.MouseEvent) => {
    if (href === "faq" && e) {
      handleFAQClick(e);
      return;
    }
    const sectionId = tab.toLowerCase();
    setSelectedTab(sectionId);
    setCurrentSection(sectionId); // Add this line
    smoothScroll(sectionId);
  };

  const tabAndToggle = (tab: string, href:string) => {
    toggleMenu();
    tabHandler(tab,href);
  };

  useLayoutEffect(() => {
    // if (typeof window !== "undefined") {
    //   const value = localStorage.getItem("key"); // Esto asegura que solo se ejecute en el cliente.
    // }

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      if (clickHamburgerMenu && window.scrollY !== scrollPositionOnClick) {
        setTimeout(() => {
          setClickHamburgerMenu(false);
        }, 700);
        setMenuClass("animate-collapse-out");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [clickHamburgerMenu, scrollPositionOnClick]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const onEnterHandler = () => {
    setEnterMouse(true);
  };

  const onLeaveHandler = () => {
    setEnterMouse(false);
  };

  const toggleMenu = () => {
    if (clickHamburgerMenu) {
      setMenuClass("animate-collapse-out");
      setTimeout(() => {
        setClickHamburgerMenu(false);
      }, 500); // Duración de la animación de salida
    } else {
      setClickHamburgerMenu(true);
      setMenuClass("animate-collapse-in");
      setScrollPositionOnClick(window.scrollY);
    }
  };

  return (
    <>
      <nav className="hidden md:flex w-full items-center justify  md:container md:px-0 md:py-0 border ">
        <div className="fixed z-50 top-0 w-full">
          <div className="bg-transparent backdrop-blur-3xl text-anna-4 text-center  font-sans text-xs  font-light w-full">
            <div className="bg-anna-blue/40 h-full w-full p-1">
              <p>Wo eine Idee ist, ist auch ein Weg</p>
            </div>
          </div>
          <div
            className={`md:flex items-center justify-between  w-full md:py-2 md:px-10 lg:px-20 md lg:gap-4 md:gap-2 md:text-sm lg:text-base transition-colors duration-1000 ease-in-out ${
              enterMouse && "hover:bg-white "
            } ${
              scrolled
                ? "bg-white text-black shadow-border-b"
                : "text-white hover:text-black"
            }`}
            onMouseEnter={onEnterHandler}
            onMouseLeave={onLeaveHandler}
            style={{ transitionDuration: "800ms" }}
          >
            <Image
              src={scrolled || enterMouse ? logoBlack : logoWhite}
              alt="Logo"
              className={"w-8 h-8 md:h-16 md:w-16 aspect-square"}
            />

            <div className="hidden md:flex pl-[74px] md:gap-x-[2rem] lg:gap-x-[40px] ">
              {navLinks.map((item) => (
                <Link
                  className={`-tracking-tighter font-extralight hover:text-rilke-red ${
                    !isLoading && item.name.toLowerCase() === currentSection
                      ? "border-b-2 border-rilke-red text-rilke-red"
                      : ""
                  }`}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => item.href === 'faq' ? handleFAQClick(e) : tabHandler(item.name, item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <nav className="md:hidden w-full items-center justify-between mt-[-16px] md:container md:mx-0 md:px-0  py-2 relative z-50">
        <div className="fixed z-50 top-0 w-full">
          <div className="bg-[#32304c] text-center text-white font-sans text-xs p-1 font-light">
            Wo eine Idee ist, ist auch ein Weg
          </div>
          <div
            className={`flex items-center justify-between  z-10 top-0 w-full py-2 px-6 md:px-0 text-white ${
              (scrolled || clickHamburgerMenu) &&
              "bg-white text-black border-b-2 border-b-[#E0E0E0] border-opacity-80"
            }`}
          >
            <div>
              <Image
                src={scrolled || clickHamburgerMenu ? logoBlack : logoWhite}
                alt="Logo"
                className="w-24 h-15"
              />
            </div>

            <div className="flex gap-x-5 md:hidden">
              <IoIosMenu
                size={32}
                className={`md:hidden text-anna-brown ${
                  scrolled || clickHamburgerMenu
                    ? "text-black"
                    : "text-anna-gray"
                } `}
                onClick={toggleMenu}
              />
            </div>
            {clickHamburgerMenu && (
              <div
                className={`absolute top-[6.3rem] left-0 flex flex-col w-screen border gap-x-[56px] justify-center items-center bg-white text-black ${menuClass}`}
              >
                {navLinks.map((item) => (
                  <Link
                    className={`-tracking-tighter font-extralight hover:text-rilke-red py-[0.6rem] ${
                      !isLoading && item.href.slice(1) === currentSection
                        ? " text-anna-brown"
                        : ""
                    }`}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => item.href === 'faq' ? handleFAQClick(e) : tabAndToggle(item.name, item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

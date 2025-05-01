"use client";
import Image from "next/image";
import logoWhite from "../../public/logo/logo-no-bg/logo-white-no-bg.png";
import logoBlack from "../../public/logo/logo-no-bg/logo-black-no-bg.png";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { useLanguageStore } from "../store/useLanguageStore";
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

const leistungenSubLinks = [
  { name: "Gründungszuschuss", href: "/leistungen/grundungszuschuss" },
  { name: "Businessplan", href: "/leistungen/businessplan" },
  { name: "Finanzierung", href: "/leistungen/finanzierung" },
  { name: "Buchhaltung", href: "/leistungen/buchhaltung" },
  { name: "Websites & Marketing", href: "/leistungen/websites-marketing" },
];

const navLinks = [
  { name: "home", href: "/" },
  { name: "leistungen", href: "", hasSubmenu: true }, // Empty href
  { name: "über uns", href: "/uber-uns" },
  { name: "referenzen", href: "/referenzen" },
  { name: "faq", href: "", isAnId: true }, // Missing leading slash
  { name: "kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [enterMouse, setEnterMouse] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const {
    currentSection,
    setSelectedTab,
    isLoading,
    setIsLoading,
    setCurrentSection,
  } = useNavStore();
  const { lang, setLang } = useLanguageStore();
  const [clickHamburgerMenu, setClickHamburgerMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const [scrollPositionOnClick, setScrollPositionOnClick] = useState(0);

  const [isFAQVisible, setIsFAQVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpenLanguageMenu, setIsOpenLanguageMenu] = useState(false);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        clickHamburgerMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickHamburgerMenu]);

  const closeMenu = () => {
    setMenuClass("animate-collapse-out");
    setTimeout(() => {
      setClickHamburgerMenu(false);
      setOpenSubmenu(false);
    }, 300); // Coincide con la duración de la animación
    setIsOpenLanguageMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        clickHamburgerMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu(); // Función reutilizable
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clickHamburgerMenu]);

  useEffect(() => {
    const checkFAQVisibility = () => {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        const rect = faqSection.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) / 2;
        setIsFAQVisible(isVisible);
      }
    };

    window.addEventListener("scroll", checkFAQVisibility);
    return () => window.removeEventListener("scroll", checkFAQVisibility);
  }, []);

  //GUARDAR LA URL PRESENTE
  const [currentUrl, setCurrentUrl] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const currentUrl = pathname;
      if (currentUrl?.startsWith("/leistungen")) {
        setCurrentUrl("leistungen");

        return;
      }
      setCurrentUrl(currentUrl);
      console.log("currentUrl: ", currentUrl);
    }
  }, [pathname]);

  //AÑADIR LOS ESTILOS AL TEXTO EN EL NAV
  const getDynamicStyles = (
    currentUrl: string,
    itemHref: string,
    scrolled: boolean,
    name: string
  ) => {
    if (name === "faq" && isFAQVisible && currentUrl === "/") {
      if (scrolled || enterMenu) {
        return "border-b border-anna-burgundy text-anna-burgundy font-semibold";
      }
      return "border-b text-white font-semibold";
    }
    if (
      currentUrl === itemHref ||
      (currentUrl === "leistungen" && name === "leistungen")
    ) {
      if (scrolled || enterMenu) {
        return "border-b border-anna-burgundy text-anna-burgundy font-semibold";
      }
      return "border-b text-white font-semibold";
    } else {
      if (scrolled || enterMenu) return "text-black hover:text-anna-burgundy";
      return "text-white";
    }
  };

  const [enterMenu, setEnterMenu] = useState(false);
  const handleOpenMenu = () => {
    setEnterMenu(true);
  };
  const handleCloseMenu = () => {
    setEnterMenu(false);
  };

  useEffect(() => {
    setIsLoading(true); // Forzar un estado inicial para evitar desajustes en SSR
    setTimeout(() => setIsLoading(false), 100); // Simular la carga completa
    console.log("pathname: ", pathname);
  }, [setIsLoading, pathname]);

  const router = useRouter();

  const handleFAQClick = async (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    // If not on home page, navigate to home first
    if (pathname !== "/") {
      await router.push("/"); // Navigate to home without hash
      // Wait for navigation to complete
      setTimeout(() => {
        smoothScroll("faq");
      }, 100);
    } else {
      // If already on home page, just scroll
      smoothScroll("faq");
    }

    setSelectedTab("faq");
    setCurrentSection("faq");
  };

  const tabHandler = (tab: string, href: string, e?: React.MouseEvent) => {
    if (!href && tab.toLowerCase() === "faq" && e) {
      handleFAQClick(e);
      return;
    }
    const sectionId = tab.toLowerCase();
    setSelectedTab(sectionId);
    setCurrentSection(sectionId);
    smoothScroll(sectionId);
  };
  const tabAndToggle = (tab: string, href: string) => {
    toggleMenu();
    tabHandler(tab, href);
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
          setIsOpenLanguageMenu(false);
        }, 700);
        setMenuClass("animate-collapse-out");
      }
    };
    // console.log("Router: ", router);

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
      closeMenu();
    } else {
      setClickHamburgerMenu(true);
      setMenuClass("animate-collapse-in");
      setScrollPositionOnClick(window.scrollY);
    }
  };

  const toggleSubmenu = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <>
      <nav className="hidden md:flex w-full items-center justify  md:container md:px-0 md:py-0 border ">
        <div
          className="fixed z-50 top-0 w-full"
          onMouseEnter={handleOpenMenu}
          onMouseLeave={handleCloseMenu}
        >
          <div className="bg-transparent backdrop-blur-3xl text-anna-4 text-center   text-xs  font-light w-full">
            <div className="bg-anna-blue/40 h-full w-full p-1 text-anna-burgundy">
              <p className="text-white">Wo eine Idee ist, ist auch ein Weg</p>
            </div>
          </div>
          <div
            className={`md:flex items-center justify-between  w-full md:py-0 md:px-10 lg:px-20 md lg:gap-4 md:gap-2 md:text-sm lg:text-base   h-16 ${
              scrolled || enterMenu ? "bg-white " : ""
            } ${
              scrolled
                ? "bg-white text-black shadow-border-b"
                : "text-white hover:text-black"
            }`}
            onMouseEnter={onEnterHandler}
            onMouseLeave={onLeaveHandler}
            style={{ transitionDuration: "500ms" }}
          >
            <Image
              src={scrolled || enterMouse ? logoBlack : logoWhite}
              alt="Logo"
              className={"w-8 h-8 md:h-16 md:w-16 aspect-square "}
            />

            <div className="hidden md:flex pl-[74px] md:gap-x-[2rem] lg:gap-x-[40px] font-vollkornSC">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="relative "
                  onMouseEnter={() => item.hasSubmenu && setOpenSubmenu(true)}
                  onMouseLeave={() => item.hasSubmenu && setOpenSubmenu(false)}
                >
                  {item.name === "faq" ? (
                    <div
                      className={`flex items-center hover:text-anna-burgundy hover:font-semibold cursor-pointer h-16`}
                      onClick={handleFAQClick}
                    >
                      <span
                        className={getDynamicStyles(
                          currentUrl,
                          item.href,
                          scrolled,
                          item.name
                        )}
                      >
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <div
                        className={`flex items-center hover:text-anna-burgundy hover:font-semibold cursor-pointer h-16`}
                        onClick={() => {
                          if (item.hasSubmenu) {
                            toggleSubmenu();
                          } else {
                            tabHandler(item.name, item.href);
                          }
                        }}
                      >
                        <span
                          className={getDynamicStyles(
                            currentUrl,
                            item.href,
                            scrolled,
                            item.name
                          )}
                        >
                          {item.name}
                        </span>
                        {item.hasSubmenu && (
                          <IoIosArrowDown
                            className={`ml-1 transition-transform ${
                              openSubmenu ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                    </Link>
                  )}

                  {item.hasSubmenu && openSubmenu && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 mt-4 bg-[#F7F7F7] shadow-lg h-auto min-w-[200px] -z-10">
                      {leistungenSubLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={() => {
                            if (item.hasSubmenu) {
                              setOpenSubmenu(false); // Close the submenu
                            }
                            handleCloseMenu(); // Close the main menu
                          }}
                          className={`block px-4 py-2  text-sm hover:text-anna-burgundy hover:bg-gray-200/40 ${
                            subLink.href === pathname
                              ? "text-anna-burgundy font-semibold"
                              : "text-black"
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* flags */}
              <div className="relative group my-auto ">
                <div className="flex items-center  gap-2 cursor-pointer">
                  <div className="w-8 h-6 relative">
                    <img
                      src={
                        lang === "de" ? "/flags/germany.png" : "/flags/usa.avif"
                      }
                      alt="Deutsch"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <IoIosArrowDown className="text-xs" />
                </div>

                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-28 h-32 bg-white shadow-lg  hidden group-hover:block z-50">
                  <button
                    className="w-full hover:bg-gray-200 duration-500 p-2  h-1/2 flex justify-center items-center"
                    onClick={() => {
                      setLang("en");
                    }}
                  >
                    <div className="flex items-center   w-8 h-6 text-sm">
                      <img
                        src="/flags/usa.avif"
                        alt="English"
                        className="object-contain h-full w-full"
                      />
                    </div>
                  </button>

                  <button
                    className="w-full hover:bg-gray-200 duration-500 p-2 h-1/2 flex justify-center items-center"
                    onClick={() => {
                      setLang("de");
                    }}
                  >
                    <div className="flex items-center   w-8 h-6 text-sm">
                      <img
                        src="/flags/germany.png"
                        alt="English"
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="md:hidden w-full items-center justify-between mt-[-16px] md:container md:mx-0 md:px-0 py-2 relative z-50">
        <div className="fixed z-50 top-0 w-full">
          {/* Barra superior con logo y botón */}
          <div className="bg-transparent backdrop-blur-3xl text-anna-4 text-center text-xs font-light w-full">
            <div className="bg-anna-blue/40 h-full w-full p-1 text-anna-burgundy">
              <p className="text-white">Wo eine Idee ist, ist auch ein Weg</p>
            </div>
          </div>

          <div
            className={`flex items-center justify-between z-10 top-0 w-full py-2 px-6 text-white ${
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
                className={`text-anna-burgundy ${
                  scrolled || clickHamburgerMenu
                    ? "text-black"
                    : "text-anna-gray"
                }`}
                onClick={toggleMenu}
              />
            </div>
          </div>

          {/* Menú desplegable y overlay */}
          {clickHamburgerMenu && (
            <>
              {/* Overlay semitransparente */}
              {/* <div 
          className="fixed inset-0 bg-black/30 z-50"
          onClick={closeMenu}
        /> */}

              {/* Contenedor del menú */}
              <div
                ref={menuRef}
                className={`fixed top-[6.3rem] left-0 flex flex-col w-screen bg-white text-black  overflow-hidden ${
                  menuClass === "animate-collapse-in"
                    ? "animate-slide-in"
                    : "animate-slide-out"
                }`}
              >
                {navLinks.map((item) => (
                  <div key={item.name} className="w-full text-center">
                    <div
                      className="flex justify-center items-center"
                      onClick={() => item.hasSubmenu && toggleSubmenu()}
                    >
                      <Link
                        href={item.href}
                        className="border-b w-full flex justify-center"
                      >
                        <div
                          className={`-tracking-tighter font-extralight hover:text-rilke-red py-[0.6rem] cursor-pointer flex items-center  ${
                            !isLoading &&
                            item.name.toLowerCase() === currentSection
                              ? "text-anna-brown"
                              : ""
                          }`}
                          onClick={(e) => {
                            if (item.hasSubmenu) {
                              e.preventDefault();
                              toggleSubmenu();
                            } else if (item.name === "faq") {
                              e.preventDefault();
                              handleFAQClick();
                              toggleMenu();
                            } else {
                              tabAndToggle(item.name, item.href);
                            }
                          }}
                        >
                          {item.name}
                          {item.hasSubmenu && (
                            <IoIosArrowDown
                              className={`ml-1 inline-block transition-transform ${
                                openSubmenu ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </div>
                      </Link>
                    </div>

                    {item.hasSubmenu && openSubmenu && (
                      <div className="flex flex-col bg-anna-gray-light transition-all duration-700">
                        {leistungenSubLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="py-4 hover:bg-gray-100 text-sm "
                            onClick={() => {
                              toggleMenu();
                              setOpenSubmenu(false);
                            }}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* translation button */}
                <div
                  className="relative group m-auto py-4"
                  onClick={() => {
                    setIsOpenLanguageMenu(!isOpenLanguageMenu);
                  }}
                >
                  <div className="flex items-center  gap-2 cursor-pointer">
                    <div className="w-8 h-6 relative">
                      <img
                        src={
                          lang === "de"
                            ? "/flags/germany.png"
                            : "/flags/usa.avif"
                        }
                        alt="Deutsch"
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <IoIosArrowDown className="text-xs" />
                  </div>
                </div>
                {isOpenLanguageMenu && (
                  <div className="  w-full h-32 bg-white shadow-lg  z-50">
                    <button
                      className={`w-full hover:bg-gray-200 duration-500 p-2  h-1/2 flex justify-center items-center gap-2 ${
                        lang === "en" && "bg-gray-200"
                      }`}
                      onClick={() => {
                        setLang("en");

                        setIsOpenLanguageMenu(false);
                        console.log("Change to english");
                      }}
                    >
                      <div className="flex items-center   w-8 h-6 text-sm">
                        <img
                          src="/flags/usa.avif"
                          alt="English"
                          className="object-contain h-full w-full"
                        />
                      </div>
                      <p className="font-vollkornSC">english</p>
                    </button>

                    <button
                      className={`w-full hover:bg-gray-200 duration-500 p-2 h-1/2 flex justify-center items-center gap-2 ${
                        lang === "de" && "bg-gray-200"
                      }`}
                      onClick={() => {
                        setLang("de");

                        setIsOpenLanguageMenu(false);
                        console.log("Change to german");
                      }}
                    >
                      <div className="flex items-center   w-8 h-6 text-sm">
                        <img
                          src="/flags/germany.png"
                          alt="English"
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <p className="font-vollkornSC">german</p>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

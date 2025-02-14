"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "home", href: "/" },
  { name: "leistungen", href: "", hasSubmenu: true }, // Empty href
  { name: "über uns", href: "/uber-uns" },
  { name: "referenzen", href: "/referenzen" },
  { name: "faq", href: "", isAnId: true }, // Missing leading slash
  { name: "kontakt", href: "/kontakt" },
];

const leistungenSubLinks = [
  { name: "Gründungszuschuss", href: "/leistungen/grundungszuschuss" },
  { name: "Businessplan", href: "/leistungen/businessplan" },
  { name: "Finanzierung", href: "/leistungen/finanzierung" },
  { name: "Buchhaltung", href: "/leistungen/buchhaltung" },
  { name: "Websites & Marketing", href: "/leistungen/websites-marketing" },
];

const Navbar2 = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const handleOpenLinks = () => {
    setOpenLinks(true);
  };
  const handleCloseLinks = () => {
    setOpenLinks(false);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Verificar la posición del scroll al montar el componente
    handleScroll();

    // Agregar el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const getDynamicStyles = (
    currentUrl: string,
    itemHref: string,
    scrolled: boolean,
    name: string
  ) => {
    if (
      currentUrl === itemHref ||
      (currentUrl === "leistungen" && name === "leistungen")
    ) {
      if (scrolled || enterMenu) {
        return "border-b border-anna-burgundy text-anna-burgundy font-semibold";
      }
      return "border-b text-white font-semibold";
    } else {
      if (scrolled || enterMenu) return "text-black";
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

  return (
    <div>
      <div
        className={`w-screen  fixed z-50 top-0 `}
        onPointerEnter={handleOpenMenu}
        onPointerLeave={handleCloseMenu}
      >
        <div
          className={`flex justify-between w-full transition-all duration-1000 ${
            scrolled || enterMenu ? "bg-white" : ""
          }`}
        >
          {navLinks.map((item, index) => (
            <div
              key={index}
              className={`${openLinks && "relative"}`}
              onPointerEnter={
                item.name === "leistungen" ? handleOpenLinks : undefined
              }
              onPointerLeave={
                item.name === "leistungen" ? handleCloseLinks : undefined
              }
            >
              <Link href={item.href}>
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
              </Link>
              {item.name === "leistungen" && openLinks && (
                <div className="absolute -translate-x-1/2 left-1/2 top-4 bg-red-500 flex flex-col z-50">
                  {leistungenSubLinks.map((item, index) => (
                    <div key={index} className=" border-2 flex-col z-50">
                      <Link
                        href={item.href}
                        onClick={() => {
                          handleCloseLinks();
                          handleCloseMenu();
                        }}
                      >
                        <p>{item.name}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;

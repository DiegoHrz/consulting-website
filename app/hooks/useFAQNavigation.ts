import { usePathname, useRouter } from "next/navigation";
import { useNavStore } from "../store/useNavStore";

export const useFAQNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setSelectedTab, setCurrentSection } = useNavStore();

  const handleFAQClick = async (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        scrollToFAQ();
      }, 100);
    } else {
      scrollToFAQ();
    }

    setSelectedTab("faq");
    setCurrentSection("faq");
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      const headerOffset = 100;
      const elementPosition = faqSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return { handleFAQClick };
};
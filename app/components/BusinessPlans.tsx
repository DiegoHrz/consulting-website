"use client";
import { motion } from "framer-motion";
import { GoShieldCheck } from "react-icons/go";
import { SlCalender, SlUserFollowing } from "react-icons/sl";
import Title from "./customTags/Title";
import { useLanguageStore } from "../store/useLanguageStore";

const BusinessPlans = () => {
  const businessPlansText = {
    de: {
      title:
        "Verlässlichkeit, Erfahrung und echtes Engagement – wir begleiten dich auf deinem Weg",
      items: [
        {
          title: "100% Erfolgsrate",
          description:
            "Jeder einzelne Antrag auf Gründerzuschuss unserer Kunden wurde genehmigt.",
        },
        {
          title: "Kostenlose Beratung",
          description:
            "Buche ein unverbindliches Erstberatungsgespräch mit uns.",
        },
        {
          title: "+100 zufriedene Kunden",
          description:
            "Wir haben bereits zahlreiche Kunden bundesweit betreut.",
        },
      ],
    },
    en: {
      title:
        "Reliability, experience and genuine commitment - we accompany you on your journey",
      items: [
        {
          title: "100% success rate",
          description:
            "Every single application for the start-up grant from our customers has been approved.",
        },
        {
          title: "Free consultation",
          description: "Book a non-binding initial consultation with us.",
        },
        {
          title: "+100 satisfied customers",
          description:
            "We have already supported numerous customers nationwide.",
        },
      ],
    },
  };

  const { lang } = useLanguageStore();
  const t = businessPlansText[lang];

  return (
    <div className="px-10 sm:px-16 sm:max-w-7xl mx-auto relative pt-10">
      <div className="mb-12 sm:mb-[3.8rem] lg:mb-20">
        <div className="w-28 aspect-square rounded-full mx-auto relative overflow-hidden">
          <img
            src="/logo/logo_only_letter.png"
            alt=""
            className="w-24 sm:w-28 mx-auto z-[10] object-cover relative"
          />
          <div className="absolute bg-[linear-gradient(180deg,_#125369_0%,_#f7f7f7_25%,_#fff_80%)] blur-sm inset-0 z-[0]"></div>
        </div>
        <Title text={t.title} title={false} />
      </div>
      <div className="text-black flex flex-col md:flex-row w-full justify-between gap-8 md:gap-2 lg:gap-10 max-w-96 sm:max-w-max mx-auto">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col items-center gap-3 p-6 md:p-4 flex-1 border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_4px_2px_0px] min-h-56 lg:min-h-64 justify-center">
            <motion.div
              className=""
              initial={{ scale: 0, opacity: 0.7 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <GoShieldCheck size={40} color="#581D1D" />
            </motion.div>
            <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">
              {t.items[0].title}
            </h6>
            <p className="font-original_text text-base lg:text-lg text-anna-gray text-center max-w-80 py-2">
              {t.items[0].description}
            </p>
          </div>
        </motion.div>

        <motion.div
          className=""
          initial={{ scale: 0, opacity: 0.5 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col items-center gap-3 p-6 md:p-4 flex-1 border-[#D5E0E2] rounded-xl bg-white shadow-[#125369] shadow-[0px_3px_10px_0px] min-h-56 lg:min-h-64 justify-center">
            <motion.div
              className=""
              initial={{ scale: 0, opacity: 0.7 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <SlCalender size={40} color="#581D1D" />
            </motion.div>
            <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">
              {t.items[1].title}
            </h6>
            <p className="font-original_text text-base lg:text-lg text-center max-w-80 py-2">
              {t.items[1].description}
            </p>
          </div>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col items-center gap-3 p-6 md:p-4 flex-1 border-[#D5E0E2] rounded-xl bg-white md:shadow-gray-300 md:shadow-[0px_4px_2px_0px] min-h-56 lg:min-h-64 justify-center">
            <motion.div
              className=""
              initial={{ scale: 0, opacity: 0.7 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <SlUserFollowing size={40} color="#581D1D" />
            </motion.div>
            <h6 className="font-cabin text-2xl md:text-xl lg:text-2xl text-center">
              {t.items[2].title}
            </h6>
            <p className="font-original_text text-base lg:text-lg text-center max-w-80 py-2 text-anna-gray">
              {t.items[2].description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessPlans;

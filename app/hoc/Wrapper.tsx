import { motion } from "framer-motion";

import { ComponentType } from "react";
import { staggerContainer } from "../utils/motion";

const Wrapper = (Component: ComponentType<any>, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0,0)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: false, amount: 0.15 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 `}
      >
        <span className=" mt-[-100px] pb-[100px] block" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default Wrapper;
import { motion } from "framer-motion";
import { ComponentType } from "react";
import { staggerContainer } from "../utils/motion";

// Infer the props of the component passed to the HOC
const Wrapper = <P extends object>(Component: ComponentType<P>, idName: string) =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: false, amount: 0.15 }}
        className={`sm:px-16 px-8 w-full max-w-7xl mx-auto relative z-0 `}
      >
        {/* sm:py-24 py-10 */}
        <span className="block" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

export default Wrapper;

import { motion } from "framer-motion";
import ship from "../static/images/ship.png";

export default function Services() {
  const springYVariants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.0,
      },
    },
  };
  const springYRVariants = {
    offscreen: {
      y: -200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.0,
      },
    },
  };

  const springXVariants = {
    offscreen: {
      x: 200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.0,
      },
    },
  };

  const springXRVariants = {
    offscreen: {
      x: -200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.0,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-4 m-12 gap-5"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1.0 }}
    >
      <motion.div className="col-span-1"></motion.div>
      <motion.div className="col-span-3"></motion.div>
    </motion.div>
  );
}

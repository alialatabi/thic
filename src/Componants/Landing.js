import buildings from "../static/images/buildings1.png";

import { motion } from "framer-motion";

export default function Landing() {
  const springXVariants = {
    offscreen: {
      x: -200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.0,
        duration: 2.5,
      },
    },
  };

  const springXRVariants = {
    offscreen: {
      x: 200,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.0,
        duration: 2.5,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="container text-center md:text-left md:mt-36  md:mb-[3%] mb-[14.5%]  flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center justify-center "
    >
      <div className="w-full mb-28 md:w-[50%] ">
        <motion.div className="space-y-5 " variants={springXVariants}>
          <h1
            className="text-4xl tracking-wide text-gray-800 lg:text-5xl w-full"
            id="home"
          >
            Trust House
          </h1>

          <p className="flex items-center font-bold text-5xl text-[#0A479B] ">
            Your First Choice
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center justify-center w-full relative "
        variants={springXRVariants}
      >
        <img
          className="w-full h-auto lg:max-w-4xl absolute z-0 drop-shadow-2xl "
          src={buildings}
          alt="Fire Insurance"
        />
      </motion.div>
    </motion.div>
  );
}

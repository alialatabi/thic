import infinity from "../static/images/Infinity.png";
import dots from "../static/images/dots.png";
import iso from "../static/images/iso.png";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function Landing() {
  const springYVariants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const springXVariants = {
    offscreen: {
      x: 200,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const springXRVariants = {
    offscreen: {
      x: -200,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="flex flex-col bg-[#F1F2F4] mt-2 px-6 mx-auto space-y-6">
      <div className="flex flex-row">
        <p className="text-2xl text-slate-800 font-semibold mt-8">About Us</p>
        <img
          className="absolute right-0 w-36"
          src={infinity}
          alt="infinit insurance"
        />
      </div>

      <motion.div
        className="flex flex-row items-center justify-center ml-16 z-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={springXRVariants}>
          <img className="w-36 " src={dots} alt="infinit insurance " />
        </motion.div>
        <motion.div
          variants={springXVariants}
          className="text-md text-slate-500 font-semibold ml-4 w-[38%] "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, sum
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-row items-center justify-center ml-16 relative z-0"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <img className="w-[35%] -mt-14" src={iso} alt="infinit insurance" />
        <motion.div
          variants={springYVariants}
          className="text-md text-slate-500 font-semibold ml-16 pr-16 w-[55%]"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </motion.div>
      </motion.div>
    </div>
  );
}

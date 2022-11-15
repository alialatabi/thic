import dots from "../static/images/dots.png";
import office from "../static/images/office.svg";

import { motion } from "framer-motion";

export default function About() {
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
        bounce: 0.4,
        duration: 1.8,
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
        bounce: 0.4,
        duration: 1.8,
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
        bounce: 0.4,
        duration: 1.8,
      },
    },
  };

  return (
    <div className=" flex flex-col rounded-lg bg-[#F1F2F4] mt-2 px-6 py-[9%] space-y-6">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <p className="text-2xl text-slate-800 font-semibold mt-8" id="about">
            About Us
          </p>
        </div>

        <motion.div
          className="flex flex-row items-center justify-center md:ml-32 z-10 text-slate-700"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            variants={springXRVariants}
            className="md:w-56  hidden md:block md:mt-8"
          >
            <img className=" w-full" src={dots} alt="infinit insurance " />
          </motion.div>
          <motion.div
            variants={springXVariants}
            className="text-md font-semibold md:ml-4 w-full md:w-[50%] md:mt-6"
          >
            <h1 className="text-lg text-slate-800 font-bold">Our Mission</h1>
            <h2 className="ml-5">
              Is to secure the future of our customers by providing high
              professional level of services.
            </h2>
            <br />
            <h1 className="text-lg text-slate-800 font-bold">Our Vision</h1>
            <h2 className="ml-5">
              Is to be the first choice of insurance providers in Iraq by being
              innovative, being financially strong, and exceeding customer
              expectations.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mt-10 md:ml-16 relative z-0 text-slate-700 space-y-6"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <img
            className="w-full md:w-[40%] mt-14"
            src={office}
            alt="infinit insurance"
          />
          <motion.div
            variants={springYVariants}
            className="text-md  font-semibold md:ml-16 pr-16 w-full md:w-[55%]"
          >
            Trust House Insurance Company (Dar Al Theqa Insurance Company) a
            private shareholding, was founded by Iraqi insurance men whom worked
            long years outside Iraq, Trust Group, and businessmen in Iraq The
            company was registered in Baghdad on 30 09 2009 with a fully paid
            share capital of IQD 5 000 000 000 in compliance with the Insurance
            Diwan Order concerning insurance companies’ capital The company was
            granted license to carry out insurance activities by the Insurance
            Diwan on 15 03 2010 (License 21 of 2010 We have also granted our
            license in Kurdistan on 29 03 2017 (no 1161).
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

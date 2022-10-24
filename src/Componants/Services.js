import { motion } from "framer-motion";
import ship from "../static/images/ship.png";
import health from "../static/images/health.png";
import fire from "../static/images/fire.png";
import motor from "../static/images/motor.png";
import eng from "../static/images/eng.png";
import personal from "../static/images/personal.png";
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
        bounce: 0.3,
        duration: 1.8,
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
        bounce: 0.3,
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
        bounce: 0.3,
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
        bounce: 0.3,
        duration: 1.8,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-row flex-wrap bg-[#0A479B] m-12 rounded-lg gap-5"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1.0 }}
    >
      <motion.div
        className="text-center mx-auto w-[25%] bg-white rounded-lg m-8 p-8 grayscale hover:grayscale-0 hover:shadow-2xl"
        variants={springXRVariants}
      >
        <img src={ship} alt="Marine Insurance" className="mx-auto mb-3 " />
        <p className="text-xl font-bold text-slate-700">Marine Insurance</p>
        <p className="text-base text-slate-600 ">
          Lorem Ipsum is simply dummy text including versions of Lorem Ipsum
        </p>
      </motion.div>

      <motion.div
        className="text-center mx-auto w-[25%] bg-white rounded-lg m-8 p-8 grayscale hover:grayscale-0 hover:shadow-2xl"
        variants={springYRVariants}
      >
        <img src={health} alt="Medical Insurance" className="mx-auto mb-3" />
        <p className="text-xl font-bold text-slate-700">Medical Insurance</p>
        <p className="text-base text-slate-600 ">
          Lorem Ipsum is simply dummy text including versions of Lorem Ipsum
        </p>
      </motion.div>

      <motion.div
        className="text-center mx-auto w-[25%] bg-white rounded-lg m-8 p-8 grayscale hover:grayscale-0 hover:shadow-2xl"
        variants={springXVariants}
      >
        <img src={fire} alt="Fire Insurance" className="mx-auto mb-3" />
        <p className="text-xl font-bold text-slate-700">Fire Insurance</p>
        <p className="text-base text-slate-600 ">
          Lorem Ipsum is simply dummy text including versions of Lorem Ipsum
        </p>
      </motion.div>

      <motion.div
        className="text-center mx-auto w-[25%] bg-white rounded-lg m-8 p-8 grayscale hover:grayscale-0 hover:shadow-2xl"
        variants={springXRVariants}
      >
        <img src={motor} alt="Motor Insurance" className="mx-auto mb-3" />
        <p className="text-xl font-bold text-slate-700">Motor Insurance</p>
        <p className="text-base text-slate-600 ">
          Lorem Ipsum is simply dummy text including versions of Lorem Ipsum
        </p>
      </motion.div>

      <motion.div
        className="text-center mx-auto w-[25%] bg-white rounded-lg m-8 p-8 grayscale hover:grayscale-0 hover:shadow-2xl"
        variants={springYVariants}
      >
        <img src={eng} alt="Engineering Insurance" className="mx-auto mb-3" />
        <p className="text-xl font-bold text-slate-700">
          Engineering Insurance
        </p>
        <p className="text-base text-slate-600 ">
          Lorem Ipsum is simply dummy text including versions of Lorem Ipsum
        </p>
      </motion.div>

      <motion.div
        className="text-center mx-auto w-[25%] bg-white rounded-lg m-8 p-8 grayscale hover:grayscale-0 hover:shadow-2xl"
        variants={springXVariants}
      >
        <img src={personal} alt="Personal Insurance" className="mx-auto mb-3" />
        <p className="text-xl font-bold text-slate-700">Personal Insurance</p>
        <p className="text-base text-slate-600 ">
          Lorem Ipsum is simply dummy text including versions of Lorem Ipsum
        </p>
      </motion.div>
    </motion.div>
  );
}

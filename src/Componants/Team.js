import { motion } from "framer-motion";
import target from "../static/images/target.png";

export default function Team() {
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
    <div id="team" className="container mx-auto">
      <p className="ml-12 text-3xl font-semibold text-slate-700">Our Team</p>
      <motion.div
        className="grid grid-cols-4 m-12 gap-8"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1.0 }}
      >
        <motion.div className="col-span-1 flex flex-col gap-10 w-[75%]">
          <p className="text-base text-slate-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, sum
          </p>
          <img src={target} alt="target" className="w-[75%] mx-auto" />
        </motion.div>

        <motion.div className="col-span-3 flex flex-row flex-wrap gap-x-10 ">
          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-32 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>

          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-40 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>

          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-40 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>

          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-40 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>

          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-40 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>

          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-40 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>

          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-40 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>

          <motion.div className="w-[90%] md:w-[20%] 2xl:w[15%] text-center">
            <div className="w-full h-40 2xl:h-48 bg-slate-500 rounded-lg"></div>
            <p className="text-lg font-semibold text-slate-700">Name</p>
            <p className="text-base text-slate-600">Position</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

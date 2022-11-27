import { motion } from "framer-motion";

import wamidh from "../static/images/wamidh.png";
import mustafa from "../static/images/mustafa.png";
import basma from "../static/images/basma.png";
import shamal from "../static/images/shamal.png";
import ali from "../static/images/ali.png";

export default function Team() {
  const springXVariants = {
    offscreen: {
      x: 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2.0,
      },
    },
  };

  return (
    <div id="team" className="container mx-auto ">
      <p className="ml-12 text-3xl font-semibold text-slate-700">Our Team</p>
      <motion.div className="grid grid-cols-4 m-12 gap-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1.0 }}
          className="col-span-4 flex flex-row flex-wrap xl:flex-nowrap md:gap-x-10 gap-y-10 justify-center "
        >
          <motion.div
            className="w-[90%] md:w-[20%] 2xl:w[15%] text-center"
            // variants={springXVariants}
          >
            <div className="w-full h-40 2xl:h-48  rounded-lg ">
              <img
                src={wamidh}
                className=" h-40 2xl:h-48 mx-auto"
                alt="wamidh"
              />
            </div>
            <p className="text-lg font-semibold text-slate-700">
              Wamidh Aljarrah
            </p>
            <p className="text-base text-slate-600">Managing Director</p>
          </motion.div>

          <motion.div
            className="w-[90%] md:w-[20%] 2xl:w[15%] text-center"
            // variants={springXVariants}
          >
            <div className="w-full h-40 2xl:h-48  rounded-lg ">
              <img
                src={shamal}
                className=" h-36 2xl:h-42 mx-auto"
                alt="shamal"
              />
            </div>
            <p className="text-lg font-semibold text-slate-700">
              Shamal Shawket
            </p>
            <p className="text-base text-slate-600">
              Kurdistan Regional Manager
            </p>
          </motion.div>

          <motion.div
            className="w-[90%] md:w-[20%] 2xl:w[15%] text-center"
            // variants={springXVariants}
          >
            <div className="w-full h-40 2xl:h-48 rounded-lg ">
              <img
                src={mustafa}
                className=" h-40 2xl:h-48 mx-auto"
                alt="mustafa"
              />
            </div>
            <p className="text-lg font-semibold text-slate-700">Mustafa Alaa</p>
            <p className="text-base text-slate-600">Technical Manager</p>
          </motion.div>

          <motion.div
            className="w-[90%] md:w-[20%] 2xl:w[15%] text-center"
            // variants={springXVariants}
          >
            <div className="w-full h-40 2xl:h-48  rounded-lg">
              <img
                src={basma}
                className=" h-40 2xl:h-48 mx-auto"
                alt="mustafa"
              />
            </div>
            <p className="text-lg font-semibold text-slate-700">Basma Ahmed</p>
            <p className="text-base text-slate-600">Technical Manager</p>
          </motion.div>

          <motion.div
            className="w-[90%] md:w-[20%] 2xl:w[15%] text-center"
            // variants={springXVariants}
          >
            <div className="w-full h-40 2xl:h-48  rounded-lg">
              <img src={ali} className=" h-40 2xl:h-48 mx-auto" alt="mustafa" />
            </div>
            <p className="text-lg font-semibold text-slate-700">Ali Mahmood</p>
            <p className="text-base text-slate-600">Basra Branch Manager</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

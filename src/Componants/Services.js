import { motion } from "framer-motion";
import ship from "../static/images/ship.png";
import health from "../static/images/health.png";
import fire from "../static/images/fire.png";
import motor from "../static/images/motor.png";
import eng from "../static/images/eng.png";
import personal from "../static/images/personal.png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <motion.div
      className="bg-[#024A76] m-12 rounded-lg container mx-auto py-8 w-[90%]"
      id="services"
    >
      <p className="ml-12 py-2 text-3xl font-semibold text-white">Services</p>
      <motion.div className="flex flex-col md:flex-row flex-wrap gap-y-10 gap-x-1 py-4">
        <Link
          to={"/Service/Marine"}
          className="text-center mx-auto w-[80%] md:w-[25%] bg-white rounded-lg p-8 md:grayscale hover:bg-slate-100 hover:scale-110 duration-200 hover:grayscale-0 hover:shadow-2xl"
        >
          <motion.div>
            <img
              src={ship}
              alt="Marine Insurance"
              className="mx-auto mb-3 w-[40%]"
            />
            <p className="text-xl font-bold text-slate-700">Marine Insurance</p>
            <p className="text-base text-slate-600 "></p>
          </motion.div>
        </Link>

        <Link
          to={"/Service/Medical"}
          className="text-center mx-auto w-[80%] md:w-[25%] bg-white rounded-lg  p-8 md:grayscale hover:bg-slate-100 hover:scale-110 duration-200 hover:grayscale-0 hover:shadow-2xl"
        >
          <motion.div>
            <img
              src={health}
              alt="Medical Insurance"
              className="mx-auto mb-3 w-[40%]"
            />
            <p className="text-xl font-bold text-slate-700">
              Medical Insurance
            </p>
            <p className="text-base text-slate-600 "></p>
          </motion.div>
        </Link>
        <Link
          to={"/Service/Fire"}
          className="text-center mx-auto w-[80%] md:w-[25%] bg-white rounded-lg  p-8 md:grayscale hover:bg-slate-100 hover:scale-110 duration-200 hover:grayscale-0 hover:shadow-2xl"
        >
          <motion.div>
            <img
              src={fire}
              alt="Fire Insurance"
              className="mx-auto mb-3 w-[40%]"
            />
            <p className="text-xl font-bold text-slate-700">Fire Insurance</p>
            <p className="text-base text-slate-600 "></p>
          </motion.div>
        </Link>

        <Link
          to={"/Service/Motor"}
          className="text-center mx-auto w-[80%] md:w-[25%] bg-white rounded-lg  p-8 md:grayscale hover:bg-slate-100 hover:scale-110 duration-200 hover:grayscale-0 hover:shadow-2xl"
        >
          <motion.div>
            <img
              src={motor}
              alt="Motor Insurance"
              className="mx-auto mb-3 w-[40%]"
            />
            <p className="text-xl font-bold text-slate-700">Motor Insurance</p>
            <p className="text-base text-slate-600 "></p>
          </motion.div>
        </Link>

        <Link
          to={"/Service/Engineering"}
          className="text-center mx-auto w-[80%] md:w-[25%] bg-white rounded-lg  p-8 md:grayscale hover:bg-slate-100 hover:scale-110 duration-200 hover:grayscale-0 hover:shadow-2xl"
        >
          <motion.div>
            <img
              src={eng}
              alt="Engineering Insurance"
              className="mx-auto mb-3 w-[40%]"
            />
            <p className="text-xl font-bold text-slate-700">
              Engineering Insurance
            </p>
            <p className="text-base text-slate-600 "></p>
          </motion.div>
        </Link>

        <Link
          to={"/Service/Personal"}
          className="text-center mx-auto w-[80%] md:w-[25%] bg-white rounded-lg  p-8 md:grayscale hover:bg-slate-100 hover:scale-110 duration-200 hover:grayscale-0 hover:shadow-2xl"
        >
          <motion.div>
            <img
              src={personal}
              alt="Personal Insurance"
              className="mx-auto mb-3 w-[40%]"
            />
            <p className="text-xl font-bold text-slate-700">
              Personal Insurance
            </p>
            <p className="text-base text-slate-600 "></p>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

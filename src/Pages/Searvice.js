import { motion } from "framer-motion";

import { useLocation } from "react-router";
import Marine from "../static/images/Marine.png";
import Medical from "../static/images/Medical.webp";
import Fire from "../static/images/Fire.webp";
import Motor from "../static/images/Car.png";
import Eng from "../static/images/Engineering.png";
import Personal from "../static/images/Liability.png";

export default function Searvic() {
  let txt = "";
  let txt2 = "";
  let headLine = "";
  let headLine2 = "";
  let img;

  const location = useLocation();
  if (location.pathname === "/Service/Marine") {
    img = Marine;
    headLine = "Marine Cargo / Oil & Gas Transport Insurance";
    txt =
      "We can provide our dear customers with the required marine covers that suit their needs whether requested by banks or by other parties. The covers extend for all means of transportation whether by sea, air or by land.";
  }
  if (location.pathname === "/Service/Fire") {
    img = Fire;
    headLine = "Property Insurance";
    txt =
      "We offer customers insurance cover suitable for their properties whether they are residential, commercial, industrial or services.";
  }

  if (location.pathname === "/Service/Medical") {
    img = Medical;
    headLine = "Group Medical Insurance";
    txt = "";
  }
  if (location.pathname === "/Service/Motor") {
    img = Motor;
    headLine = "Motor Insurance";
    txt =
      "We offer our customers all types of motor insurance namely comprehensive motor insurance, third party liability insurance, drive / passenger's personal accident insurance.";
  }
  if (location.pathname === "/Service/Engineering") {
    img = Eng;
    headLine = "Engineering Insurance";
    txt =
      "We offer our customer all types of Insurance covers as needed for their projects. We have sizable capacity for mega construction projects such as housing complexes, malls, infrastructure projects and similar capacity for engineering projects such as power station, factories and refineries.";
  }
  if (location.pathname === "/Service/Personal") {
    img = Personal;
    headLine = "Personal Insurance";
    txt =
      "We offer Personal Accident insurance, an annual protection round the clock 24 hours a day, 365 days a year against bodily injury temporary and total disability & death.    The indemnity limit for The protection is pre-agreed between our company and the client at internationally approved terms.";
  }
  return (
    <div className="container mt-16 mb-16 p-4 mx-auto md:border-2 border-dotted border-[#024A76] border-opacity-75 rounded-3xl">
      <motion.div
        className="flex flex-col md:flex-row gap-10 md:m-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1.0 }}
      >
        <motion.div className="flex flex-col gap-5 w-[90%] md:w-[50%]">
          <p className="text-lg font-semibold text-slate-800 ">{headLine}</p>
          <p className="text-base text-slate-600 ">{txt}</p>
        </motion.div>

        <motion.div className="w-[90%] md:w-[50%] ">
          <img src={img} alt="insurance" className="w-96 md:w-9/12 mx-auto" />
        </motion.div>
      </motion.div>
      <div className="flex flex-col mt-5 gap-5 md:m-10">
        <p className="text-lg font-semibold text-slate-800 ">{headLine2}</p>
        <p className="text-base text-slate-600 ">{txt2}</p>
      </div>
    </div>
  );
}

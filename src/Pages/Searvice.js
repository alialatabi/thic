import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router";
import ship from "../static/images/marine.jpg";
import health from "../static/images/health.png";
import fire from "../static/images/fire.png";
import motor from "../static/images/motor.png";
import eng from "../static/images/eng.png";
import personal from "../static/images/personal.png";

export default function Searvic() {
  let txt = "";
  let headLine = "";
  let img;

  const location = useLocation();
  if (location.pathname === "/Service/Marine") {
    img = ship;
    headLine = "Lorem Ipsum is simply dummy text of the printing and ";
    txt =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  }
  return (
    <div className="container mt-36 mx-auto">
      <motion.div
        className="grid grid-cols-3 gap-10 m-28 "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1.0 }}
      >
        <motion.div className="col-span-2 flex flex-col gap-10 w-[75%]">
          <p className="text-lg font-semibold text-slate-800 ">{headLine}</p>
          <p className="text-base text-slate-600 ">{txt}</p>
        </motion.div>

        <motion.div className="col-span-1 ">
          <img src={img} alt="insurance" className="w-[100%] mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
}

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
  let headLine = "";
  let img;

  const location = useLocation();
  if (location.pathname === "/Service/Marine") {
    img = Marine;
    headLine = "Marine Cargo / Oil & Gas Transport Insurance";
    txt =
      "Protection for the Sender and the Consignee against Loss or Damage to the shipped goods whilst at sea, in the air or during land transit";
  }
  if (location.pathname === "/Service/Fire") {
    img = Fire;
    headLine = "Fire and Allied Perils Insurance";
    txt =
      "Fire and special perils policy is an insurance contract that safeguards the insured against unforeseen contingency caused by accidental fire, lightning, explosion, aerial devices, natural calamities like earthquake, storm, tempest, flood, damage caused by impact of a road vehicle, bursting and/or overflowing of water tanks, apparatus and pipes. \nProperty All Risks Insurance An all-risk property insurance policy means that the policy will cover everything, except the perils which are clearly listed under the exclusion header. This means that if the Event causing the Damage is not specifically excluded from the all-risk property insurance policy, it would be covered by the insurer.";
  }

  if (location.pathname === "/Service/Medical") {
    img = Medical;
    headLine = "Group Medical Insurance";
    txt =
      "An additional Group Benefit protecting your staff against Health impairment whether in-hospital or as an out-patient";
  }
  if (location.pathname === "/Service/Motor") {
    img = Motor;
    headLine = "Motor Insurance";
    txt =
      "This Policy covers vehicles of all kinds according to the required coverage by the customer. ";
  }
  if (location.pathname === "/Service/Engineering") {
    img = Eng;
    headLine = "Contractors All Risk (CAR)";
    txt =
      "Contractors' all risks (CAR) insurance is a non-standard insurance policy that provides coverage for property damage and third-party injury or damage claims, which are the two primary types of risks on construction projects. Damage to property can include improper construction of structures, damage that happens during a renovation, damage to stock of building material on site, temporary works and Contractor’s Plant and Machinery on-site.\nErection All Risks (EAR) \ninsurance A Comprehensive cover for Construction or Erection Projects covering material, contract works achieved or under construction, Contractor’s Plant and Machinery as well as Liability inherent to the site of works against a range of hazards defined in the adequate QuestionnaireMachinery Breakdown Insurance covering the repair of any insured machine should it be damaged by a surge in electricity, a mechanical breakdown or any other unexpected internal damage. \nThis type of insurance may be coupled with another covering any Financial Loss arising out of Business Interruption following Machinery Breakdown.";
  }
  if (location.pathname === "/Service/Personal") {
    img = Personal;
    headLine = "Contractors All Risk (CAR)";
    txt =
      "Contractors' all risks (CAR) insurance is a non-standard insurance policy that provides coverage for property damage and third-party injury or damage claims, which are the two primary types of risks on construction projects. Damage to property can include improper construction of structures, damage that happens during a renovation, damage to stock of building material on site, temporary works and Contractor’s Plant and Machinery on-site.\nErection All Risks (EAR) \ninsurance A Comprehensive cover for Construction or Erection Projects covering material, contract works achieved or under construction, Contractor’s Plant and Machinery as well as Liability inherent to the site of works against a range of hazards defined in the adequate QuestionnaireMachinery Breakdown Insurance covering the repair of any insured machine should it be damaged by a surge in electricity, a mechanical breakdown or any other unexpected internal damage. \nThis type of insurance may be coupled with another covering any Financial Loss arising out of Business Interruption following Machinery Breakdown.";
  }
  return (
    <div className="container mt-16 mb-16 mx-auto border-2 border-dotted border-[#0A479B] border-opacity-75 rounded-3xl">
      <motion.div
        className="flex flex-col md:flex-row gap-10 md:m-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1.0 }}
      >
        <motion.div className="flex flex-col gap-5 w-[50%]">
          <p className="text-lg font-semibold text-slate-800 ">{headLine}</p>
          <p className="text-base text-slate-600 ">{txt}</p>
        </motion.div>

        <motion.div className="w-[90%] md:w-[50%]">
          <img src={img} alt="insurance" className="w-[100%] mx-auto" />
        </motion.div>
      </motion.div>
      <div className="flex flex-col mt-5 gap-5 md:m-10">
        <p className="text-lg font-semibold text-slate-800 ">{headLine}</p>
        <p className="text-base text-slate-600 ">{txt}</p>
      </div>
    </div>
  );
}

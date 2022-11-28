import logo from "../static/images/TrustLogo.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const springYVariants = {
    offscreen: {
      y: -200,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2.5,
      },
    },
  };

  const toAbout = () => {
    setTimeout(() => {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }, 200);
  };
  const toHome = () => {
    setTimeout(() => {
      document.body.scrollTop = 0;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  };
  const toServices = () => {
    setTimeout(() => {
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  const toTeam = () => {
    setTimeout(() => {
      document.getElementById("team").scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <motion.nav
      className="w-full z-50 mt-2 border-b-2 shadow-slate-200 shadow-lg "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        variants={springYVariants}
        className="container flex flex-wrap justify-between items-center  mx-auto relative z-30  "
      >
        <Link to={"/"} className="flex items-center">
          <img
            src={logo}
            className="w-48 md:w-80 m-3 -mr-2"
            alt="trust house insurance company"
          />
        </Link>
        {/* <div className="text-gray-700">Trust House Insurance Company</div> */}
        <div className="flex md:order-2 md:hidden">
          {/* <button
            type="button"
            className="text-white bg-[#0A479B] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Get Quote
          </button> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm mr-5 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            isNavOpen === true
              ? "block justify-between items-center w-full md:flex md:w-auto md:order-1 "
              : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1 "
          }
          id="navbar-sticky"
          onClick={() => setIsNavOpen(false)}
        >
          <ul className="flex flex-col w-[75%] mx-auto md:w-full space-y-2 mt-4 md:flex-row md:space-y-0  md:space-x-6 md:mt-0 md:text-sm md:font-medium text-gray-800 ">
            <li className=" border-2 border-[#0A479B] rounded-lg py-1 px-3 hover:bg-[#0A479B]  hover:text-white hover:scale-110 duration-200">
              <Link to={"/"}>
                <button
                  className="block md:p-0 font-bold mx-auto"
                  onClick={toHome}
                >
                  Home
                </button>
              </Link>
            </li>

            <li className=" border-2 border-[#0A479B] rounded-lg py-1 px-3 hover:bg-[#0A479B] hover:text-white hover:scale-110 duration-200">
              <Link to={"/"}>
                <button
                  className="block md:p-0 font-bold mx-auto"
                  onClick={toAbout}
                >
                  About
                </button>
              </Link>
            </li>

            <li className=" border-2 border-[#0A479B] rounded-lg py-1 px-3 hover:bg-[#0A479B] hover:text-white hover:scale-110 duration-200">
              <Link to={"/"}>
                <button
                  className="block md:p-0 font-bold mx-auto"
                  onClick={toServices}
                >
                  Services
                </button>
              </Link>
            </li>

            <li className=" border-2 border-[#0A479B] rounded-lg py-1 px-3 hover:bg-[#0A479B] hover:text-white hover:scale-110 duration-200">
              <Link to={"/"}>
                <button
                  className="block md:p-0 font-bold mx-auto"
                  onClick={toTeam}
                >
                  Our Team
                </button>
              </Link>
            </li>

            <li className=" border-2 border-[#0A479B] rounded-lg py-1 px-3 hover:bg-[#0A479B]  hover:text-white hover:scale-110 duration-200">
              <Link to={"/Contact"}>
                <button className="block md:p-0 font-bold mx-auto">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
}

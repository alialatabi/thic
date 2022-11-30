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
    <>
      <div className=" p-2 border-b-[1px] border-b-[#FA7269] border-opacity-30">
        <div className="flex flex-row justify-evenly">
          <div className="hidden whitespace-nowrap md:flex md:flex-row text-base font-semibold text-[#024A76]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 fill-[#FA7269] mr-2"
            >
              <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128s-128 57.3-128 128zm128 80c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z" />
            </svg>
            Hay Al Muthanna 714 / 25 / 1 (Hamadany Bldg) ,2nd Floor, Baghdad –
            Iraq
          </div>
          <ul className=" flex flex-row justify-end space-x-10 ">
            <li className="flex flex-row space-x-2 text-xs md:text-base font-semibold text-[#024A76]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 fill-[#FA7269]"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <a href="mailto: info@trustiraq.com">info@trustiraq.com</a>
            </li>
            <li className="flex flex-row space-x-2 text-xs md:text-base font-semibold text-[#024A76]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 fill-[#FA7269]"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <div>+964 7710119058</div>
            </li>
          </ul>
        </div>
      </div>

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
            className="text-white bg-[#024A76] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
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
              <button
                className="block md:p-0 font-bold mx-auto w-full"
                onClick={toHome}
              >
                <li className=" border-2 border-[#024A76] rounded-lg py-1 px-3 hover:bg-[#024A76]  hover:text-white hover:scale-110 duration-200">
                  <Link to={"/"}>Home</Link>
                </li>
              </button>

              <button
                className="block md:p-0 font-bold mx-auto w-full"
                onClick={toAbout}
              >
                <li className=" border-2 border-[#024A76] rounded-lg py-1 px-3 hover:bg-[#024A76] hover:text-white hover:scale-110 duration-200">
                  <Link to={"/"}>About</Link>
                </li>
              </button>
              <button
                className="block md:p-0 font-bold mx-auto w-full"
                onClick={toServices}
              >
                <li className=" border-2 border-[#024A76] rounded-lg py-1 px-3 hover:bg-[#024A76] hover:text-white hover:scale-110 duration-200">
                  <Link to={"/"}>Services</Link>
                </li>
              </button>
              <button
                className="block md:p-0 font-bold mx-auto w-full"
                onClick={toTeam}
              >
                <li className=" border-2 border-[#024A76] rounded-lg py-1 px-3 hover:bg-[#024A76] hover:text-white hover:scale-110 duration-200">
                  <Link to={"/"}>Our Team</Link>
                </li>
              </button>
              <button className="block md:p-0 font-bold mx-auto w-full">
                <li className=" border-2 border-[#024A76] rounded-lg py-1 px-3 hover:bg-[#024A76]  hover:text-white hover:scale-110 duration-200">
                  <Link to={"/Contact"}>Contact</Link>
                </li>
              </button>
            </ul>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}

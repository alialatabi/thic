import logo from "../static/images/Logo3.png";
import w1 from "../static/images/navwave1.svg";
import w2 from "../static/images/navwave2.svg";
import w3 from "../static/images/navwave3.svg";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
        bounce: 0.0,
        duration: 3.5,
      },
    },
  };
  const springYVariants1 = {
    offscreen: {
      y: -200,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.0,
        duration: 2.5,
      },
    },
  };
  const springYVariants2 = {
    offscreen: {
      y: -200,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.0,
        duration: 1.5,
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
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
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

  return (
    <motion.nav
      className="w-full z-50 mt-8 border-b-2 shadow-slate-200 shadow-lg"
      variants={springYVariants}
    >
      <div className="container flex flex-wrap justify-between items-center lg:w-[80%] mx-auto relative z-30  ">
        <Link to={"/"} className="flex items-center">
          <img
            src={logo}
            className="w-20"
            alt="trust house insurance company"
          />
        </Link>

        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-[#0A479B] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Get Quote
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-x-8 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <Link to={"/"}>
                <button
                  className="block py-2 pr-4 pl-3  md:p-0 text-sm text-slate-700 focus:text-slate-500 w-full font-bold"
                  onClick={toHome}
                >
                  Home
                </button>
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                <button
                  className="block py-2 pr-4 pl-3 md:p-0 text-sm text-slate-700 focus:text-slate-500 w-full font-bold"
                  onClick={toAbout}
                >
                  About
                </button>
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                <button
                  className="block py-2 pr-4 pl-3 md:p-0 text-sm text-slate-700 focus:text-slate-500 w-full font-bold"
                  onClick={toServices}
                >
                  Services
                </button>
              </Link>
            </li>

            <li>
              <Link to={"/"}>
                <button
                  className="block py-2 pr-4 pl-3 md:p-0 text-sm text-slate-700 focus:text-slate-500 w-full font-bold"
                  onClick={toTeam}
                >
                  Our Team
                </button>
              </Link>
            </li>

            <li>
              <Link to={"/Contact"}>
                <button className="block py-2 pr-4 pl-3 md:p-0 text-sm text-slate-700 focus:text-slate-500 w-full font-bold">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

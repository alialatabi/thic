import blgs from "../static/images/landing/blgs.png";
import blgsbg from "../static/images/landing/blgsbg.png";
export default function Landing() {
  const toAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container mt-36 flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center justify-center">
      <div className="lg:w-[75%] sliding-animate-rtl ">
        <div className="lg:max-w-lg">
          <h1
            className="text-4xl font-bold tracking-wide text-gray-800 lg:text-5xl -mt-[40%] w-full"
            id="home"
          >
            Trust House
          </h1>

          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-slate-500 font-semibold text-5xl">
              <span className="mx-2">Your First Choice</span>
            </p>
            <button
              className="text-white bg-gray-700 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 "
              onClick={toAbout}
            >
              See More
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full relative h-[100%] lg:w-[75%] lg:h-[150%] ">
        <img
          className="w-full h-auto mx-auto lg:max-w-2xl absolute z-0 scalling-animate50"
          src={blgsbg}
          alt="Fire Insurance"
        />
        <img
          className="w-full h-full mx-auto lg:max-w-2xl absolute z-10 scalling-animate75"
          src={blgs}
          alt="Trust House Insurance Company"
        />
      </div>
    </div>
  );
}

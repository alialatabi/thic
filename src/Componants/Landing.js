import blgs from "../static/images/blgs.png";
import blgsbg from "../static/images/blgsbg.png";
export default function Landing() {
  return (
    <div className=" container mt-36 flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="lg:w-[50%] sliding-animate-rtl">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-bold tracking-wide text-gray-800 lg:text-4xl -mt-[40%]">
            Trust House Insurance
          </h1>

          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-slate-500 font-semibold">
              <span className="mx-2">
                Dar Al Theqa Insurance Company (Trust House Insurance company) a
                private shareholding was founded by Iraqi insurance men whom
                worked long years outside Iraq, Trust Group and businessmen in
                Iraq. The company was registered in Baghdad on 30/09/2009 with a
                fully paid share capital of IQD 1,012,000,000 increased in March
                2014 to IQD 5,000,000,000 in compliance with the Insurance Diwan
                Order concerning insurance companies’ capital.
              </span>
            </p>
            <button className="text-white bg-gray-700 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 ">
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

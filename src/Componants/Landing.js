import buildings from "../static/images/buildings.svg";

export default function Landing() {
  const toAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="container mt-36 mb-[7%] flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center justify-center ">
      <div className="sliding-animate-rtl w-[50%] ">
        <div className="space-y-5 ">
          <h1
            className="text-4xl tracking-wide text-gray-800 lg:text-5xl w-full"
            id="home"
          >
            Trust House
          </h1>

          <p className="flex items-center font-bold text-5xl text-[#0A479B] w">
            Your First Choice
          </p>
          <button
            className="text-white bg-gray-700 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:mr-0 "
            onClick={toAbout}
          >
            See More
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-full relative ">
        <img
          className="w-full h-auto lg:max-w-4xl absolute z-0 scalling-animate50"
          src={buildings}
          alt="Fire Insurance"
        />
      </div>
    </div>
  );
}

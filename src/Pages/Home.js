import blgs from "../static/images/blgs.png";
import blgsbg from "../static/images/blgsbg.png";
export default function Home() {
  return (
    <>
      <div class=" container mt-36 flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl">
              Easiest way to create your website
            </h1>

            <div class="mt-8 space-y-5">
              <p class="flex items-center -mx-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="mx-2">Clean and Simple Layout</span>
              </p>

              <p class="flex items-center -mx-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="mx-2">Just Copy Paste Codeing</span>
              </p>

              <p class="flex items-center -mx-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="mx-2">Easy to Use</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full relative h-[100%] lg:w-[50%]">
          <img
            className="w-full h-auto mx-auto lg:max-w-2xl absolute z-0"
            src={blgsbg}
            alt="glasses photo"
          />
          <img
            className="w-[200%] h-auto mx-auto lg:max-w-2xl absolute z-10"
            src={blgs}
            alt="glasses photo"
          />
        </div>
      </div>

      <div>
        <svg
          width="100%"
          height="30%"
          id="svg"
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150 -mt-80 "
        >
          <defs>
            <linearGradient id="gradient" x1="53%" y1="0%" x2="47%" y2="100%">
              <stop offset="5%" stop-color="#9b989c"></stop>
              <stop offset="95%" stop-color="#dbd7dc"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 C 0,600 0,300 0,300 C 252.5,344.5 505,389 745,389 C 985,389 1212.5,344.5 1440,300 C 1440,300 1440,600 1440,600 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
    </>
  );
}

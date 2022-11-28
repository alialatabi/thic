import { useState } from "react";

export default function Contact() {
  const [basra, setBasra] = useState("mt-6 mb-6 hidden");
  const [erbil, setErbil] = useState("mt-6 mb-6 hidden");
  const [baghdad, setBaghdad] = useState("mt-6 mb-6 ");
  const bsMap = () => {
    setBasra("mt-6 mb-6");
    setBaghdad("mt-6 mb-6 hidden");
    setErbil("mt-6 mb-6 hidden");
  };
  const bgMap = () => {
    setBaghdad("mt-6 mb-6 ");
    setBasra("mt-6 mb-6 hidden");
    setErbil("mt-6 mb-6 hidden");
  };
  const erMap = () => {
    setErbil("mt-6 mb-6 ");
    setBasra("mt-6 mb-6 hidden");
    setBaghdad("mt-6 mb-6 hidden");
  };
  return (
    <>
      <div className="hidden md:block mt-20 mx-auto w-[65%] ">
        <table className="w-full text-center text-sm text-gray-500 ">
          <thead className="text-sm text-gray-800 uppercase">
            <tr>
              <th scope="col" className="py-1 px-2 ">
                <div className="border-2  border-cyan-500 rounded-lg">
                  Baghdad
                </div>
              </th>
              <th scope="col" className="py-1 px-2">
                <div className="border-2  border-rose-500 rounded-lg">
                  Erbil
                </div>
              </th>
              <th scope="col" className="py-1 px-2">
                <div className="border-2  border-amber-500 rounded-lg">
                  Basra
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-xs text-gray-700">
            <tr>
              <th scope="row" className="py-1 px-2 font-bold ">
                <div className="py-1 border-2  border-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white">
                  <button
                    onClick={() => {
                      bgMap();
                    }}
                  >
                    Hay Al Muthanna 714 / 25 / 1 (Hamadany Bldg) ,2nd Floor
                    <br />
                    Baghdad – Iraq <br />
                    Tel : +964 7827893848 <br />@ : info@trustiraq.com
                  </button>
                </div>
              </th>
              <th className="py-1 px-2 font-bold">
                <div className="py-1 px-1 border-2  border-rose-500 rounded-lg hover:bg-rose-500 hover:text-white">
                  <button
                    onClick={() => {
                      erMap();
                    }}
                  >
                    Lebanese Village – Building B4 – Apartment 7 <br />
                    Erbil – Iraq <br />
                    Tel : +964 7710119058 <br />@ : info@trustiraq.com
                  </button>
                </div>
              </th>
              <th className="py-1 px-2 font-bold">
                <div className="py-1 border-2  border-amber-500 rounded-lg hover:bg-amber-500 hover:text-white">
                  <button
                    onClick={() => {
                      bsMap();
                    }}
                  >
                    Al-Saady St. - Modern Medical Center building – 3rd Floor{" "}
                    <br />
                    Basra – Iraq <br />
                    Tel : +964 772 493 7300
                    <br />@ : info@trustiraq.com
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>

        <div className={baghdad}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1666.9837874363716!2d44.44570629496767!3d33.319663163046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x460150b9b1493408!2sTrust%20House%20Insurance%20Company!5e0!3m2!1sen!2siq!4v1667718777977!5m2!1sen!2siq"
            title="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mx-auto w-full h-80 "
          />
        </div>

        <div id="basra" className={basra}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.3550884337026!2d47.835294429207345!3d30.509150754283592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc4972ad2d28f45%3A0x929db5c9ebff01a6!2sTrust%20House%20Insurance%20Company!5e0!3m2!1sen!2siq!4v1667806911586!5m2!1sen!2siq"
            title="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mx-auto w-full h-80 "
          ></iframe>
        </div>

        <div id="erbil" className={erbil}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.2945325701703!2d44.01277782921574!3d36.25945408014989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x876ef068337a469f!2zMzbCsDE1JzM0LjAiTiA0NMKwMDAnNDguMCJF!5e0!3m2!1sen!2siq!4v1667808444728!5m2!1sen!2siq"
            title="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mx-auto w-full h-80 "
          ></iframe>
        </div>
      </div>

      {/* mobile */}

      <div className="block md:hidden mt-20 mx-auto w-[90%] space-y-5">
        <table className="w-full text-center text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="py-2 px-2 ">
                <div className="border-2  border-cyan-500 rounded-lg">
                  Baghdad
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-xs text-gray-700">
            <tr className="">
              <th scope="row" className="py-2 px-2 font-bold w-[33.33%] ">
                <div className="py-2 px-2 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white">
                  Hay Al Muthanna 714 / 25 / 1 (Hamadany Bldg) ,2nd Floor
                  Baghdad – Iraq <br />
                  Tel : +964 7827893848 <br />@ : info@trustiraq.com
                  <br />
                  <div className="mt-6 mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1666.9837874363716!2d44.44570629496767!3d33.319663163046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x460150b9b1493408!2sTrust%20House%20Insurance%20Company!5e0!3m2!1sen!2siq!4v1667718777977!5m2!1sen!2siq"
                      title="map"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="mx-auto w-full h-80 "
                    />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>

        <table className="w-full text-center text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 uppercase  ">
            <tr>
              <th scope="col" className="py-2 px-2">
                <div className="border-2  border-rose-500 rounded-lg">
                  Erbil
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-xs text-gray-700  ">
            <tr>
              <th scope="row" className="py-2 px-2 font-bold w-[33.33%] ">
                <div className="py-2 px-2 border-2 border-rose-500 rounded-lg hover:bg-rose-500 hover:text-white">
                  Lebanese Village – Building B4 – Apartment 7 <br />
                  Erbil – Iraq <br />
                  Tel : +964 7710119058 <br />@ : info@trustiraq.com
                  <br />
                  <div id="erbil" className="mt-6 mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.2945325701703!2d44.01277782921574!3d36.25945408014989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x876ef068337a469f!2zMzbCsDE1JzM0LjAiTiA0NMKwMDAnNDguMCJF!5e0!3m2!1sen!2siq!4v1667808444728!5m2!1sen!2siq"
                      title="map"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="mx-auto w-full h-80 "
                    ></iframe>
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>

        <table className="w-full text-center text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="py-2 px-2">
                <div className="border-2  border-amber-500 rounded-lg">
                  Basra
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-xs text-gray-700 ">
            <tr>
              <th scope="row" className="py-2 px-2 font-bold w-[33.33%] ">
                <div className="py-2 px-2 border-2 border-amber-500 rounded-lg hover:bg-amber-500 hover:text-white">
                  Al-Saady St. - Modern Medical Center building – 3rd Floor{" "}
                  <br />
                  Basra – Iraq <br />
                  Tel : +964 772 493 7300
                  <br />@ : info@trustiraq.com
                  <br />
                  <div id="basra" className="mt-6 mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.3550884337026!2d47.835294429207345!3d30.509150754283592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc4972ad2d28f45%3A0x929db5c9ebff01a6!2sTrust%20House%20Insurance%20Company!5e0!3m2!1sen!2siq!4v1667806911586!5m2!1sen!2siq"
                      title="map"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="mx-auto w-full h-80 "
                    ></iframe>
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

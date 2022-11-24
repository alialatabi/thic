import ke from "../static/images/KE.png";
import pc from "../static/images/pc.png";
import yasra from "../static/images/yasra.png";
import zain from "../static/images/zain.png";
import iom from "../static/images/IOM.svg";
import bgc from "../static/images/BGC.png";

export default function Partners() {
  return (
    <div id="partners" className="container mx-auto">
      <p className="ml-12 py-2 text-3xl font-semibold text-slate-700">
        Our Major Clients
      </p>

      <section className="bg-white py-20 lg:py-[20px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex items-center justify-center overflow-x-auto touch MagicScroll">
                <div className="flex-shrink-0">
                  <img
                    src={iom}
                    alt="iom"
                    className="mx-4 flex w-[120px] items-center justify-center py-5 2xl:w-[150px]"
                  />
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={ke}
                    alt="ke"
                    className="mx-4 flex w-[120px] items-center justify-center py-5 2xl:w-[150px]"
                  />
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={pc}
                    alt="pc"
                    className="mx-4 flex w-[120px] items-center justify-center py-5 2xl:w-[150px]"
                  />
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={zain}
                    alt="zain"
                    className="mx-4 flex w-[120px] items-center justify-center py-5 2xl:w-[150px]"
                  />
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={yasra}
                    alt="yasra"
                    className="mx-4 flex w-[120px] items-center justify-center py-5 2xl:w-[150px]"
                  />
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={bgc}
                    alt="bgc"
                    className="mx-4 flex w-[120px] items-center justify-center py-5 2xl:w-[150px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

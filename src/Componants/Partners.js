import shell from "../static/images/shell.png";
import ke from "../static/images/KE.png";
import pc from "../static/images/pc.png";
import yasra from "../static/images/yasra.png";
import zain from "../static/images/zain.png";
import iom from "../static/images/IOM.svg";

export default function Partners() {
  return (
    <div id="partners" className="container mx-auto">
      <p className="ml-12 py-2 text-3xl font-semibold text-slate-700">
        Our Major Clintes
      </p>
      <section className="bg-white py-20 lg:py-[20px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex items-center justify-center overflow-x-auto touch MagicScroll">
                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="mx-4 flex w-[100px] items-center justify-center py-5 2xl:w-[100px]"
                  >
                    <img src={iom} alt="image" className=" w-full" />
                  </a>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="mx-4 flex w-[100px] items-center justify-center py-5 2xl:w-[200px]"
                  >
                    <img src={ke} alt="image" className="w-full" />
                  </a>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="mx-4 flex w-[100px] items-center justify-center py-5 2xl:w-[200px]"
                  >
                    <img src={pc} alt="image" className=" w-full" />
                  </a>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="mx-4 flex w-[100px] items-center justify-center py-5 2xl:w-[140px]"
                  >
                    <img src={zain} alt="image" className=" w-full" />
                  </a>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#"
                    className="mx-4 flex w-[100px] items-center justify-center py-5 2xl:w-[130px]"
                  >
                    <img src={yasra} alt="image" className=" w-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

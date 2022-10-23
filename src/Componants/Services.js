import infinity from "../static/images/Infinity.png";
import dots from "../static/images/dots.png";
import iso from "../static/images/iso.png";

export default function Services() {
  return (
    <div className="flex flex-col bg-[#F1F2F4] mt-2 px-6 mx-auto space-y-6">
      <div className="flex flex-row">
        <p className="text-2xl text-slate-800 font-semibold mt-8">About Us</p>
        <img
          className="absolute right-0 w-36"
          src={infinity}
          alt="infinit insurance"
        />
      </div>

      <div className="flex flex-row items-center justify-center ml-16 z-10">
        <img className="w-36" src={dots} alt="infinit insurance" />
        <p className="text-md text-slate-500 font-semibold ml-4 w-[38%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, sum
        </p>
      </div>

      <div className="flex flex-row items-center justify-center ml-16 relative z-0 ">
        <img className="w-[35%] -mt-14" src={iso} alt="infinit insurance" />
        <p className="text-md text-slate-500 font-semibold ml-16 pr-16 w-[55%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
}

import { mo1 } from "./projects/imports";

const Card = () => {
  return (
    <div
      id="card"
      className=" flex flex-col md:flex-row md:gap-5 justify-center items-center padding-section"
    >
      <div className=" flex flex-col items-center font-Playfair mb-12 bg-gradient-to-r from-[#4E4FEB] via-[#EEEEEE] to-[#068FFF] text-transparent bg-clip-text">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-5">
          Desiging isn't a Job
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl mb-5">
          It's a Way of Life
        </h2>
        <a href="#" className="text-black font-bold">
          <button className="px-8 py-5 bg-gradient-to-t rounded-full text-xl md:text-3xl lg:text-4xl mt-5">
            Get 15% Off<div className="dot"></div>
          </button>
        </a>
      </div>
      <div className=" md:w-1/3">
        <img
          className="rounded-md max-w-full max-h-full"
          src={mo1}
          alt="Mohamad Shahbandar"
        />
      </div>
    </div>
  );
};

export default Card;

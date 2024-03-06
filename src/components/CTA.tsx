const Cta = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-start padding-section">
      <div className="font-Playfair items-start h-60
      bg-gradient-to-r from-[#068FFF] to-[#4E4FEB] inline-block text-transparent bg-clip-text
      ">
          <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold mb-5">
            Desiging isn't a job
          </h1>
          <h2 className=" text-5xl mb-[8rem] text-white">it's a way of Life</h2>
          <a href="#" className="text-stone-800 ">
            <button className=" px-20 py-7 bg-slate-50 rounded-full text-4xl">
              Let's Talk
            </button>
          </a>
      </div>
      <div className="flex items-start justify-start">
        <img
          className="rounded-md w-[25rem] h-[25rem]"
          src="/public/mo1.webp"
          alt="Mohamad Shahbandar"
        />
      </div>
    </div>
  );
};

export default Cta;

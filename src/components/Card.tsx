const Card = () => {
  return (
    <div id="card" className="padding-section my-16">
      <div className="text-center bg-[#EEE] rounded-lg p-7 md:p-16">
        <h1 className="font-Playfair text-5xl md:text-7xl lg:text-9xl font-bold text-black mb-10">
          Let's discuss your project together.
        </h1>
        <p className="font-Playfair text-xl md:text-4xl lg:text-5xl font-bold mb-16">
          I will be happy to help you
        </p>
        <a
          href="https://wa.me/963998934803"
          target="_blank"
          className="p-3 rounded-full bg-[#28d368] text-xl md:text-2xl lg:text-3xl"
        >
          <button>Click to Chat</button>
        </a>
      </div>
    </div>
  );
};

export default Card;

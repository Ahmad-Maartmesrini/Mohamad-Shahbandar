const Card = () => {
  return (
    <div id="card" className="font-Playfair padding-section my-16">
      <div className="text-center bg-[#EEE] rounded-lg p-7 md:p-16">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-black mb-10">
          Let's discuss your project together.
        </h1>
        <p className="text-xl md:text-4xl lg:text-5xl font-bold mb-16">
          I will be happy to help you
        </p>
        <a
          href="https://wa.me/963998934803"
          target="_blank"
          className="p-3 md:p-5 rounded-full bg-[hsl(142,68%,49%)] hover:bg-[hsl(145,70%,40%)] text-xl md:text-2xl lg:text-3xl"
        >
          <button>Click to Chat</button>
        </a>
      </div>
    </div>
  );
};

export default Card;

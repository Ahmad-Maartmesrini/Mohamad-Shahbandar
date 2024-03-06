// import { Trc } from "../components/ui/TRC/Trc";
import { BackgroundGradientAnimation } from "../components/ui/background/background-gradient-animation";

// <Trc />
const Hero = () => {
  return (
    <div id="home" className="">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold pointer-events-none">
          <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/20 to-white/80 md:text-7xl text-5xl lg:text-9xl text-center font-bold">
            Mohmad Shahbandar
          </h1>
          <h2 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-xl md:text-4xl lg:text-5xl">
            Graphic Designer
          </h2>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;

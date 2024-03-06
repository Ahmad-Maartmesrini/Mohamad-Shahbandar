// import { Trc } from "../components/ui/TRC/Trc";
import { BackgroundGradientAnimation } from "../components/ui/background/background-gradient-animation";

// <Trc />
const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold pointer-events-none ">
        <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/20 to-white/80 text-3xl md:text-6xl lg:text-8xl">
          Mohmad Shahbandar
        </h1>
        <h2 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-xl md:text-4xl lg:text-5xl">
          Graphic Designer
        </h2>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Hero;

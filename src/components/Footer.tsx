import { LampDemo } from "./ui/lamp/LampDemo";

const Footer = () => {
  const year = () => new Date().getFullYear();
  return (
    <>
      <LampDemo />
      <div className="flex justify-center items-center flex-col  bg-[#010516] pb-5">
        <div className="flex justify-between items-center text-gray-400 hover:text-white gap-10 md:gap-40 mb-10">
          <a href="https://www.instagram.com/mo_shahbandar" target="_blank">
            Instgram
          </a>
          <a
            href="https://www.facebook.com/mohamad.shahbandar.33"
            target="_blank"
          >
            Facebood
          </a>
          <a href="https://wa.me/963998934803" target="_blank">
            WhatsApp
          </a>
        </div>
        <small className="text-white text-xs">
          &#9400;{year()} Mohamad Shahbandar - All RIGHT RECVED
        </small>
      </div>
    </>
  );
};

export default Footer;

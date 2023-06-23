import BackgroundImg from "../../../assets/kendra.jpg";
import KendraLogo from "../../../../public/kendra.png";

export default function HeroSection() {
  return (
    <div className="h-[80vh] flex flex-col mb-10">
      <img
        src={BackgroundImg}
        alt="background-img"
        className="-z-10 absolute left-0 right-0 w-full h-[80vh] object-cover"
      />
      <div className="grow flex flex-col md:justify-normal md:flex-row justify-center md:items-center mt-10 gap-y-8 gap-x-5">
        <img
          src={KendraLogo}
          alt="kendramotion logo"
          className="w-[100px] md:w-[100px] lg:w-[300px] lg:h-[300px] object-contain"
        />
        <div>
          <h1 className="text-white text-4xl font-semibold mb-3">
            Kendra Motion Pictures
          </h1>
          <p className="text-white text-xl leading-relaxed">
            An experimental video production company,
            <br /> impacting the ethical side of the soul via music
          </p>
        </div>
      </div>
    </div>
  );
}

import BackgroundImg from "../../../assets/kendra.jpg";
import Navbar from "../../../components/Navbar/Navbar";

export default function HeroSection() {
  return (
    <div className="h-[80vh] flex flex-col mb-10">
      <img
        src={BackgroundImg}
        alt="background-img"
        className="-z-10 absolute left-0 right-0 w-full h-[80vh] object-cover"
      />
      {/* <Navbar /> */}
      <div className="grow flex flex-col justify-center -mt-40">
        <h1 className="text-white text-4xl font-semibold mb-3">
          Kendra Motion Pictures
        </h1>
        <p className="text-white text-xl leading-relaxed">
          An experimental video production company,
          <br /> impacting the ethical side of the soul via music
        </p>
      </div>
    </div>
  );
}

import phone from "../../assets/phone.png";
import Button from "../../components/Button/Button";

export default function WantToBeNext() {
  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 items-center bg-gray-200 shadow-lg my-24 rounded-md gap-y-8">
      <div>
        <img
          src={phone}
          alt="phone-image"
          className="object-fill h-[350px] w-full lg:h-auto"
        />
      </div>

      <div className="flex flex-col gap-y-8">
        <h1 className="font-bold text-gray-800 text-5xl text-center lg:text-start">
          Do you want to be next?
        </h1>

        <div className="flex flex-col gap-y-3">
          <p className="text-xl text-gray-700">
            Fill the form with necessary details and get featured in Kendra
            motion&apos;s music video.
          </p>
          <p className="text-gray-700 ">
            Send us your audition showing us the potential that you bear, and
            explore the industry with us
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Button>Fill The Form</Button>
        </div>
      </div>
    </div>
  );
}

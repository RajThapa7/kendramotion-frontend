import Button from "../Button/Button";
import Title from "../Title/Title";
import SocialIcons from "../SocialIcons/SocialIcons.jsx";

export default function Feedback() {
  return (
    <div className=" w-full shadow-lg px-6 md:px-10 pb-10 pt-2">
      <Title className="mb-6">Feedback</Title>
      <div className="flex flex-col gap-y-6">
        <input
          type="text"
          name=""
          id=""
          className="px-3 py-3 focus:ring-blue-400 outline-none ring-2 rounded-sm text-gray-800 ring-gray-300"
          placeholder="Enter your name"
        />
        <input
          type="text"
          name=""
          id=""
          className="px-3 py-3 focus:ring-blue-400 outline-none ring-2 rounded-sm text-gray-800 ring-gray-300"
          placeholder="Enter your email"
        />
        <textarea
          name=""
          id=""
          className="px-3 py-3 focus:ring-blue-400 outline-none ring-2 rounded-sm text-gray-800 ring-gray-300"
          placeholder="Enter your feedback here"
          rows={4}
        />
      </div>
      <Button className={"mt-8"}>Submit</Button>
    </div>
  );
}

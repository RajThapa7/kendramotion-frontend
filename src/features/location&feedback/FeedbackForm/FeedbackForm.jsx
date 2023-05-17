import Button from "../../../components/Button/Button";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import classNames from "../../../utils/classNames";

export default function FeedbackForm({ className }) {
  return (
    <div
      className={classNames(className, "shadow-lg px-6 md:px-10 pb-10 pt-4")}
    >
      <SectionHeader className="mb-6">Feedback</SectionHeader>
      <div className="flex flex-col gap-8">
        <input
          className="border border-black py-3 px-5 w-full max-w-sm bg-gray-100"
          placeholder="Enter Your Name"
        />
        <input
          className="border border-black py-3 px-5 w-full max-w-sm bg-gray-100"
          placeholder="Enter Your Email"
        />
        <textarea
          className="border border-black py-4 px-5 w-full max-w-sm bg-gray-100"
          placeholder="Enter Your Feedback here"
          rows={4}
        />
        <Button className="max-w-sm mt-10">Submit</Button>
      </div>
    </div>
  );
}

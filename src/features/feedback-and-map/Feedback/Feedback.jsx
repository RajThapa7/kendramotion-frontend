import { useState } from "react";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";
import useSubmitFeedback from "../api/useSubmitFeedback";
import { toast } from "react-toastify";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const feedbackMutation = useSubmitFeedback();

  const handleSubmit = (e) => {
    e.preventDefault();
    feedbackMutation.mutate(
      { name, email, feedback },
      {
        onSuccess: () => {
          toast.success("Feedback submitted successfully");
        },
        onError: () => {
          toast.error("Something went wrong.");
        },
        onSettled: () => {
          setName("");
          setEmail("");
          setFeedback("");
        },
      }
    );
  };

  return (
    <div className="w-full shadow-lg px-6 md:px-10 pb-10 pt-2">
      <form onSubmit={handleSubmit}>
        <Title className="mb-6">Feedback</Title>
        <div className="flex flex-col gap-y-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={3}
            maxLength={40}
            type="text"
            className="px-3 py-3 focus:ring-blue-400 outline-none ring-2 rounded-sm text-gray-800 ring-gray-300"
            placeholder="Enter your name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="px-3 py-3 focus:ring-blue-400 outline-none ring-2 rounded-sm text-gray-800 ring-gray-300"
            placeholder="Enter your email"
          />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            minLength={10}
            maxLength={300}
            className="px-3 py-3 focus:ring-blue-400 outline-none ring-2 rounded-sm text-gray-800 ring-gray-300"
            placeholder="Enter your feedback here"
            rows={4}
          />
        </div>
        <Button type="submit" className={"mt-8"}>
          Submit
        </Button>
      </form>
    </div>
  );
}

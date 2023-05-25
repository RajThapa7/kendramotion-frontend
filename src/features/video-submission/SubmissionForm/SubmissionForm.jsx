import { useState } from "react";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import useSubmitAudition from "../api/useSubmitAudition";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export default function SubmissionForm({ isFormOpen, setIsFormOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const mutation = useSubmitAudition();

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setVideoUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(
      { name, email, phoneNumber, videoUrl },
      {
        onSuccess: () => {
          setIsFormOpen(false);
          resetForm();
          toast.success("Your audition has been submitted successfully");
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error(
              error.response?.data?.message || "Something went wrong"
            );
          }
        },
      }
    );
  };

  return (
    <Modal isOpen={isFormOpen} closeModal={() => setIsFormOpen(false)}>
      <div className="bg-white w-[600px] px-10 py-5 rounded-md">
        <h3 className="text-2xl font-medium mb-5">Send your audition</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Provide your full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-5 border-2 border-gray-500 px-5 py-2 w-full"
            maxLength={30}
            minLength={3}
          />
          <input
            placeholder="Provide your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="mb-5 border-2 border-gray-500 px-5 py-2 w-full"
          />
          <input
            placeholder="Provide your phone number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="mb-5 border-2 border-gray-500 px-5 py-2 w-full"
            minLength={10}
            maxLength={10}
          />
          <input
            placeholder="Provide your youtube url"
            name="videoUrl"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            type="text"
            className="mb-2 border-2 border-gray-500 px-5 py-2 w-full"
            minLength={5}
            max={100}
          />
          <p className="text-gray-700 mb-5 text-sm">
            Note: Please upload your video on YouTube and provide us the video
            url. Make sure the video is not private.
          </p>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Modal>
  );
}

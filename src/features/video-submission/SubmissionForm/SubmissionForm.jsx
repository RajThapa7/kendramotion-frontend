import { useState } from "react";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/Modal/Modal";
import useSubmitAudition from "../api/useSubmitAudition";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import UploadVideo from "../components/UploadVideo/UploadVideo";
import { useEffect } from "react";
import UploadPDF from "../components/UploadPDF/UploadPDF";

export default function SubmissionForm({ isFormOpen, setIsFormOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [file, setFile] = useState();
  const [videoFile, setVideoFile] = useState();
  const [error, setError] = useState();

  const mutation = useSubmitAudition();

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setFile();
    setVideoFile();
  };

  const checkIfFormIsValid = () => {
    if (!file || !videoFile) {
      setError("Please upload required files");
    } else {
      setError();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !videoFile) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("document", file);
    formData.append("video", videoFile);

    mutation.mutate(formData, {
      onSuccess: () => {
        setIsFormOpen(false);
        resetForm();
        toast.success("Your audition has been submitted successfully", {
          autoClose: false,
        });
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "Something went wrong");
        }
      },
    });
  };

  return (
    <Modal
      isOpen={isFormOpen}
      closeModal={() => {
        if (mutation.isLoading) return;
        setIsFormOpen(false);
      }}
    >
      <div className="bg-white w-[600px] px-10 py-5 rounded-md">
        <h3 className="text-2xl font-medium mb-5">Send your audition</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Provide your full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-5 border-2 border-gray-500 px-5 py-2 w-full"
            required
            maxLength={30}
            minLength={3}
          />
          <input
            placeholder="Provide your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            required
            className="mb-5 border-2 border-gray-500 px-5 py-2 w-full"
          />
          <input
            placeholder="Provide your phone number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="mb-5 border-2 border-gray-500 px-5 py-2 w-full"
            required
            minLength={10}
            maxLength={10}
          />
          <UploadVideo onChange={(file) => setVideoFile(file)} />
          <UploadPDF onChange={(file) => setFile(file)} />
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <p className="mb-3 text-gray-700">
            Submitting the form might take some time depending on your internet
            connection
          </p>
          <Button
            loading={mutation.isLoading}
            onClick={checkIfFormIsValid}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
}

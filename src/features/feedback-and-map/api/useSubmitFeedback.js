import { useMutation } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const submitFeedback = async (formData) => {
  const api = createApi();

  const response = await api.post("/feedback", formData);
  return response.data;
};

const useSubmitFeedback = () => {
  const mutation = useMutation({ mutationFn: submitFeedback });
  return mutation;
};

export default useSubmitFeedback;

import { useMutation } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const createSubmission = async (data) => {
  const api = createApi();
  const response = await api.post("/submission", data);

  return response;
};

const useSubmitAudition = () => {
  const mutation = useMutation({ mutationFn: createSubmission });
  return mutation;
};

export default useSubmitAudition;

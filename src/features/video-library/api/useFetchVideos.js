import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const fetchVideos = async () => {
  const api = createApi();

  const response = await api.get("/video");
  return response.data;
};

const useFetchVideos = () => {
  const query = useQuery({ queryKey: ["videos"], queryFn: fetchVideos });
  return query;
};

export default useFetchVideos;

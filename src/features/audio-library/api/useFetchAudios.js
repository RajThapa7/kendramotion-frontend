import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const fetchAudios = async () => {
  const api = createApi();

  const response = await api.get("/song");
  return response.data;
};

const useFetchAudios = () => {
  const query = useQuery({ queryKey: ["song"], queryFn: fetchAudios });
  return query;
};

export default useFetchAudios;

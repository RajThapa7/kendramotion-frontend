import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const fetchMovies = async () => {
  const api = createApi();

  const response = await api.get("/movie");
  return response.data;
};

const useFetchMovies = () => {
  const query = useQuery({ queryKey: ["movie"], queryFn: fetchMovies });
  return query;
};

export default useFetchMovies;

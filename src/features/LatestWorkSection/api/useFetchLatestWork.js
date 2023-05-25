import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const fetchLatestWork = async () => {
  const api = createApi();
  const response = await api.get("/latest-work");

  return response.data;
};

export default function useFetchLatestWork() {
  const query = useQuery({
    queryKey: ["latest-work"],
    queryFn: fetchLatestWork,
  });

  return query;
}

import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

async function fetchArtist(id) {
  const api = createApi();
  const response = await api.get(`artist-profile/${id}`);
  return response.data;
}

function useFetchArtist(id) {
  const query = useQuery({
    queryKey: ["artists", id],
    queryFn: () => fetchArtist(id),
    enabled: !!id,
  });

  return query;
}

export default useFetchArtist;

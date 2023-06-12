import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

async function fetchArtists() {
  const api = createApi();
  const response = await api.get("artist-profile");
  return response.data;
}

function useFetchArtists() {
  const query = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  return query;
}

export default useFetchArtists;

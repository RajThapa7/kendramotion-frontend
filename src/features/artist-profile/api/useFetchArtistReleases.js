import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

async function fetchArtistReleases(id) {
  const api = createApi();

  const response = await api.get(`/artist-profile/latest/${id}`);
  return response.data;
}

export default function useFetchArtistReleases(id) {
  const query = useQuery({
    queryKey: ["artist-profile", "releases", id],
    queryFn: () => fetchArtistReleases(id),
    enabled: !!id,
  });

  return query;
}

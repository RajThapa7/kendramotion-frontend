import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSpotifyImageLink = async (url) => {
  const array = url.split("/");
  const id = array.at(-1); //id of the song
  const type = array.at(-2); //check wether track or album

  const result = await axios.get(
    `https://open.spotify.com/oembed?url=spotify:${type}:${id}`
  );
  return result;
};

const useFetchSpotifyLink = (url, isEnabled) => {
  const result = useQuery({
    queryFn: () => getSpotifyImageLink(url),
    queryKey: [url, "spotify"],
    enabled: isEnabled,
  });

  return result.data;
};

export default useFetchSpotifyLink;

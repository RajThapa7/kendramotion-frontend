import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const getCarouselData = async () => {
  const api = createApi();
  const result = await api.get("/banner");
  return result.data;
};

const useFetchCarouselData = () => {
  const result = useQuery({
    queryFn: () => getCarouselData(),
    queryKey: ["bannerList"],
    cacheTime: 15 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
  });
  return result.data;
};

export default useFetchCarouselData;

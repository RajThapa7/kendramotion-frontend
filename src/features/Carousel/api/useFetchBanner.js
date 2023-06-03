import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const getBannerList = async () => {
  const api = createApi();
  const result = await api.get("/banner");
  return result.data;
};

const useFetchBannerList = () => {
  const result = useQuery({
    queryFn: () => getBannerList(),
    queryKey: ["bannerList"],
    cacheTime: 15 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
  });
  return result.data;
};

export default useFetchBannerList;

import { useQuery } from "@tanstack/react-query";
import createApi from "../../../api/createApi";

const getTeamMembers = async () => {
  const api = createApi();
  const result = await api.get("/member");
  return result;
};

const useFetchTeamMembers = () => {
  const result = useQuery({
    queryFn: () => getTeamMembers(),
    queryKey: ["teamMembers"],
  });
  return result;
};

export default useFetchTeamMembers;

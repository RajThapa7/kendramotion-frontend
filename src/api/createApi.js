import axios from "axios";

const createApi = () => {
  // base url for the api
  let url = import.meta.env.VITE_BASE_URL + "/api/v1";
  // let url = "https://kendramotion-backend.onrender.com/api/v1";

  const api = axios.create({
    baseURL: url,
  });

  return api;
};

export default createApi;

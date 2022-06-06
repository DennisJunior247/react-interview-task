import axios from "axios";

const url = process.env.API_URL || "https://auth-test-api-techinnover.herokuapp.com/api/v1/";
const api = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("access_token");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

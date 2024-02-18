import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`,
  },
});

export default function sendRequest(config: AxiosRequestConfig) {
  return instance.request(config).then((res) => res.data);
}

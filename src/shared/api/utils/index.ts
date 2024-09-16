import axios from "axios";

export const BASE_URL = {
  local: "http://localhost:3000/api",
};

export const getBaseUrl = () => {
  return BASE_URL.local;
};

export const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

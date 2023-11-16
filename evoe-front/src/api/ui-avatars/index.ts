import axios from "axios";

export const api = axios.create({
  baseURL: "https://ui-avatars.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

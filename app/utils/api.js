import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "content-type": "multipart/form-data",
  },
});

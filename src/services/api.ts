import axios from "axios";
export const instance = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

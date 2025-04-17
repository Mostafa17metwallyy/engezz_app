import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.20.10.5:5000/api", // 👈 Replace this with YOUR real IP
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

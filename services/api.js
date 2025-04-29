import axios from "axios";

const instance = axios.create({
  baseURL: "http://172.20.10.5:3000", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;

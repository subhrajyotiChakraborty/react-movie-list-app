import axios from "axios";

const instance = axios.create({
  baseURL: "https://node-movie-app-v1.netlify.app/api/",
});

export default instance;

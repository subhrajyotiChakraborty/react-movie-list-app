import axios from "axios";

const instance = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=`,
});

export default instance;

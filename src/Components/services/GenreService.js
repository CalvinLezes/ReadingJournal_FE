import axios from "axios";

const API_URL = "http://localhost:8080/api/genres/";

function getGenres() {
  return axios.get(API_URL);
};

const genreApi = {
    getGenres,
}
export default genreApi;
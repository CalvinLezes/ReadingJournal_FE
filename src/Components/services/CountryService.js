import axios from "axios";

const API_URL = "http://localhost:8080/api/countries/";

function getCountries() {
  return axios.get(API_URL);
}

const countryApi = {
  getCountries,
};

export default countryApi;

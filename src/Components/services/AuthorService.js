import axios from "axios";

const API_URL = "http://localhost:8080/api/authors/";

function getAuthors() {
  return axios.get(API_URL);
}

function getAuthorNames() {
  return axios.get(API_URL + "names");
}

function getAuthorById(authorId) {
  return axios.get(API_URL + authorId);
}

function addNewAuthor(authorData) {
  return axios.post(API_URL, authorData);
}

function editAuthor(authorData, authorId) {
  return axios.put(API_URL + authorId, authorData);
}

function deleteAuthor(authorId) {
  return axios.delete(API_URL + authorId);
}

const authorApi = {
  getAuthors,
  getAuthorById,
  getAuthorNames,
  addNewAuthor,
  editAuthor,
  deleteAuthor,
};

export default authorApi;

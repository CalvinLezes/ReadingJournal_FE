import axios from "axios";

const API_URL = "http://localhost:8080/api/books/";

function getBooks() {
  return axios.get(API_URL);
}

function getBookTitles() {
  return axios.get(API_URL + "titles");
}

function getBookById(bookId) {
  return axios.get(API_URL + bookId);
}

function addNewBook(bookData) {
  return axios.post(API_URL, bookData);
}

function editBook(bookData, bookId) {
  return axios.put(API_URL + bookId, bookData);
}

function deleteBook(bookId) {
  return axios.delete(API_URL + bookId);
}

function getAllTimeStats(){
    return axios.get(API_URL +"stats");
}

function getMonthStats(month){
    return axios.get(API_URL +"stats/"+ month);
}

const bookApi = {
  getBooks,
  getBookTitles,
  getBookById,
  getAllTimeStats,
  getMonthStats,
  addNewBook,
  editBook,
  deleteBook,
};

export default bookApi;

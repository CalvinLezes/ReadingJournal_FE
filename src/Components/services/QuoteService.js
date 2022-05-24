import axios from "axios";

const API_URL = "http://localhost:8080/api/quotes/";

function getQuotes() {
  return axios.get(API_URL);
};

function getQuoteById (quoteId){
  return axios.get(API_URL + quoteId);
};

function getQuotesByBookId (bookId){
    return axios.get(API_URL + "book/"+bookId);
  };

function addNewQuote (quoteData) {
  return axios.post(API_URL, quoteData);
};

function editQuote (quoteData, quoteId) {
  return axios.put(API_URL + quoteId, quoteData);
};

function deleteQuote (quoteId) {
  return axios.delete(API_URL + quoteId);
};

const quoteApi = {
  getQuotes,
  getQuoteById,
  getQuotesByBookId,
  addNewQuote,
  editQuote,
  deleteQuote,
};

export default quoteApi;

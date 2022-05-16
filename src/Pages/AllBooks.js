import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../Components/books/BookList";
import classes from "./AddButton.module.css"

function AllBooksPage() {
  const navigate = useNavigate();
  function AddBookHandler(){
    navigate("/NewBook", { replace: true })
  }
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:8080/api/books").then((resp) => {
      console.log(resp);
      setIsLoading(false);
      setLoadedBooks(resp.data);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Books</h1>
      <button className={classes.add_btn} onClick={AddBookHandler}>Add New Book</button>
      <BookList books={loadedBooks} />
    </section>
  );
}

export default AllBooksPage;

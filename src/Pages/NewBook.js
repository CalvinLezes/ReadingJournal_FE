import axios from "axios";
import { useNavigate } from "react-router-dom";
import NewBookForm from "../Components/books/NewBookForm";

function NewBookPage() {
  const navigate = useNavigate();

  function addBookHandler(bookData) {
    axios.post("http://localhost:8080/api/books", bookData).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New Book</h1>
      <NewBookForm onAddBook={addBookHandler} />
    </section>
  );
}

export default NewBookPage;

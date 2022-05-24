import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewBookForm from "../../Components/books/NewBookForm";
import authorApi from "../../Components/services/AuthorService";
import bookApi from "../../Components/services/BookService";
import genreApi from "../../Components/services/GenreService";

function NewBookPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedAuthors, setLoadedAuthors] = useState([]);
  const [loadedGenres, setLoadedGenres] = useState([])

  useEffect(() => {
    setIsLoading(true);
    authorApi.getAuthorNames().then((resp) => {
      setLoadedAuthors(resp.data);
    });
    genreApi.getGenres().then((resp) => {
      setIsLoading(false);
      setLoadedGenres(resp.data);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  function addBookHandler(bookData) {
    console.log(bookData);
    bookApi.addNewBook(bookData).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Добавить новую книгу</h1>
      <NewBookForm onAddBook={addBookHandler} authors={loadedAuthors} genres={loadedGenres}/>
    </section>
  );
}

export default NewBookPage;

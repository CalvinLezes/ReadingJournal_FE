import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditBookForm from "../../Components/books/EditBookForm";
import authorApi from "../../Components/services/AuthorService";
import bookApi from "../../Components/services/BookService";
import genreApi from "../../Components/services/GenreService";
import Loading from "../Loading";

function EditBookPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedAuthors, setLoadedAuthors] = useState([]);
  const [loadedGenres, setLoadedGenres] = useState([]);
  const [currentBook, setCurrentBook] = useState();

  const {bookId} = useParams();

  useEffect(() => {
    setIsLoading(true);
    bookApi.getBookById(bookId).then((resp)=>{
        setIsLoading(false);
        console.log(resp.data);
        setCurrentBook(resp.data);
    })
    authorApi.getAuthorNames().then((resp) => {
        console.log(resp.data);
      setLoadedAuthors(resp.data);
    });
    genreApi.getGenres().then((resp) => {
        console.log(resp.data);
      
      setLoadedGenres(resp.data);
    });
  }, [bookId]);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  function editBookHandler(bookData) {
    console.log(bookData);
    bookApi.editBook(bookData,bookId).then(() => {
      navigate("/", { replace: true });
    });
  }
  
  return (
    <section>
      <h1>Изменить информацию о книге</h1>
      <EditBookForm onAddBook={editBookHandler} authors={loadedAuthors} genres={loadedGenres} book={currentBook}/>
    </section>
  );
}

export default EditBookPage;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookInfo from "../../Components/books/BookInfo";
import bookApi from "../../Components/services/BookService";
import Loading from "../Loading";

function BookInfoPage() {
    const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentBook, setCurrentBook] = useState();

  const { bookId } = useParams();

  function DeleteBook(bookId) {
    bookApi.deleteBook(bookId).then(() => {
      navigate("/",{replace:true});
    });
  }

  useEffect(() => {
    setIsLoading(true);
    console.log(bookId);
    bookApi.getBookById(bookId).then((resp) => {
      console.log(resp.data);
      setIsLoading(false);
      setCurrentBook(resp.data);
    });
  }, [bookId]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <BookInfo
        onDeleteBook={DeleteBook}
        book={currentBook}
      />
    </section>
  );
}

export default BookInfoPage;

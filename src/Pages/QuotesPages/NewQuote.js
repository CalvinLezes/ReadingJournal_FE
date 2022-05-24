import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewQuoteForm from "../../Components/quotes/NewQuoteForm";
import bookApi from "../../Components/services/BookService";
import quoteApi from "../../Components/services/QuoteService";
import Loading from "../Loading";

function NewQuotePage() {
  const navigate = useNavigate();

  function addQuoteHandler(quoteData) {
    quoteApi.addNewQuote(quoteData).then(() => {
      navigate(-1, { replace: true });
    });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    bookApi.getBookTitles().then((resp) => {
      setIsLoading(false);
      setLoadedBooks(resp.data);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <h1>Добавить цитату</h1>
      <NewQuoteForm onAddQuote={addQuoteHandler} books={loadedBooks} />
    </section>
  );
}

export default NewQuotePage;

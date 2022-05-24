import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditQuoteForm from "../../Components/quotes/EditQuoteForm";
import bookApi from "../../Components/services/BookService";
import quoteApi from "../../Components/services/QuoteService";
import Loading from "../Loading";

function EditQuotePage() {
  const navigate = useNavigate();
  function editQuoteHandler(quoteData) {
    quoteApi.editQuote(quoteData, quote_id).then(() => {
      navigate("/quotes", { replace: true });
    });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedBooks, setLoadedBooks] = useState([]);
  const [currentQuote, setcurrentQuote] = useState();

  const { quote_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    bookApi.getBookTitles().then((resp) => {
      setLoadedBooks(resp.data);
    });
    quoteApi.getQuoteById(quote_id).then((resp) => {
      setIsLoading(false);
      setcurrentQuote(resp.data);
    });
  }, [quote_id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <h1>Изменить цитату</h1>
      <EditQuoteForm
        onEditQuote={editQuoteHandler}
        books={loadedBooks}
        quote={currentQuote}
      />
    </section>
  );
}

export default EditQuotePage;

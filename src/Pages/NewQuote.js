import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewQuoteForm from "../Components/quotes/NewQuoteForm";

function NewQuotePage() {
  const navigate = useNavigate();

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

  function addQuoteHandler(quoteData) {
    axios.post("http://localhost:8080/api/quotes", quoteData).then(() => {
      navigate("/quotes", { replace: true });
    });
  }
  
  return (
    <section>
      <h1>Add New Quote</h1>
      <NewQuoteForm onAddQuote={addQuoteHandler} books={loadedBooks}/>
    </section>
  );
}

export default NewQuotePage;

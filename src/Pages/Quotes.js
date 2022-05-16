import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuoteList from "../Components/quotes/QuoteList";
import classes from "./AddButton.module.css"

function QuotesPage() {
  const navigate = useNavigate();
  function AddQuoteHandler(){
    navigate("/NewQuote", { replace: true })
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedQuotes, setLoadedQuotes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:8080/api/quotes").then((resp) => {
      console.log(resp);
      setIsLoading(false);
      setLoadedQuotes(resp.data);
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
      <h1>Your Quotes </h1> <button className={classes.add_btn} onClick={AddQuoteHandler}>Add New Quote</button>
      <QuoteList quotes={loadedQuotes} />
    </section>
  );
}

export default QuotesPage;

import { useEffect, useState } from "react";
import Loading from "../../Pages/Loading";
import quoteApi from "../services/QuoteService";
import List from "../ui/List";
import AddQuoteButton from "./buttons/AddQuoteButton";
import QuoteItem from "./QuoteItem";

function QuoteList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedQuotes, setLoadedQuotes] = useState([]);

  function DeleteQuote(quoteId) {
    quoteApi.deleteQuote(quoteId).then(() => {
      setLoadedQuotes((oldQuotes) => {
        return oldQuotes.filter((quote) => {
          return quote.quoteId !== quoteId;
        });
      });
    });
  }

  useEffect(() => {
    setIsLoading(true);
    if (props.bookId === 0) {
      quoteApi.getQuotes().then((resp) => {
        setIsLoading(false);
        setLoadedQuotes(resp.data);
      });
    } else {
      quoteApi.getQuotesByBookId(props.bookId).then((resp) => {
        setIsLoading(false);
        setLoadedQuotes(resp.data);
      });
    }
  }, [props.bookId]);

  if (isLoading) {
    return <Loading />;
  }

  if (loadedQuotes.length === 0) {
    return (
      <List>
        <h5>У вас нет цитат</h5>
        <h5>Добавьте первую цитату</h5>
        <AddQuoteButton />
      </List>
    );
  }
  return (
    <List>
      {loadedQuotes.map((quote) => (
        <QuoteItem
          key={quote.quoteId}
          id={quote.quoteId}
          text={quote.text}
          book={quote.bookTitle}
          onDelete={DeleteQuote}
        />
      ))}
    </List>
  );
}

export default QuoteList;

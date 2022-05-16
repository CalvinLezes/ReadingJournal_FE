import List from "../ui/List";
import QuoteItem from "./QuoteItem";

function QuoteList(props) {
  return (
    <List>
      {props.quotes.map((quote) => (
        <QuoteItem
          key={quote.id}
          id={quote.id}
          text={quote.text}
          book={quote.book.title}
        />
      ))}
    </List>
  );
}

export default QuoteList;

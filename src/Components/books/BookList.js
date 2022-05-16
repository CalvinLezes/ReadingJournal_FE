import List from "../ui/List";
import BookItem from "./BookItem";

function BookList(props) {
  return (
    <List>
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          id={book.id}
          title={book.title}
          rating={book.rating}
          date={book.readDate}
          feedback={book.feedback}
        />
      ))}
    </List>
  );
}

export default BookList;

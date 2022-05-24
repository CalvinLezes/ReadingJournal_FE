import List from "../ui/List";
import BookItem from "./BookItem";

function BookList(props) {
  return (
    <List>
      {props.books.map((book) => (
        <BookItem
          key={book.bookId}
          id={book.bookId}
          title={book.title}
          rating={book.rating}
          date={book.readDate}
          feedback={book.feedback}
          authors={book.authors.map((author)=>{
            return author.name;
          })}
          genres={book.genres.map((genre)=>{
            return genre.name;
          })}
          series={book.seriesName}
          idInSeries={book.idInSeries}
          onDelete={props.onDelete}
        />
      ))}
    </List>
  );
}

export default BookList;

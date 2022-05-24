import { useNavigate } from "react-router-dom";
import QuoteList from "../quotes/QuoteList";
import Card from "../ui/Card";
import classes from "../ui/Item.module.css";

function BookInfo(props) {
  const navigate = useNavigate();

  function editBookHandler() {
    navigate("/editBook/" + props.book.bookId, { replace: true });
  }

  function deleteHandler(){
      props.onDeleteBook(props.book.bookId);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h1>{props.book.title}</h1>
          <h2>
            {props.book.authors.length === 1 ? "Автор: " : "Авторы: "}
            {props.book.authors.map((author) => {
              return author.name;
            })}
          </h2>
          <h3>
            Жанры:{" "}
            {props.book.genres.map((genre) => {
              return genre.name;
            })}
          </h3>
          <h4>Дата прочтения: {props.book.readDate}</h4>
          <h4>Ваша оценка: {props.book.rating}</h4>
          <h4>Ваш отзыв:</h4>
          <p>{props.book.feedback}</p>
          <h4>Ваши цитаты из этой книги:</h4>
          <QuoteList bookId={props.book.bookId} />

          <button onClick={editBookHandler}>Изменить</button>
          <button onClick={deleteHandler}>Удалить</button>
        </div>
      </Card>
    </li>
  );
}

export default BookInfo;

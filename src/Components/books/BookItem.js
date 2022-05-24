import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import classes from "../ui/Item.module.css";

function BookItem(props) {
  const navigate = useNavigate();

  function deleteHandler() {
    props.onDelete(props.id);
  }

  function bookInfoHandler() {
    navigate("/books/" + props.id, { replace: true });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h2>{props.authors}</h2>
          <h3>{props.genres}</h3>
          <h4>{props.date}</h4>
        </div>
        <div className={classes.actions}>
          <button onClick={bookInfoHandler}>Подробнее</button>
        </div>
        <div className={classes.actions}>
          <button onClick={deleteHandler}>Удалить</button>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;

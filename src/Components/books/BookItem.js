import Card from "../ui/Card";
import classes from "../ui/Item.module.css";

function BookItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h4>{props.date}</h4>
          <h2>{props.rating}</h2>
          <p>{props.feedback}</p>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;

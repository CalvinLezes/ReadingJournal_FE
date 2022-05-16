import Card from "../ui/Card";
import classes from "../ui/Item.module.css";

function AuthorItem(props) {
  function showMoreHandler() {}
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>
            {props.name} {props.surname}
          </h3>
          <div className={classes.actions}>
            <button onClick={showMoreHandler}>Show more</button>
          </div>
          {/* <h4>{props.country}</h4> */}
        </div>
      </Card>
    </li>
  );
}

export default AuthorItem;

import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import classes from "../ui/Item.module.css";

function AuthorItem(props) {
  const navigate = useNavigate();
  function showMoreHandler() {
    navigate("/authors/"+props.id, {replace:true});
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>
            {props.name}
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

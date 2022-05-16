import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import classes from "../ui/Item.module.css";

function QuoteItem(props) {
    const navigate = useNavigate();
   function editHandler(){
    navigate("/EditQuote/"+props.key, { replace: true })
   }
   function deleteHandler(){}
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h2>{props.book}</h2>
          <p><q>{props.text}</q></p>
        </div>
        <div className={classes.actions}>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default QuoteItem;

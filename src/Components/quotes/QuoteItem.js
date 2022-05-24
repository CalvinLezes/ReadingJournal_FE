import Card from "../ui/Card";
import classes from "../ui/Item.module.css";
import DeleteQuoteButton from "./buttons/DeleteQuoteButton";
import EditQuoteButton from "./buttons/EditQuoteButton";

function QuoteItem(props) {

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h2>{props.book}</h2>
          <p>
            <q>{props.text}</q>
          </p>
        </div>
        <div className={classes.actions}>
          <EditQuoteButton quoteId={props.id} />
          <DeleteQuoteButton onDelete={props.onDelete} quoteId={props.id}/>
        </div>
      </Card>
    </li>
  );
}

export default QuoteItem;

import Card from "../ui/Card";
import classes from "./AuthorInfo.module.css";
import EditAuthorButton from "./buttons/EditAuthorButton";

function AuthorInfo(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h1>{props.author.name}</h1>
          <h4>{props.author.countryName}</h4>
          <h3>Что вы прочитали у этого автора:</h3>
          {props.author.books.map((title) => {
            return <div className={classes.title}>{title}</div>;
          })}
        </div>
        <EditAuthorButton authorId={props.author.authorId} />
      </Card>
    </li>
  );
}

export default AuthorInfo;

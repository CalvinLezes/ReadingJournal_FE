import classes from "./BookTitlesList.module.css"

function BookTitlesList(props) {
  return (
    <section>
      {props.books.map((title) => {
        return <div className={classes.title}>{title}</div>;
      })}
    </section>
  );
}

export default BookTitlesList;

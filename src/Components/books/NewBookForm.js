import { useRef } from "react";
import Card from "../ui/Card";
import classes from "../ui/Form.module.css";

function NewBookForm(props) {
  const titleInputRef = useRef();
  const ratingInputRef = useRef();
  const feedbackInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const bookData = {
        title: enteredTitle,
        rating: enteredRating,
        feedback: enteredFeedback,
        readDate: enteredDate
    };

    props.onAddBook(bookData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Book Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
        <label htmlFor="date">When did you read this book?</label>
          <input type="date" required id="date" ref={dateInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="rating">Book Rating</label>
          <input type="text" required id="rating" ref={ratingInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="feedback">Book Feedback</label>
          <textarea id="feedback" required rows="5" ref={feedbackInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBookForm;

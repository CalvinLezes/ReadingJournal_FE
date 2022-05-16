import { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "../ui/Form.module.css";

function NewQuoteForm(props) {
  const bookInputRef = useRef();
  const textInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredBook = bookInputRef.current.value;
    const enteredText = textInputRef.current.value;
    
    const quoteData = {
      book: enteredBook,
      text: enteredText,
    };

    props.onAddQuote(quoteData);
  }

  const [value, setValue] = useState("");

  const options = props.books.map((book, index) => {
    return <option key={index}>{book.title}</option>;
  });

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="book">Выберите книгу</label>
          <select
            required
            id="book"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            ref={bookInputRef}
          >
            {options}
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="text">Цитата</label>
          <textarea id="text" required rows="5" ref={textInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Добавить цитату</button>
        </div>
      </form>
    </Card>
  );
}

export default NewQuoteForm;

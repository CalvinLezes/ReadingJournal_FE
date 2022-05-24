import { useRef, useState } from "react";
import Select from "react-select";
import classes from "../ui/Form.module.css";

function EditQuoteForm(props) {
  const textInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredBookId = value.key;
    const enteredText = textInputRef.current.value;

    const quoteData = {
      bookId: enteredBookId,
      text: enteredText,
    };

    props.onEditQuote(quoteData);
  }

  const [value, setValue] = useState({
    value: props.quote.bookTitle,
    label: props.quote.bookTitle,
    key: props.quote.bookId,
  });

  const options = props.books.map((book) => {
    return { value: book.title, label: book.title, key: book.bookId };
  });

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="book">Выберите книгу</label>
        <Select
          value={value}
          options={options}
          onChange={(selectedOption) => {
            setValue(selectedOption);
          }}
        />
      </div>

      <div>
        <label htmlFor="text">Цитата</label>
        <textarea
          id="text"
          required
          rows="5"
          defaultValue={props.quote.text}
          ref={textInputRef}
        />
      </div>

      <div>
        <button>Изменить цитату</button>
      </div>
    </form>
  );
}

export default EditQuoteForm;

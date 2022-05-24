import { useRef, useState } from "react";
import Select from "react-select";
import Card from "../ui/Card";
import classes from "../ui/Form.module.css";

function NewQuoteForm(props) {
  const textInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredBookId = value.key;
    const enteredText = textInputRef.current.value;

    const quoteData = {
      bookId: enteredBookId,
      text: enteredText,
    };

    props.onAddQuote(quoteData);
  }

  const [value, setValue] = useState("");

  const options = props.books.map((book) => {
    return { value: book.title, label: book.title, key: book.bookId };
  });

  return (
    <Card>
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
          <textarea id="text" required rows="5" ref={textInputRef} />
        </div>

        <div>
          <button>Добавить цитату</button>
        </div>
      </form>
    </Card>
  );
}

export default NewQuoteForm;

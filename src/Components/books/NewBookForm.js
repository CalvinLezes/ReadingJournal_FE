import { useRef, useState } from "react";
import Card from "../ui/Card";
import Select from "react-select";
import classes from "../ui/Form.module.css";
import { useNavigate } from "react-router-dom";

function NewBookForm(props) {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const ratingInputRef = useRef();
  const feedbackInputRef = useRef();
  const dateInputRef = useRef();

  function addAuthorHandler(){
    navigate("/newAuthor");
  }

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredAuthorIds = authorValue.map((author) => {
      return author.key;
    });
    const enteredGenreIds = genreValue.map((genre) => {
      return genre.key;
    });

    const bookData = {
      title: enteredTitle,
      rating: enteredRating,
      feedback: enteredFeedback,
      readDate: enteredDate,
      authorIds: enteredAuthorIds,
      genreIds: enteredGenreIds,
    };

    props.onAddBook(bookData);
  }

  const [authorValue, setAuthorValue] = useState([]);
  const [genreValue, setGenreValue] = useState([]);

  const authorOptions = props.authors.map((author) => {
    return { value: author.name, label: author.name, key: author.authorId};
  });

  const genreOptions = props.genres.map((genre) => {
    return { value: genre.name, label: genre.name, key: genre.genreId };
  });

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Название</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="authors">Выберите авторов</label>
          <Select
            name="authors"
            value={authorValue}
            onChange={(selectedOption) => {
              setAuthorValue(selectedOption);
              console.log(authorValue);
            }}
            isMulti
            options={authorOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <button onClick={addAuthorHandler}>+ Новый автор</button>
        </div>
        <div>
          <label htmlFor="genres">Выберите жанры</label>
          <Select
            name="genres"
            value={genreValue}
            onChange={(selectedOption) => {
              setGenreValue(selectedOption);
            }}
            isMulti
            options={genreOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Дата прочтения</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="rating">Ваша оценка (от 1 до 5)</label>
          <input
            type="number"
            required
            id="rating"
            min="1"
            max="5"
            ref={ratingInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="feedback">Ваш отзыв</label>
          <textarea id="feedback" required rows="5" ref={feedbackInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Добавить книгу</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBookForm;

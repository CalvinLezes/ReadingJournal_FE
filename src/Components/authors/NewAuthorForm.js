import { useRef, useState } from "react";
import Card from "../ui/Card";
import Select from "react-select";
import classes from "../ui/Form.module.css";

function NewAuthorForm(props) {
  const nameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCountryId = countryValue.key;

    const authorData = {
      name: enteredName,
      countryId: enteredCountryId,
    };

    props.onAddAuthor(authorData);
  }

  const [countryValue, setCountryValue] = useState("");

  const countryOptions = props.countries.map((country) => {
    return { value: country.name, label: country.name, key: country.countryId };
  });

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Имя автора</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="country">Выберите страну автора</label>
          <Select
            value={countryValue}
            options={countryOptions}
            onChange={(selectedOption) => {
              setCountryValue(selectedOption);
            }}
          />
        </div>
        <div className={classes.actions}>
          <button>Добавить автора</button>
        </div>
      </form>
    </Card>
  );
}

export default NewAuthorForm;

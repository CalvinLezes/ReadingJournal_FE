import { useRef, useState } from "react";
import Card from "../ui/Card";
import Select from "react-select";
import classes from "../ui/Form.module.css";

function EditAuthorForm(props) {
  const nameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCountryId = countryValue.key;

    const authorData = {
      name: enteredName,
      countryId: enteredCountryId,
    };

    props.onEditAuthor(authorData);
  }

  const [countryValue, setCountryValue] = useState({
    value: props.author.countryName,
    label: props.author.countryName,
    key: props.author.countryId,
  });

  const countryOptions = props.countries.map((country) => {
    return { value: country.name, label: country.name, key: country.countryId };
  });

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Изменит имя</label>
          <input
            type="text"
            required
            id="name"
            defaultValue={props.author.name}
            ref={nameInputRef}
          />
        </div>
        <div>
          <label htmlFor="country">Изменить страну</label>
          <Select
            value={countryValue}
            options={countryOptions}
            onChange={(selectedOption) => {
                console.log(countryValue);
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

export default EditAuthorForm;

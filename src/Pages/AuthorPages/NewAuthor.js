import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewAuthorForm from "../../Components/authors/NewAuthorForm";
import authorApi from "../../Components/services/AuthorService";
import countryApi from "../../Components/services/CountryService";

function NewAuthorPage() {
  const navigate = useNavigate();
  function addAuthorHandler(authorData) {
    console.log(authorData);
    authorApi.addNewAuthor(authorData).then(() => {
      navigate(-1);
    });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCountries, setLoadedCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    countryApi.getCountries().then((resp) => {
      setIsLoading(false);
      setLoadedCountries(resp.data);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Добавить автора</h1>
      <NewAuthorForm
        onAddAuthor={addAuthorHandler}
        countries={loadedCountries}
      />
    </section>
  );
}

export default NewAuthorPage;

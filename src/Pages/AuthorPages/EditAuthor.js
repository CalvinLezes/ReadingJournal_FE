import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditAuthorForm from "../../Components/authors/EditAuthorForm";
import authorApi from "../../Components/services/AuthorService";
import countryApi from "../../Components/services/CountryService";
import Loading from "../Loading";

function EditAuthorPage() {
  const navigate = useNavigate();
  function editHandler(authorData) {
    authorApi.editAuthor(authorData, authorId).then(() => {
      navigate("/authors",{replace:true});
    });
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCountries, setLoadedCountries] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState();

  const{authorId} = useParams();

  useEffect(() => {
    setIsLoading(true);
    countryApi.getCountries().then((resp) => {
      setLoadedCountries(resp.data);
    });
    authorApi.getAuthorById(authorId).then((resp)=>{
        setIsLoading(false);
        setCurrentAuthor(resp.data);
    })
  }, [authorId]);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <section>
      <h1>Изменить информацию об авторе</h1>
      <EditAuthorForm
        onEditAuthor={editHandler}
        countries={loadedCountries}
        author={currentAuthor}
      />
    </section>
  );
}

export default EditAuthorPage;

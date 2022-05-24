import axios from "axios";
import { useEffect, useState } from "react";
import AuthorList from "../../Components/authors/AuthorList";
import Loading from "../Loading";

function AllAuthorsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAuthors, setLoadedAuthors] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:8080/api/authors").then((resp) => {
      console.log(resp);
      setIsLoading(false);
      setLoadedAuthors(resp.data);
    });
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    );
  }
  return (
    <section>
      <h1>Your Authors</h1>
      <AuthorList authors={loadedAuthors} />
    </section>
  );
}

export default AllAuthorsPage;

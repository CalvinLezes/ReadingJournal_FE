import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import AuthorInfo from "../../Components/authors/AuthorInfo";
import authorApi from "../../Components/services/AuthorService";

function AuthorInfoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentAuthor, setcurrentAuthor] = useState();

  const { authorId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    authorApi.getAuthorById(authorId).then((resp)=>{
      setIsLoading(false);
      setcurrentAuthor(resp.data);
    })
  }, [authorId]);
  
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
    <AuthorInfo author={currentAuthor}/>
    </section>
  )
}

export default AuthorInfoPage
import List from "../ui/List";
import AuthorItem from "./AuthorItem";

function AuthorList(props) {
  return (
    <List>
      {props.authors.map((author) => (
        <AuthorItem
          key={author.id}
          id={author.id}
          name={author.name}
          surname={author.surname}
         // country={author.country}
        />
      ))}
    </List>
  );
}

export default AuthorList;

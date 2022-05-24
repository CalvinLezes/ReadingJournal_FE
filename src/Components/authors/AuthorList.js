import List from "../ui/List";
import AuthorItem from "./AuthorItem";

function AuthorList(props) {
  return (
    <List>
      {props.authors.map((author) => (
        <AuthorItem
          key={author.authorId}
          id={author.authorId}
          name={author.name}
          
        />
      ))}
    </List>
  );
}

export default AuthorList;

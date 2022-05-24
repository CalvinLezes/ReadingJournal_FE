import { useNavigate } from "react-router-dom";

function EditAuthorButton(props) {
  const navigate = useNavigate();
  function editHandler() {
    navigate("/editAuthor/" + props.authorId, { replace: true });
  }
  return <button onClick={editHandler}>Изменить</button>;
}

export default EditAuthorButton;

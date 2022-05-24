import { useNavigate } from "react-router-dom";

function EditQuoteButton(props) {
  const navigate = useNavigate();
  function editHandler() {
    navigate("/EditQuote/" + props.quoteId, { replace: true });
  }
  return <button onClick={editHandler}>Изменить</button>;
}

export default EditQuoteButton;

import { useNavigate } from "react-router-dom";

function AddQuoteButton() {
  const navigate = useNavigate();
  function addHandler() {
    navigate("/NewQuote", { replace: true });
  }
  return <button onClick={addHandler}>Добавить</button>;
}

export default AddQuoteButton;

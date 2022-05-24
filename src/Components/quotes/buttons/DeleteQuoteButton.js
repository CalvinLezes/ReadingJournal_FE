function DeleteQuoteButton(props) {
  function deleteHandler() {
     props.onDelete(props.quoteId);
  }

  return <button onClick={deleteHandler}>Удалить</button>;
}

export default DeleteQuoteButton;

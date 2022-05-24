import AddQuoteButton from "../../Components/quotes/buttons/AddQuoteButton";
import QuoteList from "../../Components/quotes/QuoteList";

function QuotesPage() {
  return (
    <section>
      <h1>Ваши цитаты</h1>
      <AddQuoteButton />
      <QuoteList bookId={0} />
    </section>
  );
}

export default QuotesPage;

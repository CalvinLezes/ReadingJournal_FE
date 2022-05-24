import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import AllBooksPage from "./Pages/BookPages/AllBooks";
import AuthorInfoPage from "./Pages/AuthorPages/AuthorInfoPage";
import EditQuotePage from "./Pages/QuotesPages/EditQuote";
import NewBookPage from "./Pages/BookPages/NewBook";
import NewQuotePage from "./Pages/QuotesPages/NewQuote";
import QuotesPage from "./Pages/QuotesPages/Quotes";
import SeriesesPage from "./Pages/Serieses";
import StatsPage from "./Pages/StatsPages/Stats";
import AllAuthorsPage from "./Pages/AuthorPages/Authors";
import BookInfoPage from "./Pages/BookPages/BookInfoPage";
import EditBookPage from "./Pages/BookPages/EditBook";
import NewAuthorPage from "./Pages/AuthorPages/NewAuthor";
import EditAuthorPage from "./Pages/AuthorPages/EditAuthor";
import MonthStatsPage from "./Pages/StatsPages/MonthStatsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllBooksPage />} />
        <Route path="/books/:bookId" element={<BookInfoPage/>} />
        <Route path="/newBook" element={<NewBookPage />} />
        <Route path="/newQuote" element={<NewQuotePage />} />
        <Route path="/editBook/:bookId" element={<EditBookPage/>}/>
        <Route path="/editQuote/:quote_id" element={<EditQuotePage />} />
        <Route path="/editAuthor/:authorId" element={<EditAuthorPage/>}/>
        <Route path="/authors" element={<AllAuthorsPage />} />
        <Route path="/authors/:authorId" element={<AuthorInfoPage/>} />
        <Route path="/newAuthor" element={<NewAuthorPage/>} />
        <Route path="/quotes" element={<QuotesPage/>}/>
        <Route path="/serieses" element={<SeriesesPage />}/>
        <Route path="/stats" element={<StatsPage />}/>
        <Route path="/stats/:month" element={<MonthStatsPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;

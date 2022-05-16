import { Route, Routes } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import AllBooksPage from "./Pages/AllBooks";
import AuthorsPage from "./Pages/Authors";
import EditQuotePage from "./Pages/EditQuote";
import NewBookPage from "./Pages/NewBook";
import NewQuotePage from "./Pages/NewQuote";
import QuotesPage from "./Pages/Quotes";
import SeriesesPage from "./Pages/Serieses";
import StatsPage from "./Pages/Stats";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllBooksPage />} />
        <Route path="/newBook" element={<NewBookPage />} />
        <Route path="/newQuote" element={<NewQuotePage />} />
        <Route path="/editQuote/" element={<EditQuotePage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/quotes" element={<QuotesPage/>}/>
        <Route path="/serieses" element={<SeriesesPage />}/>
        <Route path="/stats" element={<StatsPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;

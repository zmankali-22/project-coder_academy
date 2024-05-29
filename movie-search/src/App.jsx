import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./Layout";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/search/:searchTerm" element={<SearchResults />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;

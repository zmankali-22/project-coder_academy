import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./Layout";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;

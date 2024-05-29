import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

export default function Header() {
  const { searchTerm, setSearchTerm } = useContext(MovieContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search Movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

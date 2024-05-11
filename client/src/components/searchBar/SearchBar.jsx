import { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "invest"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    category: "",
    minPrice: 0,
    maxPrice: 0,
    minInvest: 0,
    maxInvest: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>

            <select name="categories" id="categories">
            <option value="" disabled selected hidden>Choose a Category</option>
            <option value="all">All</option>
            <option value="medical">Medical</option>
            <option value="mil">Military</option>
            <option value="agri">Agriculture</option>
            <option value="domestic">Domestic</option>
            <option value="amb">Automobile</option>
            </select>
        {query.type !== "invest" && ( // Render for all types except "invest"
          <>
            <input
              type="number"
              name="minPrice"
              min={0}
              max={10000000}
              placeholder="Min Price"
              
            />
            <input
              type="number"
              name="maxPrice"
              min={0}
              max={10000000}
              placeholder="Max Price"
              
            />
          </>
        )}
        {query.type === "invest" && ( // Render for "invest" type
          <>
            <input
              type="number"
              name="minInvest"
              min={0}
              max={10000000}
              placeholder="Min Invest"
            />
            <input
              type="number"
              name="maxInvest"
              min={0}
              max={10000000}
              placeholder="Max Invest"
              
            />
          </>
        )}
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

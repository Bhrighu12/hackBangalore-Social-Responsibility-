import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>Projects</b>
      </h1>
      <div className="bottom">
        <div className="item">
          <select name="type" id="type">
            <option value="">Both</option>
            <option value="buy">Buy</option>
            <option value="rent">Invest</option>
          </select>
        </div>
        <div className="item">
          
          <select name="property" id="property">
          <option value="" disabled selected hidden>Category</option> 
            <option value="all">All</option>
            <option value="medical">Medical</option>
            <option value="mil">Military</option>
            <option value="agri">Agriculture</option>
            <option value="domestic">Domestic</option>
            <option value="amb">Automobile</option>
          </select>
        </div>
        <div className="item">
         
          <input
            type="text"
            id="minPrice"
            name="minPrice"
            placeholder="Min Amount"
          />
        </div>
        <div className="item">
        
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="Max Amount"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
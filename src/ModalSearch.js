import React, { useState } from "react";
import SearchIcon from "./assets/search.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function ModalSearch({ showSearch, setIsAnyQuery }) {
  const [input, setInput] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const history = useHistory();

  const SearchFood = (e) => {
    e.preventDefault();
    if (!input) {
      setEmptyInput(true);
    } else {
      showSearch(false);
      setIsAnyQuery(true);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setEmptyInput(false);
  };
  return (
    <section className="modal-search" onClick={() => showSearch(false)}>
      <div
        className="search-box"
        onClick={(ev) => {
          showSearch(true);
          ev.stopPropagation();
        }}
      >
        <form>
          <input
            type="text"
            placeholder={
              emptyInput ? "Please Input the Food!" : "Find your recipe"
            }
            autoFocus
            value={input}
            name="query"
            onChange={handleChange}
          />
          <Link to={`/result/${input}`}>
            {/* <img src={SearchIcon} alt="" /> */}
            Search
          </Link>
        </form>
      </div>
    </section>
  );
}

export default ModalSearch;

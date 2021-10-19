import React, { useState, useEffect } from "react";
import SearchIcon from "./assets/search.png";
import { useHistory } from "react-router";

function ModalSearch({ showSearch, setIsAnyQuery }) {
  const [input, setInput] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const history = useHistory();
  const searchFood = (e) => {
    e.preventDefault();
    if (!input) {
      setEmptyInput(true);
    } else {
      showSearch(false);
      setIsAnyQuery(true);
      history.push("/result", { query: input });
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
        <form onSubmit={searchFood}>
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
          <button type="submit">
            <img src={SearchIcon} alt="" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ModalSearch;

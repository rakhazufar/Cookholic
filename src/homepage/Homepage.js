import React, { useState } from "react";
import search from "../assets/search2.png";
import Homepic from "../assets/Homepic.svg";
import { useHistory } from "react-router";

function Homepage({ setIsAnyQuery }) {
  const [input, setInput] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const history = useHistory();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setEmptyInput(true);
    } else {
      setIsAnyQuery(true);
      history.push("/result", { query: input });
    }
  };
  return (
    <main>
      <div className="homepage">
        <div className="text-page">
          <h1>Everybody is a Chef</h1>
          <h4>Find your recipe</h4>
          <h4>let everybody taste your food and share happiness</h4>
          <form className="CTA-search" onSubmit={handlesubmit}>
            <label htmlFor="searchCTA">
              <img src={search} alt="" />
            </label>
            <input
              type="text"
              id="searchCTA"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={emptyInput ? { borderBottom: "2px solid red" } : {}}
            />
          </form>
        </div>
        <div className="img-page">
          <img src={Homepic} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Homepage;

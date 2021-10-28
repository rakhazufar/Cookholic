import React from "react";
import Card from "../Card";
import { useFetch } from "../useFetch";

function Suggestion() {
  const apiKey = "d45acc3131794a539e9320b9d66ce264";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4`;

  let { data, error, isLoading } = useFetch(url);

  // if (localStorage.getItem("suggestion")) {
  //   data = JSON.parse(localStorage.getItem("suggestion"));
  // } else {
  //   localStorage.setItem("suggestion", JSON.stringify(data));
  // }

  if (error === true) {
    return <div></div>;
  }

  return (
    <section>
      <h1>Suggestion</h1>
      <div className="card-container">
        {isLoading && <h2>Loading...</h2>}
        {data &&
          data.map((food) => {
            return (
              <Card
                key={food.id}
                title={food.title}
                image={food.image}
                summary={food.summary}
                foodID={food.id}
                score={food.spoonacularScore}
              />
            );
          })}
      </div>
    </section>
  );
}

export default Suggestion;

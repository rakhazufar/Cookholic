import React from "react";
import Card from "../Card";
import { useFetch } from "../useFetch";

function Suggestion() {
  const apiKey = "d45acc3131794a539e9320b9d66ce264";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4`;

  const { data, error, isLoading } = useFetch(url);

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
              <div key={food.id}>
                <Card
                  title={food.title}
                  image={food.image}
                  summary={food.summary}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Suggestion;

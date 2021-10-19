import React from "react";
import Card from "../Card";

function NewRecipe({ dataFood }) {
  const { data, error, isLoading } = dataFood;

  if (error) {
    return (
      <div className="error">
        <h1>Upss... Something went wrong</h1>
      </div>
    );
  }
  return (
    <section>
      <h1 className="new-recipe">New Recipe</h1>
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

export default NewRecipe;

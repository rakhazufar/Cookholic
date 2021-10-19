import React from "react";
import Card from "../Card";

function Suggestion({ dataFood }) {
  const { data, error, isLoading } = dataFood;

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

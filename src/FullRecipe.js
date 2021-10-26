import React from "react";
import { useLocation } from "react-router";
import { useGetFood, useGetInstruction } from "./useFetch";

function FullRecipe() {
  const location = useLocation();
  const { data, isLoading, error } = useGetFood(location.state.foodID);
  const {
    data: steps,
    isLoading: loading,
    error: isError,
  } = useGetInstruction(location.state.foodID);
  console.log(steps, loading, isError);

  const cleanText = (text) => {
    const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");

    return cleanText;
  };

  const splitInstructions = (data) => {
    const arrText = cleanText(data).split(".");
    return arrText;
  };

  //if Error === true
  if (error) {
    return (
      <section>
        <h4>Ups, something went wrong!!</h4>
      </section>
    );
  }

  return (
    <div>
      {isLoading ? (
        <div className="isLoading">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="recipe-container">
          {/* Header Recipe*/}
          <img src={data.image} alt="" />
          <div className="details">
            <h2>{data.title}</h2>
            {data.cuisines.map((type, index) => {
              return (
                <p className="type" key={index}>
                  {type}
                </p>
              );
            })}
            <div className="summary">
              <p>{cleanText(data.summary)}</p>
            </div>

            {/* Ingredients */}
            <div className="ingredients">
              <h4>Ingredients</h4>
              {data.extendedIngredients.map((a) => {
                return <p>{a.originalString}</p>;
              })}
            </div>

            {/* Directions */}
            <div className="intructions">
              <h4>Directions</h4>
              {splitInstructions(data.instructions).map((step) => {
                return <p>{step}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullRecipe;

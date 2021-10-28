import React from "react";
import { useLocation } from "react-router";
import { useGetFood, useGetInstruction } from "./useFetch";
import Error from "./Error";
import { CircularProgress, Checkbox } from "@mui/material";

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
        <Error />
      </section>
    );
  }

  return (
    <div className="full-recipe">
      {isLoading ? (
        <div className="isLoading">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className="recipe-container">
          {/* Header Recipe*/}
          <div className="image-container">
            <img src={data.image} alt="" />
          </div>
          <div className="details">
            <h2>{data.title}</h2>
            <div className="type-container">
              {data.cuisines.map((type, index) => {
                return (
                  <p className="type" key={index}>
                    {type}
                  </p>
                );
              })}
            </div>
            <div className="summary">
              <p>{cleanText(data.summary)}</p>
            </div>

            {/* Ingredients */}
            <div className="ingredients">
              <h4 className="sub-title">Ingredients</h4>
              {data.extendedIngredients.map((a, index) => {
                return (
                  <div key={index} className="ingredient">
                    <Checkbox />
                    <p>{a.originalString}</p>
                  </div>
                );
              })}
            </div>

            {/* Directions */}
            <div className="intructions">
              <h4 className="sub-title">Directions</h4>
              <div className="direction">
                {splitInstructions(data.instructions).map((step, index) => {
                  return (
                    <div key={index}>
                      <Checkbox />
                      <p>{step}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullRecipe;

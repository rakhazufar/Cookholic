import React, { useState } from "react";
import Card from "./Card";
import { useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import { useSearch } from "./useFetch";
import { CircularProgress } from "@mui/material";

function Foodpage({ isAnyQuery, totalShow, setTotalShow, generateKey }) {
  if (!isAnyQuery) {
    <Redirect to="/" />;
  }
  const location = useLocation();
  const { data, isLoading, error, Results } = useSearch(
    location.state.query,
    totalShow
  );

  const showMore = () => {
    setTotalShow(totalShow + 12);
    generateKey();
  };
  if (error) {
    return (
      <section>
        <h1>Ups... Something Went Wrong!!!</h1>
      </section>
    );
  }

  return (
    <section className="detail-food">
      <div className="inside-food">
        <h3>Results for {location.state.query}</h3>
        <div className="card-container">
          {isLoading ? (
            <div className="isLoading">
              <CircularProgress color="success" />
            </div>
          ) : Results === 0 ? (
            <section>
              <h1>{location.state.query} not found</h1>
            </section>
          ) : (
            data.map((food) => {
              return (
                <div key={food.id}>
                  <Card
                    title={food.title}
                    image={food.image}
                    summary={food.summary}
                    foodID={food.id}
                    score={food.spoonacularScore}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      <button className="btn loadmore" onClick={showMore}>
        Load More
      </button>
    </section>
  );
}

export default Foodpage;

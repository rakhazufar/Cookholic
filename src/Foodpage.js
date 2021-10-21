import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import { useSearch } from "./useFetch";
import { useDispatch, useSelector } from "react-redux";

function Foodpage({ isAnyQuery }) {
  if (!isAnyQuery) {
    <Redirect to="/" />;
  }
  const dispatch = useDispatch();
  const dataFood = useSelector((state) => state.food_data.food);

  const location = useLocation();
  const data = useSearch(location.state.query);
  useEffect(() => {});

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
            <h1>{forceRender}</h1>
          ) : Results === 0 ? (
            <h1>{location.state.query} not found</h1>
          ) : (
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
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Foodpage;

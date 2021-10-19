import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Suggestion from "./Suggestion";
import NewRecipe from "./NewRecipe";
import Footer from "./Footer";
import { useFetch } from "../useFetch";

function Home({ setIsAnyQuery }) {
  const apiKey = "d45acc3131794a539e9320b9d66ce264";
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4`;

  const { data, error, isLoading } = useFetch(url);
  return (
    <>
      <Homepage setIsAnyQuery={setIsAnyQuery} />
      <Suggestion dataFood={{ data, error, isLoading }} />
      <NewRecipe dataFood={{ data, error, isLoading }} />
      <Footer />
    </>
  );
}
export default Home;

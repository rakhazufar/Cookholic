import React, { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Suggestion from "./Suggestion";
import NewRecipe from "./NewRecipe";
import Footer from "./Footer";
import { useFetch } from "../useFetch";

function Home({ setIsAnyQuery }) {
  return (
    <>
      <Homepage setIsAnyQuery={setIsAnyQuery} />
      <Suggestion />
      <NewRecipe />
      <Footer />
    </>
  );
}
export default Home;

import React from "react";
import Homepage from "./Homepage";
import Suggestion from "./Suggestion";
import NewRecipe from "./NewRecipe";
import Footer from "./Footer";

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

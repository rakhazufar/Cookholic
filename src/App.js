import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Home from "./homepage/Home";
import ModalSearch from "./ModalSearch";
import { Redirect, Route, Switch } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Foodpage from "./Foodpage";
import ErrorPage from "./Error";
import FullRecipe from "./FullRecipe";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [isAnyQuery, setIsAnyQuery] = useState(false);
  const [key, setKey] = useState(Math.random());
  const [totalShow, setTotalShow] = useState(12);
  const generateKey = () => {
    setKey(Math.random());
  };

  return (
    <>
      <Navbar showSearch={setShowSearch} />
      {showSearch && (
        <ModalSearch
          setKey={generateKey}
          showSearch={setShowSearch}
          setIsAnyQuery={setIsAnyQuery}
        />
      )}
      <Switch>
        <Route exact path="/">
          <Home setIsAnyQuery={setIsAnyQuery} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route
          path="/result"
          children={
            isAnyQuery ? (
              <Foodpage
                key={key}
                totalShow={totalShow}
                setTotalShow={setTotalShow}
                generateKey={generateKey}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        ></Route>
        <Route path="/fullrecipe" children={<FullRecipe />}></Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

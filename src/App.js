import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Home from "./homepage/Home";

import ModalSearch from "./ModalSearch";
import { Redirect, Route, Switch } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Foodpage from "./Foodpage";
import ErrorPage from "./Error";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [isAnyQuery, setIsAnyQuery] = useState(false);
  return (
    <>
      <Navbar showSearch={setShowSearch} />
      {showSearch && (
        <ModalSearch showSearch={setShowSearch} setIsAnyQuery={setIsAnyQuery} />
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
        <Route path="/result">
          {isAnyQuery ? <Foodpage /> : <Redirect to="/" />}
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;

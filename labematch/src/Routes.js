import React from "react";
import {Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MatchsPage from "./Pages/MatchsPage";



const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/matchs" exact component={MatchsPage}/>
    </Switch>
  );
};

export default Routes;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RootContainer, CarList, ComingSoon } from "..";
import { Routes } from "../../constants/routes";

const App = () => {
  return (
    <Router>
      <RootContainer>
        <Switch>
          <Route path={Routes.DEFAULT} component={CarList} exact></Route>
          <Route path={Routes.LEARN} component={ComingSoon} exact></Route>
          <Route path={Routes.SHOP} component={ComingSoon} exact></Route>
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default App;

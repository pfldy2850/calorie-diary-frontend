import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PageHome from "../pages/home";

const RootRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={PageHome} />
      {/* <Route path="/memo" component={Memo} />
    <Route path="/trash" component={Trash} /> */}
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default RootRouter;

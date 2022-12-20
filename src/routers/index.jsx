import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;

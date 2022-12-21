import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/gen-i">
          <Home type={1} />
        </Route>
        <Route path="/gen-ii">
          <Home type={2} />
        </Route>
        <Route path="/gen-iii">
          <Home type={3} />
        </Route>
        <Route path="/gen-iv">
          <Home type={4} />
        </Route>
        <Route path="/gen-v">
          <Home type={5} />
        </Route>
        <Route path="/gen-vi">
          <Home type={6} />
        </Route>
        <Route path="/gen-vii">
          <Home type={7} />
        </Route>
        <Route path="/gen-viii">
          <Home type={8} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;

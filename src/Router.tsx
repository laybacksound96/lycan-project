import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckBox from "./routes/CheckBox";
import Home from "./routes/Home";
import Login from "./routes/Login";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <CheckBox />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

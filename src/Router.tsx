import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckBox from "./routes/CheckBox";

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

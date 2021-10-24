import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Router>

        <Header> </Header>


        <Switch>
          <Route exact path="/">
            <h1> Nothing Here </h1>
          </Route>

          <Route exact path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

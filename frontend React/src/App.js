
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";


function App() {

  return (
    <div>

      <Router>

        <Header> </Header>


        <Switch>
          <Route exact path="/">
          <Shop></Shop>
          </Route>

          <Route exact path="/shop">
            <Shop></Shop>
          </Route>

      <Route exact path="/review">
        <Review> </Review>
      </Route>


      <Route path="/product/:productKey">
       <ProductDetail></ProductDetail>
      </Route>

    <Route exact path="/inventory">
      <Inventory></Inventory>
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

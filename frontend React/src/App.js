import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";


function App() {


useEffect(() => {
  fetch(
    "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        "x-rapidapi-key": "fe99b02be5msh11866fd5f3710f4p18223djsnc1a034acd9aa",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });


}, [])



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


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

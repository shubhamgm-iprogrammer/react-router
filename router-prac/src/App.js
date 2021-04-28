import {Route,Switch,Redirect} from "react-router-dom"
import Welcome from "./Pages/Welcome"
import Products from "./Pages/Products"
import MainHeader from "./Components/MainHeader"
import ProductDetail from "./Pages/ProductDetail"
function App() {
  return (
    <div>
      <MainHeader/>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome"/>
      </Route>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products" exact>
        <Products/>
      </Route>
      <Route path="/products/:productid">
        <ProductDetail/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;

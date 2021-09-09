import {BrowserRouter, Switch, Route} from "react-router-dom"

// Components
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart.jsx";
import TempleteProvider from "./templete/TempleteProvider";

function App() {
  return (
    <TempleteProvider>
    <BrowserRouter >
      <Header/>
      <Switch>
      <Route exact path="/" component = {Home} />
      <Route exact path="/cart" component = {Cart} />
      </Switch>
      
    </BrowserRouter>
    </TempleteProvider>
  );
}

export default App;

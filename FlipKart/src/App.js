import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart.jsx";
import TempleteProvider from "./templete/TempleteProvider";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <TempleteProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TempleteProvider>
  );
}

export default App;

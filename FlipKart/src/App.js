import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart.jsx";
import TempleteProvider from "./templete/TempleteProvider";
import ContextProvider from "./Context/ContextProvider";
import {Provider} from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
 
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
  </Provider>

  );
}

export default App;

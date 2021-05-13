import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./client/navbar/components/Navbar";
import InfoPage from "./client/info/pages/InfoPage";
// import Cart from "./client/Cart/components/Cart";
import ProductsPage from "./client/products/pages/ProductsPage";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <InfoPage title="Home Page">Welcome to Hell!</InfoPage>
            </Route>
            <Route path="/products" exact>
              {/* <Cart /> */}
            </Route>
            {/* <Route path="/products/:id" exact component={} /> */}
            <Route path="/contacts" exact>
              <InfoPage title="Contacts Page">Welcome to Redux Hell!</InfoPage>
            </Route>
            {/* <Route path="/cart" component={CartPage} /> */}
            <Route>
              <InfoPage title="404 Page Not Found"></InfoPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

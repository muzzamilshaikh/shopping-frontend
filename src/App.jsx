import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";

import ProductList from "./pages/ProductList";

import { useSelector } from "react-redux";

const App = () => {
  const loggedIn = useSelector((state) => state?.user?.currentUser);
  const newUser = useSelector((state) => state?.user?.newUserCreated);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!loggedIn ? <Redirect to="/login" /> : <Home />}
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          {loggedIn && loggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {newUser && !loggedIn && <Redirect to="/login" />}
          {loggedIn && loggedIn ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

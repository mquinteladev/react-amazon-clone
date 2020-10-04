import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import { auth } from './firebase';
import { useStateValue } from "./components/Providers/StateProvider"
import Payment from './components/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51HYJF9HyQfbcItgbQ0aHFt31y4cU2Sj8wvCWbVI3GzpaDf02mXfBhy6Ppvn2X4nDQs1rADbkceecnDK9IGcb7hCx00G7pB3aGW');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if (authUser) {

        //log in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });

      } else {
        //log out

        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }

    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>


          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

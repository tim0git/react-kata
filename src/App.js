import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    stock: {
      A: {
        price: 50,
        offer: 43.33,
        minPurchase: 3,
      },
      B: {
        price: 30,
        offer: 22.50,
        minPurchase: 2,
      },
      C: {
        price: 20,
        offer: null,
        minPurchase: null,
      },
      D: {
        price: 15,
        offer: null,
        minPurchase: null,
      },
    },
    basket: {},
  };


  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

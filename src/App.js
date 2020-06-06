import React, { Component } from "react";
import "./App.css";
import "./mvp.css";
import Header from "./components/Header";
import PricingForm from "./components/PricingForm";
import StoreList from "./components/StoreList";
import Basket from "./components/Basket";

export default class App extends Component {
  state = {
    stock: {},
    basket: {},
    priceLoaded: false,
  };

  handleSubmit = (e, stock) => {
    e.preventDefault();
    this.setState({
      stock: { ...stock },
      priceLoaded: true,
    });
  };

  addToBasket = (e, item_id) => {
    this.setState((currentState) => {
      if (this.state.basket[item_id]) {
        return {
          basket: {
            ...currentState.basket,
            [item_id]: currentState.basket[item_id] + 1,
          },
        };
      } else {
        return {
          basket: {
            ...currentState.basket,
            [item_id]: 1,
          },
        };
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.priceLoaded ? (
          <div className="shopContainer">
            {" "}
            <StoreList
              stock={this.state.stock}
              addToBasket={this.addToBasket}
            />
            <Basket basket={this.state.basket} stock={this.state.stock} />
          </div>
        ) : (
          <PricingForm handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

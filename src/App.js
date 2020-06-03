import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import PricingForm from "./components/PricingForm";
import StoreList from "./components/StoreList";

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
          <>
            {" "}
            <StoreList
              stock={this.state.stock}
              addToBasket={this.addToBasket}
            />
          </>
        ) : (
          <PricingForm handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

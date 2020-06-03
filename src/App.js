import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import PricingForm from "./components/PricingForm";

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

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.priceLoaded ? (
          <>
            {" "}
            <h2>Hello Shopper,</h2>
          </>
        ) : (
          <PricingForm handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

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

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.priceLoaded ? (
          <>
            {" "}
            <StoreList stock={this.state.stock}/>
          </>
        ) : (
          <PricingForm handleSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

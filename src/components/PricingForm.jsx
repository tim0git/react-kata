import React, { Component } from "react";
import SkuForm from "./SkuForm";

export default class PricingForm extends Component {
  state = {
    stock: {
      A: {
        price: 0.5,
        offer: 1.3,
        minPurchase: 3,
      },
      B: {
        price: 0.3,
        offer: 1.75,
        minPurchase: 2,
      },
      C: {
        price: 0.2,
        offer: 0,
        minPurchase: 0,
      },
      D: {
        price: 0.15,
        offer: 0,
        minPurchase: 0,
      },
    },
  };

  handleSetState = (e, stockSku) => {
    console.log(e.target.name, stockSku);
    const name = e.target.name;
    const value = e.target.value;
    this.setState((currentState) => {
      return {
        stock: {
          ...currentState.stock,
          [stockSku]: {
            ...currentState.stock[stockSku],
            [name]: parseInt(value),
          },
        },
      };
    });
  };

  render() {
    return (
      <>
        <form>
          {Object.entries(this.state.stock).map((sku) => {
            return (
              <SkuForm
                key={sku[0]}
                sku={sku}
                handleSetState={this.handleSetState}
              />
            );
          })}
          <br />
          <button onClick={(e) => this.props.handleSubmit(e, this.state.stock)}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

import React, { Component } from "react";
import SkuForm from "./SkuForm";

export default class PricingForm extends Component {
  state = {
    stock: {
      A: {
        price: 50,
        offer: 130,
        minPurchase: 3,
      },
      B: {
        price: 30,
        offer: 45,
        minPurchase: 2,
      },
      C: {
        price: 20,
        offer: null,
        minPurchase: null,
      },
      D: {
        price: 10,
        offer: null,
        minPurchase: null,
      },
    },
    //hard coded for dev purposes
  };

  handleSetState = (e, stockSku) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      (currentState) => {
        return {
          stock: {
            ...currentState.stock,
            [stockSku]: {
              ...currentState.stock[stockSku],
              [name]: parseInt(value),
            },
          },
        };
      },
      () => {
        console.log(this.state.stock);
      }
    );
  };

  render() {
    const { stock } = this.state;
    return (
      <>
        <form className="pricingContainer">
          {Object.entries(stock).map((sku) => {
            return (
              <SkuForm
                key={sku[0]}
                sku={sku}
                handleSetState={this.handleSetState}
              />
            );
          })}
          <br />
          <button onClick={(e) => this.props.handleSubmit(e, stock)}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

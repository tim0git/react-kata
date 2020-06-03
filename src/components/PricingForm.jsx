import React, { Component } from "react";
import SkuForm from "./SkuForm";

export default class PricingForm extends Component {
  state = {
    stock: {
      A: {
        price: 30,
        offer: 45,
        minPurchase: 2,
      },
      B: {
        price: 20,
        offer: 100,
        minPurchase: 8,
      },
      C: {
        price: 15,
        offer: 25,
        minPurchase: 3,
      },
      D: {
        price: 10,
        offer: 30,
        minPurchase: 5,
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
        <form>
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

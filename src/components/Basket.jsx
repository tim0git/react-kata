import React from "react";
import { checkOutSum } from "../utils/checkoutSumFunction";

export default function Basket({ basket, stock }) {
  return (
    <div>
      <h2>Basket</h2>
      {console.dir(basket)}
      {Object.entries(basket).map(([sku, count]) => {
        return (
          <div key={sku}>
            <p>{sku}</p>
            <p>{count}</p>
          </div>
        );
      })}
      <p>Total cost of goods:£ {checkOutSum(basket, stock)}</p>
    </div>
  );
}

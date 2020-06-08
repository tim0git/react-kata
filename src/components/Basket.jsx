import React from "react";
import { checkOutSum } from "../utils/checkoutSumFunction";

export default function Basket({ basket, stock, resetPricing }) {
  return (
    <div>
      <button onClick={resetPricing}>CheckOut</button>
      <p>Total cost of goods:£ {checkOutSum(basket, stock)}</p>
      <h2>Basket</h2>
      <div className="basketContainer">
        {Object.entries(basket).map(([sku, count]) => {
          return (
            <div key={sku} className="basketItem">
              <p>{sku}</p>
              <p>{count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

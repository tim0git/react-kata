import React from "react";

export default function Basket({ basket }) {
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
      <p>Total cost of goods: {`func(basket, stock)`}</p>
    </div>
  );
}

import React from "react";

export default function SkuForm(props) {
  return (
    <>
      <h2>{props.sku[0]}</h2>
      <label>
        <input
          onChange={(e) => props.handleSetState(e, props.sku[0])}
          type="number"
          name="offer"
          value={props.sku[1].offer}
        />
      </label>
      <label>
        <input
          onChange={(e) => props.handleSetState(e, props.sku[0])}
          type="number"
          name="minPurchase"
          value={props.sku[1].minPurchase}
        />
      </label>
    </>
  );
}

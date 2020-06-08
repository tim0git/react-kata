import React from "react";

export default function SkuForm({ handleSetState, sku: [name, values] }) {
  return (
    <div>
      <h2>SKU: {name}</h2>
      <label>
        <p>Offer, Total Price in Pence</p>
        <input
          min={0}
          onChange={(e) => handleSetState(e, name)}
          type="number"
          name="offer"
          value={values.offer}
        />
      </label>
      <label>
        <p>minPurchase</p>
        <input
          min="1"
          onChange={(e) => handleSetState(e, name)}
          type="number"
          name="minPurchase"
          value={values.minPurchase}
        />
      </label>
    </div>
  );
}

import React from "react";

export default function StoreList({ stock, addToBasket }) {
  return (
    <>
      {Object.entries(stock).map(([name, values]) => {
        return (
          <div key={name}>
            <h2>Stock Name: {name}</h2>
            <p>Price: £{(values.price / 100).toFixed(2)}</p>
            {values.minPurchase > 1 && values.offer > 1 && (
              <>
                <p>Offer...</p>
                <p>{`Buy ${values.minPurchase} for only £${(
                  values.offer / 100
                ).toFixed(2)}`}</p>
              </>
            )}
            <button onClick={(e) => addToBasket(e, name)}>Add to Basket</button>
          </div>
        );
      })}
    </>
  );
}

import React from "react";

export default function StoreList({ stock, addToBasket }) {
  return (
    <>
      {Object.entries(stock).map((sku) => {
        return (
          <div key={sku[0]}>
            <h2>Stock Name: {sku[0]}</h2>
            <p>Price: £{sku[1].price.toFixed(2)}</p>
            {sku[1].minPurchase > 1 && sku[1].offer > 1 && (
              <>
                <p>Offer...</p>
                <p>{`Buy ${sku[1].minPurchase} for only £${sku[1].offer.toFixed(
                  2
                )}`}</p>
              </>
            )}
            <button onClick={(e) => addToBasket(e, sku[0])}>
              Add to Basket
            </button>
          </div>
        );
      })}
    </>
  );
}

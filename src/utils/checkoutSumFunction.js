const checkOutSum = (basket, stock) => {
  // Your code here
  let total = 0;
  for (let item in basket) {
    if (basket[item] >= stock[item].minPurchase) {
      let offerCount = Math.floor(basket[item] / stock[item].minPurchase);
      total += (offerCount * stock[item].offer) / 100;
      if (basket[item] % stock[item].minPurchase) {
        const remianderCount =
          basket[item] - offerCount * stock[item].minPurchase;
        total += (remianderCount * stock[item].price) / 100;
      }
    } else {
      total += (stock[item].price * basket[item]) / 100;
    }
  }
  return total;
};

module.exports = { checkOutSum };

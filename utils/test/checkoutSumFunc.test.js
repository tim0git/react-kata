const { checkOutSum } = require("../checkoutSumFunction");
const stock = {
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
};
const basket = { A: 4, B: 2, C: 4, D: 4 };

describe("checkOutSum()", () => {
  it("should return 0.00 when passed an empty basket", () => {
    expect(checkOutSum({}, stock)).toBe(0.0);
  });
});

// must be pure and not mutate the original data
// must return a integer that represents the basket total
// must return the interger to 2 dp.
// when basket is empty must return £0.00
// use toBe as we are comparing a primative data type for £0.00 ect.
// use toEqual when comparing [] && {} contents as we are comparing contents not memory ref.

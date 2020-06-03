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
  it("when basket is empty must return £0.00", () => {
    expect(checkOutSum({}, stock)).toBe(0.0);
  });
  it("when basket has a single item in it, should return the price 0.30", () => {
    expect(checkOutSum({ A: 1 }, stock)).toBe(0.3);
  });
  it("when basket has enough item to qualify for offer should return offer price £0.45", () => {
    expect(checkOutSum({ A: 2 }, stock)).toBe(0.45);
  });
  it("when basket has enough item to qualify for offer and more should return offer price £0.45 plus the ctandard cost for remaining items £0.30", () => {
    expect(checkOutSum({ A: 2 }, stock)).toBe(0.75);
  });
});

describe("checkOutSum()", () => {
  it("when basket is empty must return £0.00", () => {
    expect(checkOutSum()).toBe(0);
  });
});

// must be pure and not mutate the original data
// must return a integer that represents the basket total
// must return the interger to 2 dp.
// when basket is empty must return £0.00
// use toBe as we are comparing a primative data type for £0.00 ect.
// use toEqual when comparing [] && {} contents as we are comparing contents not memory ref.

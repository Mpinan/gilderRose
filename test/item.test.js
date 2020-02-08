const Item = require("../src/item");

describe("Item", () => {
  beforeEach(() => {
    item = new Item("Cheese", 5, 5);
  });
  test("has an item", () => {
    expect(item).toBe(item);
  });
  test("has a name", () => {
    expect(item.name).toBe("Cheese");
  });
  test("has a sellIn value", () => {
    expect(item.sellIn).toBe(5);
  });
  test("has a a quality", () => {
    expect(item.quality).toBe(5);
  });
  test("is expired?", () => {
    expect(item.isExpired()).toBe(false);
  });
  xtest("if item expired, quality denotes by 2", () => {
    item.sellIn = 0;
    expect(item.quality).toBe(item.quality / 2);
  });
});

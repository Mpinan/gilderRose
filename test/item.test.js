const Item = require("../src/item");

describe("Item", () => {
  beforeEach(() => {
    item = new Item();
  });
  test("has an item", () => {
    expect(item).toBe(item);
  });
});

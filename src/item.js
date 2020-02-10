class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  isExpired(item) {
    // return item.quality / 2;
  }
}

module.exports = Item;

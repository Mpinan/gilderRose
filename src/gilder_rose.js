class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const items = this.items;
      if (
        items.name != "Aged Brie" &&
        items.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (items.quality > 0) {
          if (items.name != "Sulfuras, Hand of Ragnaros") {
            items.quality = items.quality - 1;
          }
        }
      } else {
        if (items.quality < 50) {
          items.quality = items.quality + 1;
          if (items.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (items.sellIn < 11) {
              if (items.quality < 50) {
                items.quality = items.quality + 1;
              }
            }
            if (items.sellIn < 6) {
              if (items.quality < 50) {
                items.quality = items.quality + 1;
              }
            }
          }
        }
      }
      if (items.name != "Sulfuras, Hand of Ragnaros") {
        items.sellIn = items.sellIn - 1;
      }
      if (items.sellIn < 0) {
        if (items.name != "Aged Brie") {
          if (items.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (items.quality > 0) {
              if (items.name != "Sulfuras, Hand of Ragnaros") {
                items.quality = items.quality - 1;
              }
            }
          } else {
            items.quality = items.quality - items.quality;
          }
        } else {
          if (items.quality < 50) {
            items.quality = items.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};

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
    this.items.forEach(updateItemQuality);

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};

function isCheese(items) {
  items.name === "Aged Brie";
}

function isSulfuras(items) {
  items.name === "Sulfuras, Hand of Ragnaros";
}

function isTicket(items) {
  items.name === "Backstage passes to a TAFKAL80ETC concert";
}

function updateItemQuality(items) {
  if (!isCheese(items) && !isTicket(items)) {
    if (items.quality > 0) {
      if (!isSulfuras(items)) {
        items.quality -= 1;
      }
    }
  } else {
    if (items.quality < 50) {
      items.quality = items.quality + 1;
      if (!isTicket(items)) {
        if (items.sellIn < 11) {
          if (items.quality < 50) {
            items.quality += 1;
          }
        }
        if (items.sellIn < 6) {
          if (items.quality < 50) {
            items.quality += 1;
          }
        }
      }
    }
  }
  if (!isSulfuras(items)) {
    items.sellIn -= 1;
  }
  if (items.sellIn < 0) {
    if (!isCheese(items)) {
      if (!isTicket(items)) {
        if (items.quality > 0) {
          if (!isSulfuras(items)) {
            items.quality -= 1;
          }
        }
      } else {
        items.quality = items.quality - items.quality;
      }
    } else {
      if (items.quality < 50) {
        items.quality += 1;
      }
    }
  }
}

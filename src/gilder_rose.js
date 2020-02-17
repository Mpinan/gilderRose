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
const TOP_QUALITY = 50;
const MIN_QUALITY = 0;
function isCheese(items) {
  items.name === "Aged Brie";
}

function isSulfuras(items) {
  items.name === "Sulfuras, Hand of Ragnaros";
}

function isTicket(items) {
  items.name === "Backstage passes to a TAFKAL80ETC concert";
}

function decreaseQuality(items) {
  if (items.quality > MIN_QUALITY) {
    items.quality -= 1;
  }
}

function increaseQuality(items) {
  if (items.quality < TOP_QUALITY) {
    items.quality += 1;
  }
}

function updateItemQuality(items) {
  if (isSulfuras(items)) {
    return;
  }
  if (isCheese(items) || isTicket(items)) {
    if (items.quality < TOP_QUALITY) {
      increaseQuality(items);
      if (!isTicket(items)) {
        if (items.sellIn < 10) {
          increaseQuality(items);
        }
        if (items.sellIn < 5) {
          increaseQuality(items);
        }
      }
    }
  } else {
    decreaseQuality(items);
  }

  items.sellIn -= 1;

  if (items.sellIn < MIN_QUALITY) {
    if (isCheese(items)) {
      increaseQuality(items);
    } else {
      if (isTicket(items)) {
        items.quality -= items.quality;
      } else {
        decreaseQuality(items);
      }
    }
  }
}

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    // console.table(this.items);
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
    this.getItems();
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (name === productName) {
        items.splice(i, 1);
      }
    }
    this.getItems();
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;

    for (const { price, quantity } of items) {
      totalPrice += price * quantity;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
        return;
      }
    }
  },
};

cart.add({ name: "apple", price: 50 });
cart.add({ name: "pear", price: 30 });
cart.add({ name: "strawberry", price: 110 });
cart.add({ name: "grape", price: 60 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "strawberry", price: 110 });
cart.add({ name: "pear", price: 30 });
cart.add({ name: "pear", price: 30 });
// cart.remove("lemon");
// cart.clear();
cart.increaseQuantity("pear");
cart.increaseQuantity("apple");
cart.decreaseQuantity("strawberry");
// console.table(cart.getItems());
// console.log(cart.countTotalPrice());

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const house = Object.create(apartment);
house.location = "Kyiv";
console.log(house.hasOwnProperty("location"));
for (const key in house) {
  // console.log(key);
}

// console.log(house.price);

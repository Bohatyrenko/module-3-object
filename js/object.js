const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
    // for (const item of this.items) {
    //   console.log(item);
    //   // if (item.name === newProduct.name) {
    //   //   // newProduct.quantity += 1;
    //   // }
    //   this.items.push(newProduct);
    // }
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

    for (const { price } of items) {
      totalPrice += price;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

cart.add({ name: "apple", price: 50 });
cart.add({ name: "grape", price: 60 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "strawberry", price: 110 });
cart.add({ name: "pear", price: 30 });
cart.add({ name: "pear", price: 30 });
// cart.remove("lemon");
// cart.clear();
// console.log(cart.countTotalPrice());
console.log(cart.getItems());
// console.table(cart.getItems());

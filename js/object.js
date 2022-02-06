// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     // console.table(this.items);
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//     this.getItems();
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];
//       if (name === productName) {
//         items.splice(i, 1);
//       }
//     }
//     this.getItems();
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let totalPrice = 0;

//     for (const { price, quantity } of items) {
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//         return;
//       }
//     }
//   },
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "pear", price: 30 });
// cart.add({ name: "strawberry", price: 110 });
// cart.add({ name: "grape", price: 60 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "strawberry", price: 110 });
// cart.add({ name: "pear", price: 30 });
// cart.add({ name: "pear", price: 30 });
// cart.remove("lemon");
// cart.clear();
// cart.increaseQuantity("pear");
// cart.increaseQuantity("apple");
// cart.decreaseQuantity("strawberry");
// console.table(cart.getItems());
// console.log(cart.countTotalPrice());

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(keys);
// console.log(values);

// const people = {
//   name: "Mango",
//   age: 2,
// };

// const acount = {
//   mail: "poly@mail.com",
//   isOnline: true,
//   score: 500,
// };

// function countProps(object) {
//   // let propCount = 0;
//   // const ownProperty = [];
//   const key = Object.keys(object);
//   for (const el of key) {
//     console.log(el);
//   }
//   // console.log(keys);
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     ownProperty.push(key);
//   //   }
//   // }
//   // console.log(ownProperty.length);
//   // propCount = ownProperty.length;
//   return key;
// }

// // console.log(countProps({}));
// console.log(countProps(people));
// console.log(countProps(acount));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const el of keys) {
//   values.push(apartment[el]);
// }
// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   console.log(Object.keys(object));
//   for (const el of Object.keys(object)) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps(acount));

// const workers = {
//   mango: 100,
//   poly: 150,
//   alfred: 80,
// };

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const el of Object.values(salaries)) {
//     totalSalary += el;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary(workers));

// const array = [5, 2, 6, 3, 7, 8];

// let total = 0;
// for (const el of array) {
//   total += el;
// }

// console.log(total);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Engine"));
// console.log(getProductPrice("Grip"));

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const array = [];
  // for (const el of products) {
  //   console.log(Object.values(el.name));
  // }

  for (const product of products) {
    array.push(product[propName]);
  }
  return array;
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("category"));

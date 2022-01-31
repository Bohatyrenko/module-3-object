const dishes = [
  {
    name: "Chicken and Waffles",
    mealTime: "Breakfast",
    rating: 3,
  },
  {
    name: "Avocado Toast",
    mealTime: "Breakfast",
    rating: 4,
  },
  {
    name: "Breakfast Sandwich",
    mealTime: "Breakfast",
    rating: 5,
  },
  {
    name: "Ham sandwich",
    mealTime: "Lunch",
    rating: 7,
  },
  {
    name: "Superfood salad",
    mealTime: "Lunch",
    rating: 3,
  },
  {
    name: "Spicy chicken wrap",
    mealTime: "Lunch",
    rating: 9,
  },
  {
    name: "Pizza",
    mealTime: "Dinner",
    rating: 9,
  },
  {
    name: "Kebab",
    mealTime: "Dinner",
    rating: 8,
  },
  {
    name: "Steak",
    mealTime: "Dinner",
    rating: 10,
  },
];

const coktails = [
  {
    name: "Cosmopolitan",
    alcohol: true,
    rating: 7,
  },
  {
    name: "Margarita",
    alcohol: true,
    rating: 4,
  },
  {
    name: "Martini",
    alcohol: true,
    rating: 9,
  },
  {
    name: "Mojito",
    alcohol: true,
    rating: 10,
  },
  {
    name: "Cinderella",
    alcohol: false,
    rating: 2,
  },
  {
    name: "Pussyfoot",
    alcohol: false,
    rating: 5,
  },
];

// console.log(dishes);
// console.table(dishes);

// const breakfast = [];
// const lunch = [];
// const dinner = [];

// for (const dish of dishes) {
//   if (dish.mealTime === "Breakfast") {
//     breakfast.push(dish);
//   } else if (dish.mealTime === "Lunch") {
//     lunch.push(dish);
//   } else {
//     dinner.push(dish);
//   }
// }

// console.log(breakfast);
// console.log(lunch);
// console.log(dinner);
// console.log(coktails);
// console.table(coktails);
/*
 * { name: 'apple', price: 50 }
 * { name: 'grape', price: 70 }
 * { name: 'lemon', price: 60 }
 * { name: 'strawberry', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

// console.table(cart.getItems());

cart.add({ name: "apple", price: 50 });
cart.add({ name: "grape", price: 60 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "strawberry", price: 110 });
cart.remove("apple");

console.log(cart.getItems());

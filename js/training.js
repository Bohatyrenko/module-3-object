// const array = [1, 2, 3, 4, 5, 6];
// const b = 2;

// for (const el of array) {
//   if (el === b) {
//     const index = array.indexOf(el);
//     array.splice(index, 1);
//   }
// }

// console.log(array);

// const dishes = [
//   {
//     name: "Chicken and Waffles",
//     mealTime: "Breakfast",
//     rating: 3,
//   },
//   {
//     name: "Avocado Toast",
//     mealTime: "Breakfast",
//     rating: 4,
//   },
//   {
//     name: "Breakfast Sandwich",
//     mealTime: "Breakfast",
//     rating: 5,
//   },
//   {
//     name: "Ham sandwich",
//     mealTime: "Lunch",
//     rating: 7,
//   },
//   {
//     name: "Superfood salad",
//     mealTime: "Lunch",
//     rating: 3,
//   },
//   {
//     name: "Spicy chicken wrap",
//     mealTime: "Lunch",
//     rating: 9,
//   },
//   {
//     name: "Pizza",
//     mealTime: "Dinner",
//     rating: 9,
//   },
//   {
//     name: "Kebab",
//     mealTime: "Dinner",
//     rating: 8,
//   },
//   {
//     name: "Steak",
//     mealTime: "Dinner",
//     rating: 10,
//   },
// ];

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

// console.log(cart.items);
// console.log(cart.clear());

// const coktails = [
//   {
//     name: "Cosmopolitan",
//     alcohol: true,
//     rating: 7,
//   },
//   {
//     name: "Margarita",
//     alcohol: true,
//     rating: 4,
//   },
//   {
//     name: "Martini",
//     alcohol: true,
//     rating: 9,
//   },
//   {
//     name: "Mojito",
//     alcohol: true,
//     rating: 10,
//   },
//   {
//     name: "Cinderella",
//     alcohol: false,
//     rating: 2,
//   },
//   {
//     name: "Pussyfoot",
//     alcohol: false,
//     rating: 5,
//   },
// ];

// const first = {
//   name: "Red Marry",
//   alcohol: true,
//   rating: 5,
// };

// console.log(coktails[0]);

// const authors = {
//   kiwi: 5,
//   poly: 7,
//   max: 10,
//   jon: 2,
// };

// const fn = function (proms) {
//   console.log(proms);
// };

// fn(authors);

/* 
Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted".
*/

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // apartment.price = 5000;
// // apartment.rating = 4.7;
// // apartment.owner.name = "Henry Sibola";
// // apartment.tags.push("trusted");

// apartment.area = 60;
// apartment.room = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };

// for (const key in apartment) {
//   console.log(key, "-", apartment[key]);
// }

// // console.log(apartment);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

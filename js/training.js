const array = [1, 2, 3, 4, 5, 6];
const b = 2;

for (const el of array) {
  if (el === b) {
    const index = array.indexOf(el);
    array.splice(index, 1);
  }
}

console.log(array);

// Sort array of ages in ascending order
let arr = [3, 2, 5, 1, 22, 11];

let sorted = arr.sort((a, b) => {
  return a - b;
});
console.log(sorted);

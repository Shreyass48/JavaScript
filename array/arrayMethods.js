let arr = [1, 2, 3, 44, 5];

// foreach method : iterates over each element in the array,
// dint return anything
arr.forEach((element) => {
  console.log(element);
});

// map method : iterates over each element in the array,
// returns a new array after applying the function to each element
// if you not return anything from the function, the new array will have undefined values
let newArr = arr.map((element) => {
  return element * 2;
});
console.log(newArr);

// filter method : iterates over each element in the array,
// returns a new array with elements that pass the test implemented by the provided function
// if no elements pass the test, an empty array will be returned
let filteredArr = arr.filter((element) => {
  return element > 10;
});
console.log(filteredArr);

// reduce method : iterates over each element in the array,
// reduces the array to a single value by applying a function to each element
let sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// find method : iterates over each element in the array,
// returns the first element that satisfies the provided testing function
// if no elements satisfy the test, undefined will be returned
let foundElement = arr.find((element) => {
  return element > 10;
});
console.log(foundElement);

// some method : iterates over each element in the array,
// returns true if at least one element satisfies the provided testing function
// otherwise, it returns false
let hasEvenNumber = arr.some((element) => {
  return element % 2 === 0;
});
console.log(hasEvenNumber);

// every method : iterates over each element in the array,
// returns true if all elements satisfy the provided testing function
// otherwise, it returns false
let allPositive = arr.every((element) => {
  return element > 0;
});
console.log(allPositive);

//////////

// Distructuring assignment with arrays
let [first, second] = arr;
console.log(first); // 1
console.log(second); // 2

// spread operator with arrays
let newArray = [...arr, 6, 7, 8];
console.log(newArray); // [1, 2, 3, 44, 5, 6, 7, 8]

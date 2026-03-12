//Use a function to log even numbers in array

function findEven(arr) {
  arr.map((num) => {
    if (num % 2 == 0) console.log(num);
  });
}
findEven([1, 2, 3, 4, 5, 6]);

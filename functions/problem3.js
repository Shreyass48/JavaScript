//Sum all numbers using rest parameter

function calculateSum(...num) {
  let total = 0;
  num.map((num) => {
    total += num;
  });

  return total;
}

console.log(calculateSum(1, 2, 3, 4, 5, 6, 7, 8));

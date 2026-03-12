// Write a BMI calculator function

function calculateBMI(weight, height) {
  return weight / (height * height);
}

console.log(calculateBMI(60, 1.7).toFixed(2)); // Output: 20.76

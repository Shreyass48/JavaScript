//Make a toUpperCase transformer using HOF

function toUpperCaseTransformer() {
  return function (str) {
    return str.toUpperCase();
  };
}

const upperCase = toUpperCaseTransformer();
console.log(upperCase("hello world")); // "HELLO WORLD"

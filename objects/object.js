const person = {
  "first-name": "John", // This will cause a syntax error
  name: "John",
  age: 30,
  city: "New York",
};

// Accessing object properties
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30

let key = "city";
console.log(person[key]); // Output: New York

// for...in loop to iterate over object properties
for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}
// Output:
// name: John
// age: 30
// city: New York

// object.keys() to get an array of property names
const keys = Object.keys(person);
console.log(keys); // Output: [ 'name', 'age', 'city' ]

// object.values() to get an array of property values
const values = Object.values(person);
console.log(values); // Output: [ 'John', 30, 'New York' ]

// object.entries() to get an array of [key, value] pairs
const entries = Object.entries(person);
console.log(entries);
// Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

// spread operator to clone an object
// here we cloned(shalow copy) nested object then normal keys has new keys but inside object strted pasiing references
const clonedPerson = { ...person };
console.log(clonedPerson); // Output: { name: 'John', age: 30, city: 'New York' }

// when your object has nested objects, use JSON methods for deep cloning
const employee = {
  name: "Jane",
  address: {
    street: "123 Main St",
    city: "Los Angeles",
  },
};

const deepClonedEmployee = JSON.parse(JSON.stringify(employee));
console.log(deepClonedEmployee);
// Output: { name: 'Jane', address: { street: '123 Main St', city: 'Los Angeles' } }

// destructuring assignment
// "first-name": firstName coz of - hyphen we cannot use dot notation to access it
const { "first-name": firstName, name, age, city } = person;

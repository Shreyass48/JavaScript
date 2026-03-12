// Sync vs Async

// Sync code runs sequentially, one line at a time
console.log("Start");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("End");

// Async code allows other operations to run while waiting for an operation to complete

console.log("Start");

setTimeout(() => {
  console.log("This is async");
}, 2000);

console.log("End");

// callback means a function passed as an argument to another function, to be executed later
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Data received:", data);
});

// callback hell refers to deeply nested callbacks that make code hard to read and maintain
function callbackHellExample() {
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
      }, 1000);
    }, 1000);
  }, 1000);
}

callbackHellExample();

//  Promises provide a cleaner way to handle async operations
//  Promise means an object representing 2 states the eventual completion or failure of an async operation
//  Promise states: pending, fulfilled, rejected
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Jane", age: 25 };
      resolve(data);
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => {
    console.log("Data received with Promise:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Async/Await provides a more synchronous way to write async code
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Data received with Async/Await:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAsync();

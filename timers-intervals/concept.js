// make a 10-0 counter using clear interval
let count = 10;

const intervalId = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(intervalId);
  }
}, 1000);

// make a timer that logs "Hello, World!" after 7 seconds
setTimeout(() => {
  console.log("Hello, World!");
}, 7000);

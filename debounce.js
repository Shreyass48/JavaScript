// Debouncing is a technique used to limit the rate at which a function is executed. It ensures that a function is only called after a certain amount of time has passed since the last time it was invoked. This is particularly useful for scenarios like search input, where you want to wait for the user to stop typing before making an API call.
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// In this example, the `debounce` function takes another function `fn` and a `delay` in milliseconds. It returns a new function that, when called, clears any existing timer and sets a new timer to call the original function after the specified delay. If the returned function is called again before the delay has passed, the previous timer is cleared and a new one is set, effectively resetting the wait time.
const searchWithDebounce = debounce(print, 1000);

searchWithDebounce("s");
searchWithDebounce("sh");
searchWithDebounce("shr");
searchWithDebounce("shrey");
searchWithDebounce("shreyas");

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    fn(...args);
  };
}

const print = (str) => {
  console.log("hello", str);
};

const searchWithThrottle = throttle(print, 1000);

searchWithThrottle("s");
searchWithThrottle("sh");
searchWithThrottle("shr");
searchWithThrottle("shrey");
searchWithThrottle("shreyasss");

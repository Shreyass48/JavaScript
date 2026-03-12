// Map prices to include GST (18%)

let prices = [100, 200, 300];

let gstIncudedPrice = prices.map((price) => {
  return price + price * 0.18;
});

console.log(gstIncudedPrice);

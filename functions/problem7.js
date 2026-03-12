//Write a discount calculator (HOF style)

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

const tenPercentDiscount = discountCalculator(10);
console.log(tenPercentDiscount(200)); // 180

const twentyPercentDiscount = discountCalculator(20);
console.log(twentyPercentDiscount(200)); // 160

// Day 2 - Functions

// Regular function
function calculateTotal(price, qty) {
  return price * qty;
}

// Arrow function
const calculateTotalArrow = (price, qty) => price * qty;

// Default parameters
function applyDiscount(price, discount = 0) {
  return price - discount;
}

// Function as a value
const operation = calculateTotal;
console.log(operation(100, 2)); // 200

console.log(calculateTotal(220, 2));      // 440
console.log(calculateTotalArrow(220, 2)); // 440
console.log(applyDiscount(220));          // 220

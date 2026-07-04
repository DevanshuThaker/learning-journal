// Day 9 - Loops in JS
// for, for...of, for...in

const prices = [220, 150, 80, 300];
const menuItem = { name: "Veg Biryani", price: 200, isVeg: true };

// ===== 1. Classic for loop - identical to Java =====
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

// ===== 2. for...of - loops over VALUES (like Java's enhanced for-loop) =====
// Best for: arrays, strings
for (const price of prices) {
  console.log(price);
}

for (const char of "Dosa") {
  console.log(char); // D, o, s, a
}

// ===== 3. for...in - loops over KEYS (mainly for objects) =====
// Java has no direct equivalent - JS objects have enumerable keys
for (const key in menuItem) {
  console.log(key, menuItem[key]);
}
// name Veg Biryani
// price 200
// isVeg true

// KEY RULE:
// for       -> use when you need the index/counter
// for...of  -> use for arrays/strings, gives VALUES
// for...in  -> use for objects, gives KEYS
// Do NOT use for...in on arrays (gives index as string, not the value)

// REALITY CHECK: array methods like .map(), .filter(), .forEach() are used
// far more often than raw loops in modern JS/Angular code. But recognizing
// these loop types is still necessary since you will see them in other code.

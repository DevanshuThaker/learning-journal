// Day 8 - Conditional Logic Shortcuts
// Ternary operator, Optional Chaining (?.), Nullish Coalescing (??)

// ===== 1. TERNARY OPERATOR - compact if/else (same as Java) =====
const isVeg = true;
const price = isVeg ? 200 : 250;
console.log(price); // 200

const order = { totalAmount: 450 };
const deliveryFee = order.totalAmount > 300 ? 0 : 40;
console.log(deliveryFee); // 0 (free delivery over Rs 300)


// ===== 2. OPTIONAL CHAINING (?.) - safely access nested data without crashing =====

const orderA = { id: 101, totalAmount: 450 }; // no "customer" field

// console.log(orderA.customer.name); // Would CRASH: Cannot read properties of undefined

console.log(orderA.customer?.name); // undefined - no crash

const orderB = { id: 102 };
console.log(orderB.customer?.address?.city); // undefined - works even 2 levels deep


// ===== 3. NULLISH COALESCING (??) - default value ONLY for null/undefined =====

const discount1 = null;
console.log(discount1 ?? 0); // 0 (fallback used, discount1 was null)

// WHY NOT USE || INSTEAD? Because || overwrites ALL falsy values (0, "", false, null, undefined)
// ?? only overwrites null/undefined, and keeps 0, "", false as real values.

const quantity = 0; // customer set qty to 0 on purpose
console.log(quantity || 1);  // 1  <-- WRONG, overwrites a valid 0
console.log(quantity ?? 1);  // 0  <-- CORRECT, respects the real value

const specialInstructions = ""; // customer left it blank on purpose
console.log(specialInstructions || "No instructions"); // "No instructions" <-- WRONG, overwrites intentional blank
console.log(specialInstructions ?? "No instructions"); // ""                <-- CORRECT

const isVegOnly = false; // customer explicitly wants all items shown
console.log(isVegOnly || true); // true  <-- WRONG, flips explicit false to true
console.log(isVegOnly ?? true); // false <-- CORRECT, respects explicit false


// ===== 4. COMBINING ?. and ?? - very common real-world pattern =====
const orderC = { id: 101, customer: { name: "Devanshu" } };
const city = orderC.customer?.address?.city ?? "Not specified";
console.log(city); // "Not specified"

const phone = orderC.customer?.phone ?? "Not Specified";
console.log(phone); // "Not Specified"

// KEY RULE: use ?? whenever 0, "", or false could be a REAL meaningful value
// (prices, quantities, flags, form inputs) - which is almost always true with real app data.

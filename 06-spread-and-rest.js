// Day 6 - Spread & Rest Operators

// ===== SPREAD: unpacks/expands values OUT =====

// 1. Spreading arrays - combining
const spiceVillaMenu = ["Paneer Tikka", "Naan"];
const dosaCornerMenu = ["Masala Dosa", "Idli"];
const combinedMenu = [...spiceVillaMenu, ...dosaCornerMenu];
console.log(combinedMenu); // ["Paneer Tikka", "Naan", "Masala Dosa", "Idli"]

// 2. Spread + adding new items
const updatedMenu = [...spiceVillaMenu, "Butter Chicken"];
console.log(updatedMenu); // ["Paneer Tikka", "Naan", "Butter Chicken"]

// 3. Spread creates a NEW array (shallow copy) - original stays untouched
const original = ["Paneer Tikka", "Naan"];
const copy = [...original];
copy.push("Butter Naan");
console.log(original); // ["Paneer Tikka", "Naan"]  <-- untouched
console.log(copy);     // ["Paneer Tikka", "Naan", "Butter Naan"]

// 4. Spreading objects - copy + override
const menuItem = { name: "Paneer Butter Masala", price: 220, isVeg: true };
const updatedItem = { ...menuItem, price: 250 };
console.log(updatedItem); // { name: "Paneer Butter Masala", price: 250, isVeg: true }

// 5. Spread into function calls - unpack array as separate arguments
function calculateTotal(a, b, c) {
  return a + b + c;
}
const prices = [100, 150, 200];
console.log(calculateTotal(...prices)); // 450


// ===== REST: gathers multiple values INTO one array/object =====

// 1. Rest in function parameters (like Java varargs: int... prices)
function calculateSum(...prices) {
  console.log(prices); // real array
  return prices.reduce((sum, p) => sum + p, 0);
}
console.log(calculateSum(100, 150, 200));      // 450
console.log(calculateSum(50, 75));             // 125

// 2. Rest in object destructuring - grab one field, gather the rest
const fullItem = { name: "Paneer Butter Masala", price: 220, isVeg: true, spiceLevel: "medium" };
const { name, ...otherDetails } = fullItem;
console.log(name);          // Paneer Butter Masala
console.log(otherDetails);  // { price: 220, isVeg: true, spiceLevel: "medium" }

// 3. Rest in array destructuring
const topItems = ["Paneer Butter Masala", "Veg Biryani", "Masala Dosa", "Chole Bhature"];
const [first, ...remaining] = topItems;
console.log(first);      // Paneer Butter Masala
console.log(remaining);  // ["Veg Biryani", "Masala Dosa", "Chole Bhature"]

// KEY RULE: same "..." symbol - spread EXPANDS values out, rest GATHERS values in.
// Direction of use tells you which one it is.

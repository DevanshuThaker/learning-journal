// Day 4 - Objects

const menuItem = {
  name: "Paneer Butter Masala",
  price: 220,
  isVeg: true
};

console.log(menuItem.name, menuItem.price);

menuItem.price = 240; // modifying
console.log(menuItem.price);

const order = {
  id: 101,
  customer: {
    name: "Devanshu",
    address: "Gandhinagar"
  }
};
console.log(order.customer.name);

const menuList = [
  { name: "Paneer Tikka", price: 180 },
  { name: "Veg Biryani", price: 200 }
];
console.log(menuList[0].name);

// Copying with spread
const updatedItem = { ...menuItem, price: 250 };
console.log(updatedItem);

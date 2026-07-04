// Day 5 - Destructuring (Objects & Arrays)

const cart = {
  restaurantName: "Spice Villa",
  totalAmount: 450,
  items: ["Paneer Tikka", "Naan", "Dal Makhani"]
};

const { restaurantName, totalAmount: amount } = cart;
console.log(restaurantName, amount);

const [item1, item2] = cart.items;
console.log(item1, item2);

function showOrder({ restaurantName, totalAmount }) {
  console.log(restaurantName, totalAmount);
}
showOrder({ restaurantName: "Spice Villa", totalAmount: 450 });

function showItem([name, price]) {
  console.log(name, price);
}
showItem(["Paneer", 100]);

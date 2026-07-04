// Day 3 - Arrays & Array Methods

const prices = [220, 150, 80, 300];

prices.forEach(p => console.log(p));

const withTax = prices.map(p => p * 1.05);
console.log(withTax);

const affordable = prices.filter(p => p < 200);
console.log(affordable);

const found = prices.find(p => p > 250);
console.log(found);

const total = prices.reduce((sum, p) => sum + p, 0);
console.log(total);

// Day 7 - Template Literals

const restaurantName = "Spice Villa";
const totalAmount = 450;
const qty = 2;

// Old way: string concatenation (like Java's + operator)
console.log("Item: " + restaurantName + ", Price: Rs " + totalAmount);

// Template literal way: backticks + ${} for interpolation
console.log(`Order from ${restaurantName} - Total: Rs ${totalAmount}`);

// Any JS expression works inside ${}, not just variables
console.log(`Total with quantity: Rs ${totalAmount * qty}`);

// Multi-line strings - no \n needed, just write across lines inside backticks
const receipt = `
Restaurant: ${restaurantName}
Total: Rs ${totalAmount}
Quantity: ${qty}
Grand Total: Rs ${totalAmount * qty}
`;
console.log(receipt);

// KEY RULE: whatever variable name goes inside ${} must EXACTLY match
// an existing variable (same spelling, same case) or it throws a ReferenceError.

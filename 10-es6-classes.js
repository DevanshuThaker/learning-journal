// Day 10 - ES6 Classes
// Java comparison: constructor, this, methods, extends/super

// ===== 1. BASIC CLASS SYNTAX =====
// Same idea as Java classes: constructor, properties, methods
class MenuItem {
  constructor(name, price, isVeg) {
    this.name = name;
    this.price = price;
    this.isVeg = isVeg;
  }

  printDetails() {
    console.log(`${this.name} - ₹${this.price}`);
  }
}

const item = new MenuItem("Paneer Tikka", 180, true);
item.printDetails(); // Paneer Tikka - ₹180


// ===== 2. "this" INSIDE METHODS =====
// Any property or method belonging to the object must be accessed with this.
// Unlike Java, JS does NOT auto-assume this. for you - it is always required.
class MenuItem2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(discountAmount) {
    this.price = this.price - discountAmount; // modifying own property
  }

  getFinalPrice() {
    return `${this.name}: ₹${this.price}`; // using own properties
  }

  printSummary() {
    console.log(this.getFinalPrice()); // calling another method - needs this.
  }
}

const item2 = new MenuItem2("Paneer Tikka", 200);
item2.applyDiscount(20);
item2.printSummary(); // Paneer Tikka: ₹180


// ===== 3. THE "this" DETACHMENT PROBLEM (JS-only quirk, no Java equivalent) =====
// "this" is decided by HOW a method is called (what is before the dot),
// NOT by where the method was originally written.

class Order {
  constructor(restaurantName, totalAmount) {
    this.restaurantName = restaurantName;
    this.totalAmount = totalAmount;
  }

  getSummary() {
    return `${this.restaurantName} - ₹${this.totalAmount}`;
  }

  printOrder() {
    console.log(this.getSummary());
  }
}

const order = new Order("Dosa Corner", 320);

// CORRECT way - method called directly on the object, "this" stays connected
order.printOrder(); // Dosa Corner - ₹320

// INCORRECT way - method copied into a plain variable, "this" gets lost
// const obj = order.printOrder;
// obj(); // CRASH: Cannot read properties of undefined (reading 'getSummary')
// WHY: obj() has no object before the dot, so "this" becomes undefined inside printOrder.
// This matters in Angular later - passing class methods as callbacks/event handlers
// can trigger this same bug. Fix (arrow functions / .bind(this)) will be covered
// when actually needed in Angular components.


// ===== 4. INHERITANCE WITH extends (maps closely to Java) =====
class ComboMeal extends MenuItem {
  constructor(name, price, itemCount) {
    super(name, price); // must call parent constructor FIRST, same keyword as Java
    this.itemCount = itemCount;
  }

  printCombo() {
    console.log(`${this.name} (${this.itemCount} items) - ₹${this.price}`);
  }
}

const combo = new ComboMeal("Family Feast", 599, 4);
combo.printDetails(); // Family Feast - ₹599   <- inherited method from MenuItem works
combo.printCombo();   // Family Feast (4 items) - ₹599

// RULE: if a child class has a constructor, super(...) MUST be the first line,
// before "this" can be used. Stricter than Java about placement, same idea though.


// ===== 5. EXERCISE: DiscountedItem extends MenuItem =====
class DiscountedItem extends MenuItem {
  constructor(name, price, discountPercent) {
    super(name, price);
    this.discountPercent = discountPercent;
  }

  // RETURNS the value (not console.log) so it can be reused elsewhere -
  // important pattern for Angular, where templates/other code need the actual value,
  // not just a printed line.
  getDiscountedPrice() {
    const discount = this.price * (this.discountPercent / 100);
    const finalPrice = this.price - discount;
    return finalPrice;
  }
}

const di = new DiscountedItem("Family Feast", 600, 10);
console.log(di.getDiscountedPrice()); // 540

// KEY RULE: calculate + return in one method, log/display separately.
// Keeps methods reusable instead of being locked into only printing.

// Task 1 Create the Order System

let orders = [
  ["Latte", "Tea", "Espresso"], // Drinks
  ["Croissant", "Muffin", "Bagel"] // Pastries
];

// Task 2 Log the Number of Drinks and Pastries

console.log("Number of drinks:", orders[0].length);
console.log("Number of pastries:", orders[1].length);

// Task 3 Access Orders Using Bracket Notation

console.log("First drink:", orders[0][0]); // Latte
console.log("Last pastry:", orders[1][2]); // Bagel
console.log("Second drink:", orders[0][1]); // Tea
console.log("First pastry:", orders[1][0]); // Croissant
console.log("Third drink:", orders[0][2]); // Espresso

// Task 4 Access Orders Dynamically with Variables

let drinkIndex = 1; // Dynamically choose the second drink 
let pastryIndex = 0; // Dynamically choose the first pastry 
console.log("Selected drink:", orders[0][drinkIndex]);
console.log("Selected pastry:", orders[1][pastryIndex]);

// Task 5 Write a Loop for the Drink Category

for (let i = 0; i < orders[0].length; i++) {
  console.log("Drink:", orders[0][i]);
}

// Task 6 Add a New Order and Track Length

orders[0].push("Flat White"); // Add the new drink
console.log("Updated drinks:", orders[0]);
console.log("Updated number of drinks:", orders[0].length);

/* Problem: Write a function that takes an array of numbers and returns the average value.

Steps:
1. Loop through the array to sum all the numbers
2. Divide the sum by the array length to find the average
3. Return the average as a number */

// Manually loop through to find sum and calculate average thereafter

function findAverage2(array) {
  // Returns the average of an array of numbers

  let sum = 0;

  for (const number of array) {
    sum = sum + number;
  }

  const average = sum / array.length;

  return average;
}

// Built-in method: use

/* Test case:
Input: array of numbers - [2, 4, 6, 8]
Expected output: 5 */
let findAverage2InputArray = [2, 4, 6, 8];

// Run both manual logic and built-in methods using the same test array
console.log("\n---find-average2---");
console.log(`Input: ${JSON.stringify(findAverage2InputArray)}`);
console.log(`Manual logic: ${findAverage2(findAverage2InputArray)}`);

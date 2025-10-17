/* Problem: Write a function that takes an array of numbers and returns the sum of all the numbers

Steps:
1. Loop through the array
2. Add up all the numbers in the array
3. Return the output as a number */

// Manually add up numbers in an array without using built-in methods

function sumArray(array) {
  // Returns the sum of the numbers in the input array

  let sum = 0;

  for (const number of array) {
    sum = sum + number;
  }

  return sum;
}

// Built-in method:  use reduce() to add up the numbers in an array
function sumArrayBuiltIn(array) {
  // Returns the sum of the numbers in the input array using the reduce method

  // The accumulator is named sum
  return array.reduce((sum, number) => {
    return sum + number;
  }, 0);

  /* Alternatively:
  return array.reduce((sum, number) => sum + number,0); */
}

/* Test case
Input: array of numbers - [0,3,52,25,23,-3]
Expected output: 100 */

// Run both manual logic and built-in method using the same test array
let sumArrayInputArray = [0, 3, 52, 25, 23, -3];
console.log(`\n---sum-array---`);
console.log(`Input: ${JSON.stringify(sumArrayInputArray)}`);
console.log(`Manual logic: ${sumArray(sumArrayInputArray)}`);
console.log(`Built-in method (reduce): ${sumArrayBuiltIn(sumArrayInputArray)}`);

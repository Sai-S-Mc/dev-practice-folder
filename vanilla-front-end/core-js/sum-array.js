/* Problem: Write a function that takes an array of numbers and returns the sum of all the numbers

Steps:
1. Loop through the array
2. Add up all the numbers in the array
3. Return the output as a number */

// Manually add up numbers in an array without using built-in methods

function sumArray(array) {
  // Returns the sum of the numbers in the input array

  let sum = 0 ;

  for (const number of array) {
    sum = sum + number;
  }

  return sum;
}

/* Test case
Input: array of numbers - [0,3,52,25,23,-3]
Expected output : 100 */
console.log(sumArray([0, 3, 52, 25, 23, -3]));
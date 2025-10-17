/* Problem: Write a function that returns all numbers greater than a given threshold from an input array.

Steps:
1. Loop through the array
2. Compare each number in the array with the given threshold
3  Add numbers greater than the threshold to an output array
4. Return the output array */

// Manually compare the numbers in the input array with the threshold
function filterGreaterThan(array, threshold) {
  // Returns a new array containing only numbers greater than the threshold

  let outputArray = [];

  for (const number of array) {
    if (number > threshold) {
      outputArray.push(number);
    }
  }

  return outputArray;
}

// Built-in method: filter() to find numbers greater than the given threshold
function filterGreaterThanBuiltIn(array, threshold) {
  // Returns an array with only the numbers greater than the threshold

  return array.filter((number) => number > threshold);
}

/* Test case:
Input: array of numbers - [4, 10, 3, 25, 8, 15] and threshold - 9
Expected output: [10, 25, 15] */

// Run both manual and built-in methods with the same test case
let filterGreaterThanInputArray = [4, 10, 3, 25, 8, 15];
let threshold = 9;

console.log(`\n---filter-greater-than---`);
console.log(`Input: array - ${filterGreaterThanInputArray} and threshold - ${threshold}`);
console.log(
  `Manual logic: ${filterGreaterThan(filterGreaterThanInputArray, threshold)}`
);
console.log(
  `Built-in method (filter): ${filterGreaterThanBuiltIn(
    filterGreaterThanInputArray,
    threshold
  )}`
);

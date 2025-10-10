/* Problem : Write a function that takes an array of numbers and returns the largest number

Steps:
1. Loop through the array
2. Compare the numbers with the current largest value and push the larger one into the result variable
3. The value in the result variable may be overwritten as required throughout the loop
4. Return the output as a number */

// Manually loop through and compare without using a built-in method
function findLargestNumber(array) {
  // Returns the largest number

  let largestNumber = array[0];

  for (const number of array) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }

  return largestNumber;
}

// Built-in method : Use Math.max with the spread operator (...) to find the largest number
function findLargestNumberBuiltIn(array) {
  // Returns the largest number using Math.max

  return Math.max(...array);
}

/* Test case
Input : array of numbers - [10,2,33,42,60,12,5,36,81,5]
Expected output : 81 */

// Run both manual and built-in methods with the same test array
let findLargestNumberInputArray = [10, 2, 33, 42, 60, 12, 5, 36, 81, 5];
console.log(`Manual logic : ${findLargestNumber(findLargestNumberInputArray)}`);
console.log(
  `Built-in method (Math.max + spread) : ${findLargestNumberBuiltIn(
    findLargestNumberInputArray
  )}`
);

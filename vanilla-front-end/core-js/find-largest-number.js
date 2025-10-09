/* Problem : Write a function that takes an array of numbers and returns the largest number

Steps:
1. Loop through the array
2. Compare the numbers with their preceding counterpart and push the larger one into the result variable
3. The value in the result variable may be overwritten as required throughout the loop
4. Return the output as a number */

function findLargestNumber(array) {
  // Returns the larest number

  let largestNumber = array[0];

  for (const number of array) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }

  return largestNumber;
}

/* Test case
Input : array of numbers - [10,2,33,42,60,12,5,36,81,5]
Expected output : 81 */

console.log(findLargestNumber([10, 2, 33, 42, 60, 12, 5, 36, 81, 5]));
console.log(findLargestNumber([]));

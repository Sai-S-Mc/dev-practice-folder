/* Problem: Write a function that returns all numbers greater than a given threshold from an input array.

Steps:
1. Loop through the array
2. Compare each number in the array with the iven threshold
3  Add numbers greater than the threshold to an output array
4. Return an array of numbers */

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

/* Test case:
Input : array of numbers - [4, 10, 3, 25, 8, 15] and threshold number - 9
Expected output : [10, 25, 15] */
console.log(filterGreaterThan([4, 10, 3, 25, 8, 15], 9));

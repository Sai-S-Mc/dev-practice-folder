/* Problem : Extract even numbers from an input array into a new array

Steps:
1. Loop through the input array
2. Check if the current number is divisible by 2 (i.e., number % 2 === 0)
3. If true, push it into the output array
4. Return the output array */

// Manually filter without using built-in methods
function getEvenNumbers(array) {
  // Returns an array of even numbers from the input array

  let outputArray = [];

  for (const number of array) {
    if (number % 2 === 0) {
      outputArray.push(number);
    }
  }
  return outputArray;
}

/* Test case
Input : array of numbers - [1, 6, 3, 4, 8, 9]
Expected output : [6, 4, 8] */

console.log(getEvenNumbers([1, 6, 3, 4, 8, 9]));
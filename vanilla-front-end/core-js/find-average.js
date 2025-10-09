/* Problem : Write a function that manually calculates the average of all numbers in an input array

Steps:
1. Loop through the array
2. Add up all the numbers
3. Once the loop is complete, divide the total value by the number of numbers
4. Return the output as a number */

// Manually find the average of the numbers in an input array without using built-in methods
function findAverage(array) {
  // Return the average of the input array

  let sum = 0;

  for (const number of array) {
    sum = sum + number;
  }

  let average = sum / array.length;
  return average;
}

/* Test case:
Input : array of numbers - [12,0,6,-9,38]
Expected output : 9.4 */
console.log(
  `${findAverage([12, 0, 6, -9, 38])} that when rounded is ${Math.round(
    findAverage([12, 0, 6, -9, 38])
  )}`
);

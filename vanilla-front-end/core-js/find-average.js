/* Problem: Write a function that manually calculates the average of all numbers in an input array

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

// Built-in method: reduce() to add up all the numbers in an array and divide by array length
function findAverageBuiltIn(array) {
  // Returns the average of the numbers in an array

  // The accumulator is named sum
  const sum = array.reduce((sum, number) => (sum = sum + number), 0);
  const average = sum / array.length;
  return average;
}

/* Test case:
Input: array of numbers - [12,0,6,-9,38]
Expected output: 9.4 */

// Run both manual and built-in methods with the same test array
findAverageInputArray = [12, 0, 6, -9, 38];
console.log(`\n---find-average---`);
console.log(`Input: ${JSON.stringify(findAverageInputArray)}`);
console.log(
  `Manual logic: ${findAverage(
    findAverageInputArray
  )} which can be rounded to ${Math.round(findAverage(findAverageInputArray))}`
);
console.log(
  `Built-in method (reduce): ${findAverageBuiltIn(
    findAverageInputArray
  )} which can be rounded to ${Math.round(
    findAverageBuiltIn(findAverageInputArray)
  )} `
);

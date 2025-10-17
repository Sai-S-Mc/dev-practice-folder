/* Problem: You are given an array of numbers. Write a function that returns the sum of numbers that appear only once in the array.

Steps:
1. Loop through the array values
2. Add the array items and their occurrences to an object
3. Loop through the object keys 
3. Add up the object keys(numbers) that appear only once (have a value(occurrence) of 1 )
4. Return the output as a number */

// Manually loop through, filter and add up unique numbers
function sumUniqueNumbers(array) {
  // Returns the sum of the unique numbers from the input array

  let occurrencesObject = {};
  let sum = 0;

  for (const number of array) {
    if (number in occurrencesObject) {
      occurrencesObject[number]++;
      continue;
    }
    occurrencesObject[number] = 1;
  }

  for (const key in occurrencesObject) {
    if (occurrencesObject[key] === 1) {
      sum = sum + Number(key);
    }
  }

  return sum;
}

/* Test case:
Input: array of numbers - [1, 2, 2, 3, 4, 4, 5]
Expected output: 9 */

// Run both manual and built-in methods using the same test case
sumUniqueNumbersInputArray = [1, 2, 2, 3, 4, 4, 5];
console.log(`Manual logic (for...of and for...in loops): ${sumUniqueNumbers(sumUniqueNumbersInputArray)}`);

/* Problem: Write a function that takes an array of numbers and returns a new array where:
- All numbers greater than a given threshold are included.
- Each included number is doubled.

Steps:
1. Loop through the array to double the numbers greater than the threshold
2. Return the result as a new array */

// Manually loop through array to double only the numbers that are greater than the threshold

function arrayManipulation(array, threshold) {
  // Returns the doubled values of numbers greater than the threshold as an array

  let result = [];

  for (const number of array) {
    if (number > threshold) {
      result.push(number * 2);
    }
  }

  return result;
}

/* Built-in method:
- Filter numbers greater than the threshold
- Map to double each filtered number */

function arrayManipulationBuiltIn(array, threshold) {
  // Returns an array containing the doubled values of numbers greater than the threshold

  return array
    .filter((number) => number > threshold)
    .map((number) => number * 2);
}

/* Test case:
Input: array of numbers - [1, 5, 10, 3] and threshold - 4
Expected output: [10, 20] */

let arrayManipulationInputArray = [1, 5, 10, 3];
let arrayManipulationThreshold = 4;

// Run both manual logic and built-in methods using the same test array
console.log("\n---array-manipulation---");
console.log(
  `Input: array - ${JSON.stringify(
    arrayManipulationInputArray
  )} and threshold - ${arrayManipulationThreshold}`
);
console.log(
  `Manual logic: ${JSON.stringify(
    arrayManipulation(arrayManipulationInputArray, arrayManipulationThreshold)
  )}`
);
console.log(
  `Built-in method (filter and map): ${JSON.stringify(
    arrayManipulationBuiltIn(
      arrayManipulationInputArray,
      arrayManipulationThreshold
    )
  )}`
);

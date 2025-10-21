/* Problem: You are given an array of numbers. 
Write a function that returns the sum of numbers that appear only once in the array.

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

/* Built-in method: 
1. Use reduce() to map the array items and their occurrences into an object as key-value pairs
2. Extract object keys from the object by using Object.keys()
3. Use reduce() again to add up the numbers that appear only once in the original array */
function sumUniqueNumbersBuiltIn(array) {
  // Returns the sum of the unique numbers from the input array

  // Accumulator is named obj
  let occurrencesObject = array.reduce((obj, number) => {
    if (number in obj) {
      obj[number]++;
    } else {
      obj[number] = 1;
    }

    /* Alternatively: 
        obj[number] = (obj[number] || 0) + 1; */

    return obj;
  }, {});

  // Accumulator is named sum
  return Object.keys(occurrencesObject).reduce((sum, key) => {
    if (occurrencesObject[key] === 1) {
      sum = sum + Number(key);
    }
    return sum;
  }, 0);
}

/* Test case:
Input: array of numbers - [1, 2, 2, 3, 4, 4, 5]
Expected output: 9 */

// Run both manual and built-in methods using the same test case
sumUniqueNumbersInputArray = [1, 2, 2, 3, 4, 4, 5];
console.log("\n---sum-unique-numbers---");
console.log(`Input: ${JSON.stringify(sumUniqueNumbersInputArray)}`);
console.log(
  `Manual logic (for...of and for...in loops): ${sumUniqueNumbers(
    sumUniqueNumbersInputArray
  )}`
);
console.log(
  `Built-in method (reduce and Object.keys): ${JSON.stringify(
    sumUniqueNumbersBuiltIn(sumUniqueNumbersInputArray)
  )}`
);

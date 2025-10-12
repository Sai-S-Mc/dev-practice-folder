/* Problem: Count occurrences of each item in an array

Steps:
1. Loop through the array
2. Add the array item and its count to an object as a key-value pair
3. If the array item already exists in the object, increase its count
4. Return the object with the array items and their occurrence as key-value pairs */

// Manually count occurrences without using built-in methods
function countOccurrences(array) {
  // Returns an object mapping the array items to their occurrence counts

  let outputObject = {};

  for (const item of array) {
    if (item in outputObject) {
      outputObject[item]++;
      continue;
    }
    outputObject[item] = 1;
  }

  return outputObject;
}

// Built-in method: reduce() to accumulate item counts into an object
function countOccurrencesBuiltIn(array) {
  // Returns an object mapping each array item to its frequency of occurrence

  // The accumulator is named outputObject
  return array.reduce((outputObject, fruit) => {
    if (fruit in outputObject) {
      outputObject[fruit]++;
    } else {
      outputObject[fruit] = 1;
    }

    /* Alternatively:
      outputObject[fruit] = (outputObject[fruit] || 0) + 1; */

    return outputObject;
  }, {});
}

/* Test case
Input: array of words - ["apple", "banana", "apple", "cherry", "banana", "apple"]
Expected output: { "apple":3 , "banana":2, "cherry":1} */

// Run both manual and built-in methods with the same test array
let countOccurrencesInputArray = [
  "apple",
  "banana",
  "apple",
  "cherry",
  "banana",
  "apple",
];
console.log(
  "Manual logic: " +
    JSON.stringify(countOccurrences(countOccurrencesInputArray))
);
console.log(
  "Built-in method (reduce): " +
    JSON.stringify(countOccurrencesBuiltIn(countOccurrencesInputArray))
);

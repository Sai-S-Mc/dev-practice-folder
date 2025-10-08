/* Problem : Count occurrences of each item in an array

Steps:
1. Loop through the array
2. Add the array item and its count to an object as a key-value pair
3. If the array item already exists in the object, increase its count
4. Return the object with the array items and their occurrence as key-value pairs */

// Manually count occurrences without using built-in methods
function countOccurrences(array) {
  // returns an object mapping the array items and their occurrence counts

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

/* Test case
Input: array of words - ["apple", "banana", "apple", "cherry", "banana", "apple"]
Expected output: { "apple" : 3 , "banana" : 2, "cherry" : 1} */

console.log(
  "Manual logic : " +
    JSON.stringify(countOccurrences(["apple", "banana", "apple", "cherry", "banana", "apple"]))
);

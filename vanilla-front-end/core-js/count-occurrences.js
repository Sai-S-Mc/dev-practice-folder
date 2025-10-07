/* Problem : Count occurrences of each item in an array

Steps:
1. Loop through the array
2. Add the array item and it's count to an object as a key-value pair
3. If the array item already exists in object, increase the count
4. Return the object with the array items and their occurences as key-value pairs */

function countOccurrences(array) {
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

// Test case
// Input: ["apple", "banana", "apple", "cherry", "banana", "apple"]
console.log(
  countOccurrences(["apple", "banana", "apple", "cherry", "banana", "apple"])
);
// Expected output: { apple : 3 , banana : 2, cherry : 1}

/* Problem: You are given an array of objects representing students and their scores.
Write a function that returns an array of names of students who scored above 90, sorted alphabetically.

Steps:
1. Loop through the array to gain access to each object
2. Add the names of students with a score above 90 to an output array
3. Sort the names alphabetically using a manual sorting approach
4. Return the output
*/

// Manually loop through the array of objects, filter out students with an above 90 score, and sort them alphabetically (lexicographically)
function topStudents(array) {
  // Returns an array containing the names of students who scored higher than 90, sorted alphabetically

  let filteredNames = [];

  // Step 1: Filter students
  for (const obj of array) {
    if (obj.score > 90) {
      filteredNames.push(obj.name);
    }
  }

  /* Step 2: Sort manually using selection sort
  - Assume that the first element of the unsorted portion is the smallest value (the name that appears first alphabetically)
  - Compare it with the rest of the unsorted array items one after another to test this assumption
  - If the assumption is incorrect, remember the index of the smallest value so far
  - After each pass through the array, if the initial assumption is false, swap the smallest value to be the first element of the unsorted portion */
  for (let i = 0; i < filteredNames.length - 1; i++) {
    let smallestValueIndex = i;

    for (let j = i + 1; j < filteredNames.length; j++) {
      if (filteredNames[smallestValueIndex] > filteredNames[j]) {
        smallestValueIndex = j;
      }
    }

    if (smallestValueIndex !== i) {
      let temp = filteredNames[i];
      filteredNames[i] = filteredNames[smallestValueIndex];
      filteredNames[smallestValueIndex] = temp;
    }
  }

  return filteredNames;
}

/* Built-in method: 
- use filter() to extract only the information about students that scored above 90
- use map() to transform the array of objects into just a n array with the student names
- use sort() to sort the names in a lexicographical manner */
function topStudentsBuiltIn(array) {
  // Returns an array containing the names of the student sthat scored above 90

  return array
    .filter((studentObj) => studentObj.score > 90)
    .map((studentObj) => studentObj.name)
    .sort((a, b) => a.localeCompare(b)); // use localeCompare for robust alphabetical sort
}

/* Test case:
Input: 
[
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 87 },
  { name: "David", score: 92 },
]
Expected output: ["Bob", "David"]
*/

// Run both manual and built-in methods using the same test array
let students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 87 },
  { name: "David", score: 92 },
];

console.log("\n---top-students---");
console.log(`Input: ${JSON.stringify(students)}`);
console.log(
  `Manual logic (selection sort): ${JSON.stringify(topStudents(students))}`
);
console.log(
  `Built-in method (filter and sort): ${JSON.stringify(
    topStudentsBuiltIn(students)
  )}`
);

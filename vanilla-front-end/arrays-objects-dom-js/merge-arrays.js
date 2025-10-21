/* Problem: Write a function that merges two arrays and returns a sorted array without duplicates.

Steps:
1. Merge the two arrays 
2. Check for duplicates and create a unique array
3. Sort the unique array
4. Return the sorted array of unique numbers*/

/* Manual method without using built-ins: 
- Merge the two arrays using the spread(...) operator 
- Manually loop through to remove duplicates 
- Sort using bubble sort */

function mergeArrays(arr1, arr2) {
  // Returns a sorted array of unique numbers from the two input arrays

  // Step 1: Merge the two arrays
  let merged = [...arr1, ...arr2];

  let uniqueArray = [];

  // Step 2: Loop through the merged array to extract only unique numbers(no duplicates)
  for (const number of merged) {
    if (!uniqueArray.includes(number)) {
      uniqueArray.push(number);
    }
  }

  // Step 3 :  Call a bubble sort function and return the returned value
  return bubbleSort(uniqueArray);
}

function bubbleSort(arr) {
  // Returns the sorted version of an array

  // Create a  copy to avoid mutating the original array
  let arrayCopy = [...arr]

  // Step 4: Sort the array
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      if (arrayCopy[i] > arrayCopy[i + 1]) {
        let temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[i + 1];
        arrayCopy[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arrayCopy;
}

/* Test case:
Input: two arrays of numbers - [1, 3, 5], [2, 3, 4]
Expected output: */

// Run both manual logic and built-in methods using the same test array
let arrayToMerge1 = [1, 3, 5];
let arrayToMerge2 = [2, 3, 4];
console.log("\n---merge-arrays---");
console.log(
  `Input: ${JSON.stringify(arrayToMerge1)}, ${JSON.stringify(arrayToMerge2)}`
);
console.log(
  `Manual logic: ${JSON.stringify(mergeArrays(arrayToMerge1, arrayToMerge2))}`
);

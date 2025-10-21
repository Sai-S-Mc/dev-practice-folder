/* Problem: Write a function that takes an array of numbers and 
returns a new array sorted in ascending order.

Steps:
1. Loop through the array to sort in ascending order
2. Return the sorted array */

function cloneArray(array){
    return [...array]
}

/* Manually sort the array using selection sort:
- Assume that the first element of the unsorted portion is the smallest.
- Compare this assumption with all the other unsorted elements one by one.
- If the assumption is false, remember the index of the smallest value so far.
- After one full pass, if the assumption was untrue,
  move the smallest element to the start of the unsorted portion.
- Repeat until the array is fully sorted. */

function arraySorting(array) {
  // Returns a new array sorted in ascending order using selection sort

  let arrayCopy = cloneArray(array);

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    let smallestValueIndex = i;
    for (let j = i + 1; j < arrayCopy.length; j++) {
      if (arrayCopy[smallestValueIndex] > arrayCopy[j]) {
        smallestValueIndex = j;
      }
    }

    if (smallestValueIndex !== i) {
      let temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy[smallestValueIndex];
      arrayCopy[smallestValueIndex] = temp;
    }
  }

  return arrayCopy;
}


/* Test case:
Input: array of numbers - [5, 2, 9, 1, -10, -1];
Expected output: [-10,-1,1,2,5,9] */

let arraySortingInput = [5, 2, 9, 1, -10, -1];

// Run both manual logic and built-in methods using the same test array
console.log("\n---array-sorting---");
console.log(`Input: ${JSON.stringify(arraySortingInput)}`);
console.log(`Manual logic: ${JSON.stringify(arraySorting(arraySortingInput))}`);

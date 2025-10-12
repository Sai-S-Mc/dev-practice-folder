/* Problem: Write a function that takes a string containing multiple words and returns a new string where the first letter of each word is capitalized.
Words are separated by spaces.

Steps:
1. Convert the string of words into an array of strings
2. Loop through the array
3. Capitalize the first character of each array item and add it to an output array
4. Convert the output array into an output string
5. Return the output string */

// Title case words using controlled string manipulation
function titleCaseWords(str) {
  // Return a string with title cased words

  let outputArray = [];
  for (const word of str.split(" ")) {
    let titleCasedWord = word.charAt(0).toUpperCase() + word.slice(1);
    outputArray.push(titleCasedWord);
  }

  return outputArray.join(" ");
}

// Built-in method : use map() with split and join to title case the words in a string
function titleCaseWordsBuiltIn(str) {
  // Returns a string with title cased words

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* Test case
Input: string of words - "hello world from javascript"
Expected output: "Hello World From Javascript" */

let titleCaseWordsInput = "hello world from javascript";
console.log(
  `Manual (split + loop + join) logic: ${titleCaseWords(titleCaseWordsInput)}`
);
console.log(
  `Built-in method (split + map + join): ${titleCaseWordsBuiltIn(
    titleCaseWordsInput
  )}`
);

/* Problem: Write a function that takes a string and returns the reversed version of that string

Steps:
1. Loop through the string
2. Push characters into a new variable in the reverse order of the input
3. Return the output as a string */

// Manually reverse the string without built-in-methods
function reverseString(str) {
  // Returns a string that is the input string reversed

  let outputString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    outputString = outputString + str[i];
  }

  return outputString;
}

/* Test case
Input: string - "hello"
Expected output: olleh */ 

console.log(reverseString("hello"));
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

// Built-in method: use reverse() to reverse a string
function reverseStringBuiltIn(str) {
  // Returns the string reversed

  return str.split("").reverse().join("");

  /* Alternatively 
  return [...str].reverse().join('')
    or 
  return Array.from(str).reverse().join('')*/
}

/* Test case
Input: string - "hello"
Expected output: olleh */

// Run both manual and built-in methods with the same test case
let reverseStringInput = "hello";
console.log(`\n---reverse-string---`);
console.log(`Input: ${reverseStringInput}`);
console.log(`Manual logic: ${reverseString(reverseStringInput)}`);
console.log(
  `Built-in method (reverse): ${reverseStringBuiltIn(reverseStringInput)}`
);

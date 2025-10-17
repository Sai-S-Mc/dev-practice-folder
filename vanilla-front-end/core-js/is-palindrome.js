/* Problem: Write a function that takes a string as input and determines whether it reads the same backward as forward. 
Ignore spaces, punctuation, and capitalization when making the comparison.
Return true if the string is a palindrome, and false otherwise.

Steps:
1. Normalize the string by lowercasing all of it and removing unnecessary spacing
2. Loop through the string in reverse
3. Accumulate the reversed string in an output string
4. Compare input and output strings using conditional statements
5. Return true if they are the same, otherwise return false */

// Manually loop through string without using built-in reversal methods alog with regex to normalize the string
function isPalindrome(str) {
  // Return true or false

  let normalized = "";
  let reversed = "";

  for (const char of str) {
    if (/[a-z0-9]/i.test(char)) {
      normalized = normalized + char.toLowerCase();
    }
  }

  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed = reversed + normalized[i];
  }

  return normalized === reversed;
}

// Built-in method: use regex to normalize string, then reverse it using split(), reverse(), and join()
function isPalindromeBuiltIn(str) {
  // Return true or false
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");

  return normalized === reversed;
}

/* Test case:
Input: array of strings - ["racecar", "A man a plan a canal Panama", "hello"];
Expected output: [true, true, false] */

// Run both  manual and built-in methods with the same test case
let isPalindromeInputArray = [
  "racecar",
  "A man a plan a canal Panama",
  "hello",
];

console.log(`\n---is-palindrome---`);
for (const input of isPalindromeInputArray) {
  console.log(`Input: ${input}`);
  console.log(`Manual logic: ${isPalindrome(input)}`);
  console.log(
    `Built-in method (split + reverse + join): ${isPalindromeBuiltIn(input)}\n~`
  );
}

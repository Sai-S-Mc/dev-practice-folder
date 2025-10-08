/* Problem : Write a function that loops from 1 to 20
For each number:
- If divisible by 3, print "Fizz"
- If divisible by 5, print "Buzz"
- If divisible by both 3 and 5, print "FizzBuzz"
- Otherwise, print the number

Steps:
1. Loop through 1 to 20 
2. Generate an output of Fizz/Buzz/FizzBuzz/number based on divisibility
3. Return the output as an array of numbers and/or strings */


// Manually loop through the array without using built-in methods
function fizzBuzz() {
  // Returns an array of strings and numbers based on divisibility rules from 1 to 20

  let outputArray = [];

  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      outputArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      outputArray.push("Fizz");
    } else if (i % 5 === 0) {
      outputArray.push("Buzz");
    } else {
      outputArray.push(i);
    }
  }
  return outputArray;
}

/* Test case
Input : none (1-20 range is fixed)
Expected output : [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz'] */

console.log(fizzBuzz());
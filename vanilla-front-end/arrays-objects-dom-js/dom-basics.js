/* Basic DOM manipulation Challenge
  Prompt: Select an existing h1 element and update its content and style using JavaScript. */

let headingElement = document.getElementById("heading");

// Dynamically update the heading's content and styling after a delay of 3000ms
setTimeout(() => {
  headingElement.textContent = "Hi! This is the new heading.";
  headingElement.style.color = "seagreen";
  headingElement.style.fontSize = "80px";
}, 3000);
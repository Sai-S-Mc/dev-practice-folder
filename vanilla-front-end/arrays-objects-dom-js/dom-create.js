/* 
Create, append, and update elements in the DOM
Prompt: Create a simple interactive feature where clicking a button dynamically adds a new list item to an existing unordered list on the page.
*/

// Keeps track of the number of list items added 
let itemCount = 1;

function handleClick() {
  // Adds a new list item to the ul

  const ulElement = document.getElementById("list");
  const liElement = document.createElement("li");
  liElement.textContent = `${itemCount}. I am a new list item`;
  ulElement.appendChild(liElement);
  itemCount++;
}

const addItemButton = document.getElementById("add-item-btn");
addItemButton.addEventListener("click", handleClick);

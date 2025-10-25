// Enable users to add, edit or delete list items

let listContainer = document.getElementById("unordered-list");
let addButton = document.getElementById("add-list-btn");
let note = document.getElementById("note");

function setListContent() {
  Array.from(listContainer.children).forEach((list, index) => {
    let span = list.querySelector("span");
    if (!span.classList.contains("edited")) {
      span.textContent = `List item ${index + 1}`;
    }
  });
}

function addList() {
  /* Create a list item, update its content and append it to the parent <ul>.
    Track list item number and display the same */

  let listItem = document.createElement("li");
  listItem.innerHTML = `<button class="edit-list-btn">Edit</button><span></span><button class="delete-list-btn">Delete</button>`;
  listContainer.append(listItem);
  note.classList.add("hidden");
  setListContent();

  /* Select each list item's edit and delete buttons as they are added, 
  add event listeners with their respective callback functions

    listItem.querySelector(".edit-list-btn").addEventListener("click", editList);
    listItem.querySelector(".delete-list-btn").addEventListener("click", deleteList);  */

  // Alternatively use event delegation for scalability as seens in the global scope
}

function editList(event) {
  // Enable targeted list content editing
  let targetListItem = event.target.parentNode;
  let targetSpan = targetListItem.querySelector("span");
  let newText = prompt("Enter new text", targetSpan.textContent);
  if (newText !== null && newText.trim()) {
    targetSpan.textContent = newText.trim();
    targetSpan.classList.add("edited");
  }
}

function deleteList(event) {
  // Remove the target list item

  let targetListItem = event.target.parentNode;
  listContainer.removeChild(targetListItem);
  setListContent();

  if (listContainer.children.length === 0) {
    note.classList.remove("hidden");
  }
}

function handleClick(event) {
  // Assigns the event to the appropriate element

  if (event.target.classList.contains("edit-list-btn")) {
    editList(event);
  } else if (event.target.classList.contains("delete-list-btn")) {
    deleteList(event);
  }
}

addButton.addEventListener("click", addList);

// Event delegation event listener with callback
listContainer.addEventListener("click", handleClick);

// Enable users to add new list items, and edit or delete the most recent one

let listContainer = document.getElementById("ordered-list");
let note = document.getElementById("note");
let edited = false;
let messages = {
  default: "I am a list item",
  last: "I am the last list item",
  emptyEdit: "Hmm! You gave me nothing",
};

function setLastItemText() {
  let lastListElement = listContainer.lastElementChild;
  if (lastListElement) lastListElement.textContent = messages.last;
}

function addList() {
  /* Create a list item, update its content and append it to the parent element.
  If there's more than 1 list item, explicitly state which one's last. */

  let listItem = document.createElement("li");
  listContainer.appendChild(listItem);

  // Conditionally render content depending upon the list item's position
  if (listContainer.children.length === 1) {
    listItem.textContent = messages.default;
  } else {
    setLastItemText();
    if (!edited) {
      let lastButOne = listContainer.lastElementChild.previousElementSibling;
      lastButOne.textContent = messages.default;
    }
  }
  edited = false;
  note.textContent = "";
  note.classList.add("hidden");
}

function editList() {
  /* Check that there are list items to edit, prompt user for input and update the last list item.
  Provide user feedback for edge cases */

  if (listContainer.children.length > 0) {
    let newText = prompt(
      "Enter your text here:",
      listContainer.lastElementChild.textContent
    );
    if (newText !== null && newText.trim()) {
      listContainer.lastElementChild.textContent = newText;
      edited = true;
    } else {
      listContainer.lastElementChild.textContent = messages.emptyEdit;
      setTimeout(() => {
        setLastItemText();
      }, 2000);
    }
  } else {
    note.textContent = "No items to edit";
  }
}

function deleteList() {
  // Delete the last list item and adjust its predecessor's text accordingly

  if (listContainer.children.length === 0) {
    note.textContent = "No items to delete";
    return;
  }

  listContainer.removeChild(listContainer.lastElementChild);

   if (listContainer.children.length === 0) {
    edited = false;
    note.classList.remove("hidden");
    note.textContent = "Add list items to start";
  } else if (
    listContainer.lastElementChild.textContent === messages.default
  ) {
    setLastItemText();
  }

}

let addButton = document.getElementById("add-list-btn");
addButton.addEventListener("click", addList);

let editButton = document.getElementById("edit-list-btn");
editButton.addEventListener("click", editList);

let deleteButton = document.getElementById("delete-list-btn");
deleteButton.addEventListener("click", deleteList);

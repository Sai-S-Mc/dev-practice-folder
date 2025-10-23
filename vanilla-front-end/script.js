function getKeyConcepts(requirementArray) {
  return requirementArray
    .map((eachRequirement) => {
      return `<li>${eachRequirement}</li>`;
    })
    .join("");
}

function getHtmlCssData(data) {
  return data
    .map((obj) => {
      return `<li class = "each-exercise">
        <strong>Challenge</strong> : ${obj.challenge} <br />
        <strong>Overview</strong>: ${obj.overview} <br />
        <strong>Key Concepts</strong>: <ul>${getKeyConcepts(
          obj.keyConcepts
        )}</ul>
        <strong>File</strong>:
        <a href = "${obj.url}" class="functional-link">
          ${obj.urlName}
        </a>
      </li>`;
    })
    .join("");
}

let htmlCssData = [
  {
    challenge:
      "Recreate a simple blog-style layout using only semantic HTML + box model (no Flexbox/Grid yet).",
    overview: "Implement semantic HTML + CSS box model layout",
    keyConcepts: [
      "Use only semantic HTML tags Style layout using margins, padding, borders, and box-sizing",
      "Keep everything in one file (semantic-layout.html)",
    ],
    url: "core-html-css/semantic-layout.html",
    urlName: "semantic-layout.html",
  },
  {
    challenge:
      "Select an existing h1 element and update its content and style using JavaScript.",
    overview: "Demonstrate basic DOM manipulation using JavaScript",
    keyConcepts: [
      "Select the h1 element by id or querySelector",
      "Change the text content to something new",
      "Update the color and font size using JS (.style)",
    ],
    url: "dom-html-css/dom-basics.html",
    urlName: "dom-basics.html",
  },
  {
    challenge:
      "Create a small interactive feature where a user types text into an input field, and that text immediately appears below it as they type.",
    overview: "Demonstrate real-time DOM updates using event listeners and user input",
    keyConcepts: [
      "Add an input element and a p element for displaying output",
      "Update the p element's content to match what the user types",
      "Optionally, include a brief placeholder in the input (e.g., “Type something here…”)",
    ],
    url: "dom-html-css/dom-input.html",
    urlName: "dom-input.html",
  },
  {
    challenge:
      "Create a simple interactive feature where clicking a button dynamically adds a new list item to an existing unordered list on the page.",
    overview: "Demonstrate how to create, append, and update elements in the DOM using JavaScript",
    keyConcepts: [
      "Include an empty ul element and a button labeled 'Add Item'",
      "Each time the button is clicked, create a new li with text like 'Item 1', 'Item 2, etc.",
      "Append the new list item to the ul using JavaScript.",
    ],
    url: "dom-html-css/dom-create.html",
    urlName: "dom-create.html",
  },
];

let htmlCssElement = document.querySelector("#html-css-section");

htmlCssElement.innerHTML = getHtmlCssData(htmlCssData);

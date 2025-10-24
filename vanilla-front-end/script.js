function getKeyConcepts(conceptsArray) {
  return conceptsArray
    .map((eachConcept) => {
      return `<li>${eachConcept}</li>`;
    })
    .join("");
}

function getImplementationDetails(DetailsArray) {
  return DetailsArray.map((eachDetail) => {
    return `<li>${eachDetail}</li>`;
  }).join("");
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
        <strong>Implementation Details</strong>: <ul>${getImplementationDetails(
          obj.implementationDetails
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
    challenge: "Semantic blog layout",
    overview:
      "Demonstrates a foundational HTML/CSS layout using semantic HTML and the CSS box model, emphasizing clean structure, accessibility, and predictable spacing.",
    keyConcepts: [
      "Use of semantic HTML tags (header, main, article, aside, footer)",
      "Applying margins, padding, borders, and box-sizing for layout control",
    ],
    implementationDetails: [
      "The layout includes a semantic header containing the site title and navigation",
      "Main content includes an article for a blog post and an aside for extra information",
      "Footer contains additional information, a placeholder copyright notice, and demonstration links for navigation context",
      "CSS styling demonstrates spacing, alignment, and visual hierarchy using the box model",
    ],
    url: "core-html-css/semantic-layout.html",
    urlName: "semantic-layout.html",
  },
  {
    challenge: "Timed DOM update",
    overview:
      "Demonstrates foundational DOM manipulation by dynamically updating existing HTML content and styling using JavaScript. The focus is on selecting elements efficiently and applying visual changes through script-driven interaction.",
    keyConcepts: [
      "Selecting DOM elements (getElementById, querySelector)",
      "Dynamic text and style updates",
      "Using setTimeout() for delayed actions",
    ],
    implementationDetails: [
      "The page begins with a static h1 element",
      "After a short delay, JavaScript updates both its text content and visual styling",
      "This illustrates how simple DOM scripts can control user-visible changes dynamically",
    ],
    url: "dom-html-css/dom-basics.html",
    urlName: "dom-basics.html",
  },
  {
    challenge: "Live text mirror",
    overview:
      "Implements real-time DOM updates by mirroring user input directly on the page as they type. This challenge highlights two-way interaction and immediate feedback in web interfaces.",
    keyConcepts: [
      "Listening for the input event",
      "Updating text content dynamically",
      "Managing user interactions with minimal code",
    ],
    implementationDetails: [
      "The page includes a text input and an empty paragraph",
      "As the user types, the paragraph content updates instantly to match the input",
      "Demonstrates real-time UI feedback and event-driven updates",
    ],
    url: "dom-html-css/dom-input.html",
    urlName: "dom-input.html",
  },
  {
    challenge: "Dynamic list manager",
    overview:
      "Showcases how to dynamically create, append, and update elements in the DOM, reinforcing how JavaScript can build and manage content structures in response to user interaction.",
    keyConcepts: [
      "Creating elements using document.createElement()",
      "Appending new nodes to the DOM",
      "Tracking state (list length) to label new elements sequentially",
    ],
    implementationDetails: [
      "Includes a button labeled 'Add Item' and an initially empty ul",
      "Each button click creates a new li element ('Item 1', 'Item 2', etc.) appended to the list",
      "Demonstrates clean, reusable DOM update logic tied to event listeners",
    ],
    url: "dom-html-css/dom-create.html",
    urlName: "dom-create.html",
  },
  {
    challenge: "Live text mirror",
    overview:
      "Implements real-time DOM updates by mirroring user input directly on the page as they type. This challenge highlights two-way interaction and immediate feedback in web interfaces.",
    keyConcepts: [
      "Listening for the input event",
      "Updating text content dynamically",
      "Managing user interactions with minimal code",
    ],
    implementationDetails: [
      "The page includes a text input and an empty paragraph",
      "As the user types, the paragraph content updates instantly to match the input",
      "Demonstrates real-time UI feedback and event-driven updates",
    ],
    url: "dom-html-css/dom-create.html",
    urlName: "dom-create.html",
  },
];

let htmlCssElement = document.querySelector("#html-css-section");

htmlCssElement.innerHTML = getHtmlCssData(htmlCssData);

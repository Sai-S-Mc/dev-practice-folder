function getRequirements(requirementArray) {
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
        <strong>Prompt</strong> : ${obj.prompt} <br />
        <strong>Goal</strong>: ${obj.goal} <br />
        <strong>Requirements</strong>: <ul>${getRequirements(
          obj.requirements
        )}</ul>
        <strong>Answer</strong>:
        <a href = "${obj.url}" class="functional-link">
          ${obj.urlName}
        </a>
      </li>`;
    })
    .join("");
}

let htmlCssData = [
  {
    prompt:
      "Recreate a simple blog-style layout using only semantic HTML + box model (no Flexbox/Grid yet).",
    goal: "Implement semantic HTML + CSS box model layout",
    requirements: [
      "Use only semantic HTML tags Style layout using margins, padding, borders, and box-sizing",
      "Keep everything in one file (semantic-layout.html)",
    ],
    url: "core-html-css/semantic-layout.html",
    urlName: "semantic-layout.html",
  },
  {
    prompt:
      "Select an existing h1 element and update its content and style using JavaScript.",
    goal: "Demonstrate basic DOM manipulation using JavaScript",
    requirements: [
      "Select the h1 element by id or querySelector",
      "Change the text content to something new",
      "Update the color and font size using JS (.style)",
    ],
    url: "dom-html-css/dom-basics.html",
    urlName: "dom-basics.html",
  },
  {
    prompt:
      "Create a small interactive feature where a user types text into an input field, and that text immediately appears below it as they type.",
    goal: "Demonstrate real-time DOM updates using event listeners and user input",
    requirements: [
      "Add an input element and a p element for displaying output",
      "Update the p element's content to match what the user types",
      "Optionally, include a brief placeholder in the input (e.g., “Type something here…”)",
    ],
    url: "dom-html-css/dom-input.html",
    urlName: "dom-input.html",
  },
];

let htmlCssElement = document.querySelector("#html-css-section");

htmlCssElement.innerHTML = getHtmlCssData(htmlCssData);

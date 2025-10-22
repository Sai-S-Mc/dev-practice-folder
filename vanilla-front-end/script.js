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
      return `<li>
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
    prompt: "Now for the semantic HTML + box model layout challenge:",
    goal: "Recreate a simple blog-style layout using only semantic HTML + box model (no Flexbox/Grid yet).",
    requirements: [
      "Use only semantic HTML tags Style layout using margins, padding, borders, and box-sizing",
      "Keep everything in one file (semantic-layout.html)",
    ],
    url: "core-html-css/semantic-layout.html",
    urlName: "semantic-layout.html",
  },
];

let htmlCssElement = document.querySelector("#html-css-section");

htmlCssElement.innerHTML = getHtmlCssData(htmlCssData);

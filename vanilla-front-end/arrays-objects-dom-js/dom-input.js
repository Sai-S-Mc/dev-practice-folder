function handleInput(event) {
  // Updates the content of the 'result' paragraph according to the user input

  const resultElement = document.getElementById("result");
  let input = event.target.value.trim();

  if (input) {
    resultElement.textContent = `You typed: ${input}`;
  } else {
    resultElement.textContent = `Type something other than space`;
  }
}

const inputElement = document.getElementById("user-input");
inputElement.addEventListener("input", handleInput);

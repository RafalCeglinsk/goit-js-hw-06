const formInput = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

formInput.addEventListener("input", () => {
    const name = formInput.value.trim();
    spanOutput.textContent = name === "" ? "Anonymous" : name;
  });
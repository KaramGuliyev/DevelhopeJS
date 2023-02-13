// Get the value of the form-input text input field and print it in the console. NEW TASK

let form_input = document.getElementsByClassName("form-input");

for (let i = 0; i < form_input.length; i++) {
  const element = form_input[i];

  console.log(element.value);
}

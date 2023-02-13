// // Get the value of the firstName text input field and print it in the console.

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let firstNameLabel = document.getElementById("firstName");
let divLength = document.getElementsByTagName("div").length;

function findElements(el) {
  elements = document.getElementsByTagName("label").item(`${el}`);
  return elements;
}

function findValues(el) {
  values = document.getElementsByTagName("input").item(`${el}`);
  return values
}

for (let i = 0; i < divLength; i++) {
  let labels = findElements(i);
  let values = findValues(i)
  console.log(labels.innerHTML, values.value);
}

// "You have to select the labels too, and get the text from them. Don't write "Last Name" inside of console log, get the value from inside the label element."

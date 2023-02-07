// In the exercise.js file, we find a user object. Write a function that saves the user object in localStorage with its 'user' key.

const age = document.getElementById("age");
const username = document.getElementById("username");
const state = document.getElementById("state")

function setUser() {
  const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  localStorage.setItem("user", JSON.stringify(user));
  state.innerHTML = `${user.name} <br/> Saved to Local Storage!`
}

function clearUser() {
  const user = JSON.parse(localStorage.getItem("user"))
  state.innerHTML = `${user.name} <br/> Cleared from Local Storage!`
  localStorage.clear();
}

function getUser() {
  const user = JSON.parse(localStorage.getItem("user"))
  age.innerHTML = user.age
  username.innerHTML = user.name
  state.innerHTML = `${user.name} <br/> got from Local Storage!`
}

// Starting from the previous exercise, write a method that recovers the data saved in localStorage and prints them in the console.

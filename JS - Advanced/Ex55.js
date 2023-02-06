// Write a first promise that takes as parameter the variable isLogged . If the variable is true, then we return a random number from the resolve, otherwise
// we dispatch an error. We write a second promise that takes a variable of type number as a parameter. If the input parameter is greater than 0.5,
// in the resolve we must return the following data: {name: "John", age: 24}, otherwise we must dispatch an error.

// Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}

const isLogged = true;

function isLoggedIn(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      return resolve(Math.random());
    } else {
      return reject(console.log("Not Logged In"));
    }
  });
}

function getUserDetails(value) {
  console.log(value);
  return new Promise((resolve, reject) => {
      if (value > 0.5) {
         resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Error"));
    }
  });
}

isLoggedIn(isLogged)
  .then((val) => getUserDetails(val))
  .then((val) => console.log(val));

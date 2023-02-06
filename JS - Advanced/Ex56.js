// Write a first promise that takes as parameter the variable isLogged . If the variable is true, then we return a random number from the resolve, otherwise
// we dispatch an error. We write a second promise that takes a variable of type number as a parameter. If the input parameter is greater than 0.5,
// in the resolve we must return the following data: {name: "John", age: 24}, otherwise we must dispatch an error.

// Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}

const isLogged = true;

// isLogged -> getUserDetails -> userObject

class myClass {
  constructor(err) {
    this.err = err;
  }

  static isUserLoggedIn(isLogged) {
    if (isLogged) {
      return Math.random();
    } else {
      throw myClass.myError();
    }
  }

  static myError(err) {
    throw new Error(err);
  }
}

function isLoggedIn(isLogged) {
  return new Promise((resolve, reject) => {
    try {
      resolve(myClass.isUserLoggedIn(isLogged));
    } catch {
      reject(myClass.myError("User is not Logged in!"));
    }
  });
}

function getUserDetails(value) {
  console.log(value);
  return new Promise((resolve, reject) => {
    try {
      if (value > 0.5) {
        resolve(console.log("tried and passed"), { name: "John", age: 24 });
      }
    } catch {

      this.myError = new myError("Error");
      return reject(console.log("ERR"), this.myError);
    }
  });
}

isLoggedIn(isLogged)
  //   .then((val) => getUserDetails(val))
  .then((val) => console.log(val));

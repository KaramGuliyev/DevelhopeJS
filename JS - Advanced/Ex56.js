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

  static getUserDetails(id) {
    if (id > 0.5) {
      let userDetails = { name: "John", age: 24 };
      return userDetails;
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
  return new Promise((resolve, reject) => {
    try {
      resolve(myClass.getUserDetails(value));
    } catch {
      reject(myClass.myError("User ID is not correct!"));
    }
  });
}

isLoggedIn(isLogged)
  .then((val) => getUserDetails(val))
  .then((val) => {
    isLogged
      ? console.log(`Welcome your ID is ${myClass.isUserLoggedIn(isLogged)}`)
      : console.log("wubba lubba dub");
    getUserDetails(myClass.isUserLoggedIn(isLogged))
      ? console.log(`Hello ${val.name} how does it feels like being at ${val.age}?`)
      : console.log("wubba lubba dub");
  }).catch((err) => {
    new Error(err)
  })


  // I just added catch and leaved the myClass
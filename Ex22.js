// In the code below we have an object literal called user that has two properties: name and age.
// If we try to create a newUser starting from user and, after that, we try to change the name,
// you'll notice that even the original user has been modified. How can we modify the name of newUser without changing the name of user?

const user = {
  name: "Cosimo",
  age: 30,
};


// This is the way that I find first, but you told me to use for
// let newUser = Object.assign({}, user); 

newUser = {}

for (let key in user) {
    newUser[key] = user[key]
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);

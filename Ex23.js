// Do you know any other way to copy the user object without changing its properties?

let user = {
  name: "Matteo",
  age: 30,
};
// I can be a Medium or something I just found different way to do it and you are asking for it. 
// Not gonna lie, I think there will be more than 2 ways to copy an object but I'm not gonna spend more time on it. Of course if you are not willing to ask third way to do it. I will see in next 1 min.

let newUser = Object.assign({}, user); 

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
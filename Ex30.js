// Create a function called nicknameMap that takes in an array of people and returns an array of nicknames. The nickname should be composed in this way: <name>-<age>.

// Example:

// { name: 'Paul', age: 21 } => Paul-21

let user = [{
  name: "Karam",
  age: 23,
}];

nicknameMap = (prop) => {
  let result = prop.map((i) => i.name + "-" + i.age);
  console.log(result);
}

nicknameMap(user);

// Given the following array:

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
// Print all the elements of the array.

// students.forEach(element => {
//     console.log(element);
// });

// let i = 0;
// while (i < students.length) {
//     console.log(students[i]);
//     i+=1
// }

for (let i = 0; i <= students.length; i++) {
  console.log(students[i]);
}

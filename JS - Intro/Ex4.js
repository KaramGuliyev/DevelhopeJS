const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(
    name == lastname, // false
    age <= average, // true
    firstYearCompleted == lastname, // false
    yearsCompleted == firstYearCompleted, // true
    firstYearCompleted === yearsCompleted, // false
    examsCompleted < age, //true 
    isGraduated > yearsCompleted // false
    );
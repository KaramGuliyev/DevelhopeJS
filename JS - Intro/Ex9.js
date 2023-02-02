// Create a variable called password. 
// If the password length is between 4 and 6, print the message Password length is correct, 
// otherwise print the message Password not valid.

let password = "173899";

if(password.length >= 4 && password.length <= 6) {
    console.log("Password length is correct");
} else {
    console.log("Password not valid");
}

console.log(password.length);
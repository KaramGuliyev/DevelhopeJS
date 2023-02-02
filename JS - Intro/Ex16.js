// Starting from the previous exercise, we want to print the "Hello" "Name" strings after one second. 
// In order to achieve this, we can use the setTimeout() JavaScript function. 
// This function takes in two parameters: the first one is a function, the second one is the delay time.

function sayHelloName(printName) {
    console.log("Hello ");
    printName;
}

function printName(userDetails, delayTime) {
    setTimeout(function(){
        return console.log(userDetails);;
    }, delayTime)
}

sayHelloName(printName("Karam", 100))
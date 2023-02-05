// Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?
// The callback function must be an arrow function, can you also explain why?

// Write a function called repeatHello, which will take as parameter a callback.
// The callback function will simply print "Hello". The repeatHello function will have to execute the callback function with an interval of 1 second.
// The callback function must be an arrow function, can you also explain why?

function repeatHello(callback) {
  let id = setInterval(callback, 1000);

  setTimeout(() => {
    clearInterval(id);
  }, 5000);
}

let hello = () => {
  console.log("Hello");
};

repeatHello(hello);

// I'm not sure but I think arrow function needs a action to be called. 

// If you run this function, you'll get an error. Fix the function and explain briefly what's wrong.

function canPlay() {
  let sport = " Football";
  let personName = "Cosimo";
  console.log(personName + sport);

  if (true) {
    // let personName = "Cosimo";
  }

}

canPlay();


// Due to we can not reach variables in blocks, we get that error. 
// To fix that error we can add variable globally or we can just create an a variable called personName inside our function. 
// There is no need to use "this".
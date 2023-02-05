// Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject.
// Then manage the promise with then and catch in case of any reject.

const number = Math.round(Math.random() * 20) ;

const myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(`Our number "${number}" is greater than 10."`);
  } else if (number < 10) {
    reject(`Our number "${number}" is lower than 10."`);
  }
});

myPromise.then((val) => console.log(val)).catch((err) => console.log(err));

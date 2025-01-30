//Task one: Create a function that checks if a number is prime
//first way

let n = 13;
let isPrime = true;

function primeNumber(n, isPrime) {
  if (n <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
}
console.log({ n }, isPrime ? "it's a prime number" : "it's not a prime number");

//second way

function isitPrime(number_check) {
  if (number_check <= 1) {
    console.log({ number_check }, "it isn't a prime number");
  } else {
    for (let i = 2; i < number_check; i++) {
      if (number_check % i === 0) {
        console.log({ number_check }, "it isn't a prime number");
        break;
      } else {
        console.log({ number_check }, "it is a prime number");
        break;
      }
    }
  }
}
isitPrime(16);

//task two: Create a function that converts time from 24-hour format to 12-hour format.

//task three: Write a function that checks if a number is within a specified range.

function isinRange(number, min, max) {
  if (number > min && number < max) {
    console.log({ number }, "it is in range");
  } else {
    console.log({ number }, "it isn't in range");
  }
}
isinRange(70, 20, 50);

//task four: Create a function that calculates Body Mass Index (BMI) and categorizes it based on the input weight and height. The output should indicate whether the result is "Underweight," "Normal weight," "Overweight," or "Obesity."

function bmiCalc(weight, height) {
  if (weight / height ** 2 < 18.5) {
    console.log("you're in the underweight range");
  } else if (weight / height ** 2 < 25) {
    console.log("you're in the healthy weight range");
  } else if (weight / height ** 2 < 30) {
    console.log("you're in the overweight range");
  } else {
    console.log("you're in the obese range");
  }
}
bmiCalc(50, 1.65);

//task five: Create a function that checks if a year is a leap year.

function isLeap(year) {
  if (year % 4 === 0) {
    console.log({ year }, "it's a leap year");
  } else {
    console.log({ year }, "it's not a leap year");
  }
}
isLeap(2001);

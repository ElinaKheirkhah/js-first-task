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
console.log({n}, isPrime ? "it's a prime number" : "it's not a prime number");


//second way

function isitPrime(number_check) {
    if (number_check <= 1) {
        console.log({number_check}, "it isn't a prime number")
    } else {
        for (let i = 2; i < number_check; i++) {
            if (number_check % i === 0) {
                console.log({number_check}, "it isn't a prime number")
                break;
            } else {
                console.log({number_check}, "it is a prime number")
                break;
            } 
        }
    }
}
isitPrime(16)


//task two: Create a function that converts time from 24-hour format to 12-hour format.


//task three: Write a function that checks if a number is within a specified range.

function isinRange(number, min, max) {
    if (number > min && number < max) {
        console.log({number}, "it is in range")
    } else {
        console.log({number}, "it isn't in range")
    }
}
isinRange(70, 20, 50)




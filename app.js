//Task one: Create a function that checks if a number is prime

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
//Task one: Create a function that checks if a number is prime

let n = 14;
let isPrime = true;

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
console.log("{n}:", isPrime ? "it's a prime number" : "it's not a prime number");

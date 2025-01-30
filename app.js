//Task one: Create a function that checks if a number is prime

let n = 15;
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; n > 1; i++) {
    if (n % i === 0) {
      isPrime = false;
    }
  }
}

console.log("{n}:", isPrime ? "it's a prime number" : "it's a prime number");

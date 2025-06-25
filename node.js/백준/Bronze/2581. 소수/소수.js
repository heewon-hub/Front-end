const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let primes = [];

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

if (primes.length === 0) {
  console.log(-1);
} else {
  const sum = primes.reduce((a, b) => a + b, 0);
  const min = Math.min(...primes);
  console.log(sum);
  console.log(min);
}
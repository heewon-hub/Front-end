const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = input.split(" ").map(Number);

let divisors = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisors.push(i);
  }
}

if (divisors.length < K) {
  console.log(0);
} else {
  console.log(divisors[K - 1]);
}
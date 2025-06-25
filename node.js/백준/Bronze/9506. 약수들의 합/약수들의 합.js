const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let line of input) {
  const n = Number(line);
  if (n === -1) break;

  let divisors = [];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }

  const sum = divisors.reduce((a, b) => a + b, 0);

  if (sum === n) {
    console.log(`${n} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}
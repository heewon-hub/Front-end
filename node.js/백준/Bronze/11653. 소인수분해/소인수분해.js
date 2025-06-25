const fs = require("fs");
let N = Number(fs.readFileSync("/dev/stdin").toString().trim());

if (N === 1) {
  return;
}

let divisor = 2;
while (N > 1) {
  if (N % divisor === 0) {
    console.log(divisor);
    N = N / divisor;
  } else {
    divisor++;
  }
}
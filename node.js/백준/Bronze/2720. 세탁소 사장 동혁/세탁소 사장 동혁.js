const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let cents = parseInt(input[i]);
  
  const quarters = Math.floor(cents / 25);
  cents %= 25;

  const dimes = Math.floor(cents / 10);
  cents %= 10;

  const nickels = Math.floor(cents / 5);
  cents %= 5;

  const pennies = cents;

  console.log(`${quarters} ${dimes} ${nickels} ${pennies}`);
}
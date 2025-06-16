const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let pattern of croatian) {
    input = input.split(pattern).join('*');
}

console.log(input.length);
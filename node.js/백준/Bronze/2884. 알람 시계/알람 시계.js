var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let h = input[0];
let m = input[1];

if (m < 45) {
    h -= 1;
    m += 60;
}

m -= 45;

if (h < 0) {
    h = 23;
}

console.log(h + ' ' + m);
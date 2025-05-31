var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split("\n").map(Number);;

const [A, B, C] = input;

const result = (A * B * C).toString();

const count = Array(10).fill(0);

for (let char of result) {
    count[Number(char)]++;
}

for (let i = 0; i < 10; i++) {
    console.log(count[i]);
}
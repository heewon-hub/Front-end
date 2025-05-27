var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();

const N = input;

for (let i = 1; i <= N; i++) {
    const a = ' '.repeat(N - i);
    const b = '*'.repeat(i);
    console.log(a + b);
}
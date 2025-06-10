const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const sub = new Set(input);

const mis = [];
for (let i = 1; i <= 30; i++) {
    if (!sub.has(i)) {
        mis.push(i);
    }
}

mis.sort((a, b) => a - b);
console.log(mis[0]);
console.log(mis[1]);
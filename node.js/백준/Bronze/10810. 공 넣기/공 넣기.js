const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number); 
const baskets = new Array(N).fill(0);

for (let m = 1; m <= M; m++) {
    const [i, j, k] = input[m].split(' ').map(Number);
    for (let idx = i - 1; idx <= j - 1; idx++) {
        baskets[idx] = k;
    }
}

console.log(baskets.join(' '));
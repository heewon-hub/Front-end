const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const basket = Array.from({length: N}, (_, i) => i + 1);

for (let k = 1; k <= M; k++) {
    const [i, j] = input[k].split(' ').map(Number);
    const reversed = basket.slice(i - 1, j).reverse();
    basket.splice(i - 1, j - i + 1, ...reversed);
}

console.log(basket.join(' '));
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    const [h, w, n] = input[i].split(' ').map(Number);
    let floor = n % h;
    let room = Math.ceil(n / h);

    if (floor === 0) floor = h;

    console.log(floor * 100 + room);
}
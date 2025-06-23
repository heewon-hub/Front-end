const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

let layer = 1;
let maxRoom = 1;

while (n > maxRoom) {
  maxRoom += 6 * layer;
  layer++;
}

console.log(layer);
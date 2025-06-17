const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = [], B = [];

for (let i = 1; i <= N; i++) {
  A.push(input[i].split(' ').map(Number));
}

for (let i = N + 1; i <= 2 * N; i++) {
  B.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < N; i++) {
  const row = A[i].map((val, j) => val + B[i][j]);
  console.log(row.join(' '));
}
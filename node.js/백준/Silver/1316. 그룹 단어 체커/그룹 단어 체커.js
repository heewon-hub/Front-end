const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let count = 0;

for (let i = 1; i <= n; i++) {
  const word = input[i];
  let isGroupWord = true;
  const seen = new Set();
  let prevChar = '';

  for (let j = 0; j < word.length; j++) {
    const currentChar = word[j];
    if (currentChar !== prevChar) {
      if (seen.has(currentChar)) {
        isGroupWord = false;
        break;
      }
      seen.add(currentChar);
      prevChar = currentChar;
    }
  }

  if (isGroupWord) count++;
}

console.log(count);
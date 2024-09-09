const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '09.09/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
let result = [];

for (let i = 0; i < N; i++) {
  result[i] = 0;
}

for (let i = 0; i < M; i++) {
  let [a, b, c] = input[i + 1].split(' ').map(Number);
  for (let j = a - 1; j < b; j++) {
    result[j] = c;
  }
}

console.log(result.join(' '));
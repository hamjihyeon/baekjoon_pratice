const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '09.09/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const number = input[1].split(' ').map(Number);
const V = Number(input[2]);
let result = 0;

for (let i = 0; i < N; i++) {
  if (number[i] === V) {
    result++;
  }
}

console.log(result);
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '09.09/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const S = input[0];
const find = Number(input[1]);

while (find >= 1 && find <= S.length) {
  console.log(S[find - 1]);
  break;
}
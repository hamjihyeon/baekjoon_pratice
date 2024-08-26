const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '08.26/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
let result = '';

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let x = i;
    let y = j;

    while (x > 0) {
      if (x % 3 === 1 && y % 3 === 1) {
        break;
      }
      x = Math.floor(x / 3);
      y = Math.floor(y / 3);
    }

    if (x === 0) {
      result += '*';
    } else {
      result += ' ';
    }
  }
  result += '\n';
}

console.log(result);
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '10.15/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = parseInt(input);
let result = [[1,0], [0,1]];

for (let i = 1; i <= T; i++) {
    const n = parseInt(input[i]);
    for (let j = 2; j <= n; j++) {
        result[j] = [result[j-1][0] + result[j-2][0], result[j-1][1] + result[j-2][1]];
    }
    console.log(result[n].join(' '));
}
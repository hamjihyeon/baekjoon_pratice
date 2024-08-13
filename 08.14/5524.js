const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '08.14/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const SI = input.slice(1).map((row) => row.toLowerCase()).join('\n');

console.log(SI+ '\n');
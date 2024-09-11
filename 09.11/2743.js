const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '09.11/test.txt';
const input = fs.readFileSync(filePath).toString().trim();

console.log(input.length);
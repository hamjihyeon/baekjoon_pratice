const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "07.31/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, d, k, c] = input[0].split(' ').map(Number);
const sushi = input.slice(1).map(Number);

const sushiCount = new Array(d + 1).fill(0);
let uniqueSushi = 0;

for (let i = 0; i < k; i++) {
    if (sushiCount[sushi[i]] === 0) uniqueSushi++;
    sushiCount[sushi[i]]++;
}

let maxUnique = 0;
for (let i = 0; i < n; i++) {
    let currentUnique = uniqueSushi;
    if (sushiCount[c] === 0) {
      currentUnique++;
    }

    maxUnique = Math.max(maxUnique, currentUnique);

    let outgoing = sushi[i];
    let incoming = sushi[(i + k) % n];

    sushiCount[outgoing]--;
    if (sushiCount[outgoing] === 0) {
      uniqueSushi--;
    }

    if (sushiCount[incoming] === 0) {
      uniqueSushi++;
    }
    sushiCount[incoming]++;
}

console.log(maxUnique);

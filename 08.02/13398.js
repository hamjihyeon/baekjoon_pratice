const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "08.02/test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
let dp = new Array(n).fill(0);
let dp_remove = new Array(n).fill(0);

dp[0] = arr[0];

let result = arr[0];

for (let i = 1; i < n; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
    dp_remove[i] = Math.max(dp_remove[i - 1] + arr[i], dp[i - 1]);
    result = Math.max(result, dp[i], dp_remove[i]);
}

console.log(result);
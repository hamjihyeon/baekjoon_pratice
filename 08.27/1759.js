const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '08.27/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
const alphabets = input[1].split(' ').sort();
const visited = new Array(C).fill(false);
let result = [];
let vowels = ['a', 'e', 'i', 'o', 'u'];

function dfs(cnt, idx) {
  if (cnt === L) {
    let vowel = 0;
    let consonant = 0;
    let password = '';

    for (let i = 0; i < C; i++) {
      if (visited[i]) {
        if (vowels.includes(alphabets[i])) {
          vowel += 1;
        } else {
          consonant += 1;
        }
        password += alphabets[i];
      }
    }

    if (vowel >= 1 && consonant >= 2) {
      result.push(password);
    }
    return;
  }

  for (let i = idx; i < C; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(cnt + 1, i);
      visited[i] = false;
    }
  }
}

dfs(0, 0);
console.log(result.join('\n'));
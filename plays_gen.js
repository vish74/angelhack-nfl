const fs = require('fs')

const file = fs.readFileSync('full-game-1.json');

const lines = file.toString().trim().split('\n');

const arr = lines.map(JSON.parse);

console.log(JSON.stringify(arr.slice(0, 10)));

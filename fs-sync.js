const { readFileSync , writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

const result = writeFileSync('./content/resultSync.txt',`Here is the result: ${first}, and ${second}`,{flag:'a'})
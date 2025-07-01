const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.text','utf8')
const second = readFileSync('./content/second.text','utf8')

// Use flag 'a' for Override the string
writeFileSync('./content/result-sync.text',`Here is the result: ${first}, ${second}`, {flag:'a'})
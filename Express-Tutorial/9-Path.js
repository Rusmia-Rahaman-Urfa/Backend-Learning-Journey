const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test .text')
console.log(filePath) // should see paths

const base = path.basename(filePath)
console.log(base) //should see the last base test.text

const absolute = path.resolve(__dirname,'content','subfolder','test.text')
console.log(absolute)
const {readFile, writeFile} = require('fs')

// Call back function
readFile('./content/first.text', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
        }
    console.log(result)
})
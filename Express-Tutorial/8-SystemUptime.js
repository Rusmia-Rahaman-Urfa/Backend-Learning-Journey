const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// Method returns the system uptime in Seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)
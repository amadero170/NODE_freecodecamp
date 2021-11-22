const os = require('os');

// get user info
console.log(os.userInfo());

//method returns system uptime in seconds
console.log(os.uptime());

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);
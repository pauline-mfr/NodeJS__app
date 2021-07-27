
// return file name path
const path = require('path');
var pathObj = path.parse(__filename);

// calcul of OS left memory
const os = require('os');
var totalMem = os.totalmem();
var actualMem = os.freemem();

let difference = totalMem - actualMem;
console.log(`Memory left: ${difference}`);

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
var fb = require('../fizz_buzz_module.js');
var readline = require('readline');
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function (line) {
    let max = line;
    for (let num = 0; num <= max; num++) {
        console.log(fb.getFizzBuzzAns(num));
    }
});

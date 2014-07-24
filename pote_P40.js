var b = require('bonescript');

setInterval(check,1000);

function check(){
b.analogRead('P9_40', printAIN1);
}

function printAIN1(x) {
    console.log('x.value = ' + x.value);
    console.log('x.err = ' + x.err);
} 
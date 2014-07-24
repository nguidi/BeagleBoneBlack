var b = require('bonescript');
b.getPinMode("P9_14", printPinMux);
function printPinMux(x) {
    console.log('mux = ' + x.mux);
    console.log('pullup = ' + x.pullup);
    console.log('slew = ' + x.slew);
    if(x.options) 
        console.log('options = ' + 
            x.options.join(','));
    console.log('pin = ' + x.pin);
    console.log('name = ' + x.name);
    console.log('err = ' + x.err);
}
var b = require('bonescript')

var i = 1;

function toggleLED () {
   setTimeout(function () {
      b.digitalWrite("P8_13", !( i % 2))
      i++;
      if (i < 10) {
         toggleLED();
      }
   }, 1000)
}

toggleLED()
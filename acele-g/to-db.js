var nStore = require('nstore');
var b = require('bonescript');
var timeout = false

nStore.new(
    'data/myDB.db'
,   function(err,myDB)
    {
        // It's loaded now
        function readAndWrite() {
            myDB.save(
                null
            ,   {
                    x: b.analogRead('P9_36')
                ,   y: b.analogRead('P9_38')
                ,   z: b.analogRead('P9_40')
                }
            ,   function(err)
                {
                    if (err)
                        console.log("ERROR AL GUARDAR")
                    else
                        if (!timeout)
                            readAndWrite()
                }
            ) 
        }
        
        readAndWrite()
        
        setTimeout(
            function()
            {
                timeout = true
            }
        ,   1000
        )
    }
)
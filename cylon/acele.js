var Cylon
=   require('cylon');

Cylon
    .robot(
        {
            connection:
            {
                name:   'beaglebone'
            ,   adaptor:'beaglebone'
            }
        ,   devices:
            [
                {
                    name:       'sensorX'
                ,   driver:     'analogSensor'
                ,   pin:        'P9_36'
                ,   owerLimit:  0
                ,   upperLimit: 1799
                }
                /*
            ,   {
                    name:       'sensorY'
                ,   driver:     'pin'
                ,   pin:        'P9_38'
                }
            ,   {
                    name:       'sensorZ'
                ,   driver:     'pin'
                ,   pin:        'P9_40'
                }*/
            ]
        ,   work: function(my)
            {
                console.log(my.sensorX.analogRead())
                //console.log('Analog X value => ', my.sensorX.analogRead())
                //console.log('Analog Y value => ', my.sensorY.analogRead())
                //console.log('Analog Z value => ', my.sensorZ.analogRead().)
            }
        }
    ).start();
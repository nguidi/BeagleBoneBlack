var	express
=	require('express')
,	b
=	require('bonescript')
,	app
=	express()
,	http
=	require('http').Server(app)
,	io
=	require('socket.io')(http)

io
	.on(
		'connection'
	,	function(socket)
		{
			socket
				.on(
					'read.accelerometer'
				,	function(state)
					{
						io
							.emit(
								'send.accelerometer'
							,	{
									x: b.analogRead('P9_33')
								,	y: b.analogRead('P9_35')
								,	z: b.analogRead('P9_37')
								}
							)
					}
				)

			socket
				.on(
					'read.potentiometer'
				,	function(state)
					{
						io
							.emit(
								'send.potentiometer'
							,	{
									value: b.analogRead('P9_36')
								}
							)
					}
				)
		}
	)

setInterval(
	function()
	{

	}
,	100
)

http
	.listen(
		3000
	,	function()
		{
			console.log('listening on *:3000');
		}
	)

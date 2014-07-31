can.Control(
	'Potentiometer'
,	{
		defaults:
		{
			view:	'app/views/potentiometer.mustache'
		}
	}	
,	{
		init: function(element,options)
		{
			can.append(
				this.element
			,	can.view(
					this.options.view
				,	{}
				)
			)

			this._render_gauge()

			this._render_line()
		}

	,	_render_gauge: function()
		{
			this.gauge
			new JustGage(
				{
					id:		"gauge" 
				,	value:	45
				,	min:	0
				,	max:	100
				,	title: 'Valor Actual'
				}
			)
		}

	,	_refresh_gauge: function(val)
		{
			this
				.gauge
					.refresh(
						val
					)
		}

	,	_render_line: function()
		{
			this.line
			=	new Charts
						.LineChart(
							'timeline'
						,	{
								show_grid:	false
							,	label_max:	false
							,	label_min:	false
							}
						)

			this
				.line
					.add_line(
						{
						 	data:	[[1, 828906],[2, 566933],[3, 584150],[4, 1072143],[5, 1622455],[6, 2466746],[7, 2427789]]
						,	 options:
							{
								line_color: "#00aadd",
								dot_color: "#00aadd",
								area_color: "230-#88c9dd-rgba(255,255,255,0)",
								area_opacity: 0.2,
								dot_size: 5,
								line_width: 4 
							}
						}
					)

			this
				.line
					.draw()
		}
	}
)
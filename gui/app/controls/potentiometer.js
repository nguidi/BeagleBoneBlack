can.Control(
	'Potentiometer'
,	{
		defaults:
		{
			view:	'app/views/potentiometer.mustache'
		,	record: 		false
		,	refresh_rate:	20
		,	recorded:		[]
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

			this.$record = this.element.find('.btn-danger')

			this.$pause = this.element.find('.btn-primary')

			this._render_gauge()

			this._render_line()

			this.trashUpdate()
		}

	,	_render_gauge: function()
		{
			this.gauge
			=	new JustGage(
					{
						id:		"potentiometer-gauge" 
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
			this.lineChartData
			=	{
					labels:	["20","40","60","80","100", "120", "140", "160", "180", "200"]
				,	datasets:
					[
						{
							strokeColor: "rgba(151,187,205,1)"
						,	data: [65, 59, 80, 81, 56, 55, 40,90,70,45]
						}
					]
				}
			,	ctx
			=	document.getElementById("line").getContext("2d")

			this.lineChart
			=	new Chart(ctx).Line(
					this.lineChartData
				,	{
						maintainAspectRatio:false
					,	datasetFill:		false
					,	pointDot:			false
					,	bezierCurve:		false
					,	animation:			false
					,	scaleOverride:		true
					,	scaleSteps:			5
					,	scaleStepWidth:		20
					,	scaleStartValue:	0
					}
				)
		}

	,	_refresh_lineChart: function(measure)
		{
			/* OLD?
			this.lineChartData.labels.shift()
			this.lineChartData.labels.push(measure.time)
			this.lineChartData.datasets[0].data.shift()
			this.lineChartData.datasets[0].data.push(measure.value)
			this.lineChart.Line(this.lineChartData,{ animation : false })
			*/

			this.lineChart.removeData()

			this.lineChart.addData([measure.value],measure.time)
		}

	,	trashUpdate: function()
		{
			var self = this
			var i = 200
			setInterval(
				function()
				{
					i = i + self.options.refresh_rate
					var newVal = Math.floor(Math.random() * 99) + 1
					var	measure = {value: newVal, time: i}
					self._refresh_lineChart(measure)
					if	(self.options.record)
						self.options.recorded.push(measure)
					self._refresh_gauge(newVal)
				}
			,	this.options.refresh_rate
			)
		}

	,	'.btn-danger click': function(el,ev)
		{
			this.options.record = true
			this.$record.attr('disabled',true)
			this.$pause.attr('disabled',false)
		}

	,	'.btn-primary click': function(el,ev)
		{
			this.options.record = false
			this.$record.attr('disabled',false)
			this.$pause.attr('disabled',true)
			console.log(this.options.recorded)
			this.options.recorded = []
		}
	}
)
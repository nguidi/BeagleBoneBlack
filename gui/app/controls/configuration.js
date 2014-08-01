can.Control(
	'Configuration'
,	{
		defaults:
		{
			view:	'app/views/configuration.mustache'
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

			this.element.find('select[name=potentiometer_refresh_rate] option[value='+options.refresh_rates.prr+']').attr('selected',true)
			this.element.find('select[name=accelerometer_refresh_rate] option[value='+options.refresh_rates.arr+']').attr('selected',true)
		}

	,	'.btn-primary click': function(el,ev)
		{
			var	potentiometer_refresh_rate
			=	this.element.find('select[name=potentiometer_refresh_rate]').val()
			,	accelerometer_refresh_rate
			=	this.element.find('select[name=accelerometer_refresh_rate]').val()

			can.trigger(
				this.element
			,	'app.update_refresh_rate'
			,	{
					prr:	parseInt(potentiometer_refresh_rate)
				,	arr:	parseInt(accelerometer_refresh_rate)
				}
			)
		}
	}
)
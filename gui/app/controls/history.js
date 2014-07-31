can.Control(
	'History'
,	{
		defaults:
		{
			view:	'app/views/history.mustache'
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
		}
	}
)
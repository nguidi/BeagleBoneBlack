can.Control(
	'Home'
,	{
		defaults:
		{
			view:	'app/views/home.mustache'
		}
	}	
,	{
		init: function(element,options)
		{
			can.append(
				this.element
			,	can.view(
					this.options.view
				)
			)

			this.$content
			=	this.element.find('.content-content')

			this.$menu
			=	this.element.find('.content-menu')

			this.$content.hide()

			this._render_clock()
		}

	,	checkTime: function(i)
		{
			if	(i<10)
				i = "0" + i
			return i;
		}

	,	_render_clock: function()
		{
			var today
			=	new Date()
			,	h
			=	today.getHours()
			,	m
			=	today.getMinutes()
			,	s
			=	today.getSeconds()

			m = this.checkTime(m);
			s = this.checkTime(s);

			this
				.element
					.find('.clock')
						.html(h+":"+m)
			
			setTimeout(
				can.proxy(this._render_clock,this)
			,	1000
			)
		}

	,	_toggle_content: function()
		{
			this.$menu.hide()
			
			this.$content.show()
		}

	,	_toggle_menu: function()
		{
			this.$content.hide()

			this.$menu.show()
		}

	,	'.app-menu click': function()
		{
			this.$content.empty()

			this._toggle_menu()
		}

	,	'.app-history click': function()
		{
			this._toggle_content()

			new	History(
				can.$('<div>')
					.appendTo(
						this.$content
					)
			,	{

				}
			)
		}

	,	'.app-potentiometer click': function()
		{
			this._toggle_content()
			
			new	Potentiometer(
				can.$('<div>')
					.appendTo(
						this.$content
					)
			,	{

				}
			)
		}

	,	'.app-accelerometer click': function()
		{
			this._render_content('Accelerometer')

			this._toggle_content()
		}

	,	'.app-configuration click': function()
		{
			this._render_content('Configuration')

			this._toggle_content()
		}

	,	'.app-shutdown click': function()
		{

		}
	}
)
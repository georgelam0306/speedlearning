var AppRouter = Backbone.Router.extend({
	container : null,
	memoryView : null,
	readingView : null,
	userView : null,

	routes : {
		"reading" : "handleRead",
		"*actions" : "handleDefault",
		"login" : "handleLogin"
	},
	initialize: function() {
		this.container = new AppView({el: $('#container')});
	},

	handleRead: function(actions) {
		if(this.readingView == null)
			this.readingView = new ReadingView();

		this.container.childView = this.readingView;
		this.container.render();
	},
	handleDefault: function(actions) {
		if(this.readingView == null)
			this.readingView = new ReadingView();

		this.container.childView = this.readingView;
		this.container.render();
	},
	handleLogin: function(actions) {
		console.log(actions);
	}

});


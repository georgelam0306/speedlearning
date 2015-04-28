var AppRouter = Backbone.Router.extend({
	container : null,
	memoryView : null,
	readingView : null,
	readingColView : null,
	userView : null,
	signUpView: null,
	loginView: null,
	chunkingView: null,

	routes : {
		"readflash" : "handleReadFlash",
		"readcol" : "handleReadCol",
		"chunking" : "handleChunking",
		"login" : "handleLogin",
		"sign" : "handleSignUp",
		"*actions" : "handleDefault"
	},

	initialize: function() {
		this.container = new AppView({el: $('#container')});
	},

	handleReadFlash: function(actions) {
		if(this.readingView == null)
			this.readingView = new ReadingView();

		this.container.childView = this.readingView;
		this.container.render();
	},
	handleReadCol: function(actions) {
		if(this.readingColView == null)
			this.readingColView = new ReadingColumnView();

		this.container.childView = this.readingColView;
		this.container.render();
	},
	handleDefault: function(actions) {
		if(this.userView == null)
			this.userView = new UserView();

		this.container.childView = this.userView;
		this.container.render();
	},

	handleLogin: function(actions) {
		if(this.loginView == null)
			this.loginView = new LoginView();

		this.container.childView = this.loginView;
		this.container.render();
	},

	handleChunking: function(actions) {
		if(this.chunkingView == null)
			this.chunkingView = new MemoryView();

		this.container.childView = this.chunkingView;
		this.container.render();
	},

	handleSignUp: function(actions) {
		if(this.signUpView == null)
			this.signUpView = new SignUpView();

		this.container.childView = this.signUpView;
		this.container.render();
	}

});


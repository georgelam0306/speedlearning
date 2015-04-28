var AppRouter = Backbone.Router.extend({
	container : null,
	memoryView : null,
	readingView : null,
	userView : null,
	signUpView: null,
	loginView: null,
	routes : {
		"reading" : "handleRead",
		"login" : "handleLogin",
		"sign" : "handleSignUp",
		"*actions" : "handleDefault"
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

	handleSignUp: function(actions) {
		if(this.signUpView == null)
			this.signUpView = new SignUpView();

		this.container.childView = this.signUpView;
		this.container.render();
	}

});


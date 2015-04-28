var LoginView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function() {
		// Compile the template using underscore
    var template = _.template( $("#login_template").html(), {} );
    // Load the compiled HTML into the Backbone "el"
    return this.$el.html( template );
	}
});
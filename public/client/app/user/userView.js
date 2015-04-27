var UserView = Backbone.View.extend({
	initialize: function(){
		console.log("initialize user view");
	},
	render: function() {
		console.log("rendering user view");
		return this.$el.html("user view");
	}
})
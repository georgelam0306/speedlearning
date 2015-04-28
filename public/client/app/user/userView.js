var UserView = Backbone.View.extend({
	initialize: function(){
		console.log("initialize user view");
		this.render();
	},
	render: function() {
		
		return this.$el.html("user view");
	}
})
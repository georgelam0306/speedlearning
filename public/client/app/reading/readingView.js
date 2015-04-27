var ReadingView = Backbone.View.extend({
	initialize: function(){
		console.log("initialize reading view");
		this.render();
	},
	render: function() {
		console.log("rendering reading view");
		return this.$el.html("reading view");
	}
})
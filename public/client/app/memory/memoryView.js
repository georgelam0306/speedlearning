var MemoryView = Backbone.View.extend({
	initialize: function(){
		console.log("initialize memory view");
	},
	render: function() {
		console.log("rendering memory view");
		return this.$el.html("memory view");
	}
})
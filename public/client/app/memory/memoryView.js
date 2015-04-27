var MemoryView = Backbone.View.extend({
	initialize: function(){
		console.log("initialize memory view");
		this.render();
		
	},
	render: function() {
		console.log("rendering memory view");
		return this.$el.html("memory view");
	}
})
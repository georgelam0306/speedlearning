var AppView = Backbone.View.extend({
	initialize: function() {
		console.log("initialize");
	},
	render: function()
	{
		var memoryView = new MemoryView();
		var userView = new UserView();
		var readingView = new ReadingView();
		return this.$el.html(memoryView.render()).append(userView.render()).append(readingView.render());
	}
});
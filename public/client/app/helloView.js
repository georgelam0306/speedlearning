console.log("test");
var HelloView = Backbone.View.extend({
	initialize: function() {
		console.log("initialize");
	},
	render: function()
	{
		return this.$el.html('hello view');
	}
});
var AppView = Backbone.View.extend({
	childView : null,
	initialize: function() {
		console.log("initialize");
		
	},
	render: function()
	{
		console.log("render");
		console.log(this.$el);
		console.log(this.childView);
		return this.$el.append(this.childView.$el);
	}
});
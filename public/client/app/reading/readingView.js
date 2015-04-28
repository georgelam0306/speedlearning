var reallyLongString = "this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7this is a sentence 123 4 5 5 6 6 77 7";
var ReadingView = Backbone.View.extend({
	
	currentDisplay: 0,
	splitText: [],
	displaySpeed: 100,
	initialize: function(){
		this.splitText = reallyLongString.split(' ');
		console.log("initialize reading view");
		this.render();
	},
	render: function() {
		console.log("rendering reading view");
		var inner = function() {
			this.$el.html('');
			var currentString = "";
			for(var i = 0; i < 5; i++)
			{
				if(this.currentDisplay + i < this.splitText.length)
					currentString += this.splitText[this.currentDisplay + i] + " ";
			}
			this.$el.append(currentString);
			this.currentDisplay+= 5;
		}
		inner.bind(this)();
		setInterval(inner.bind(this), 60/(this.displaySpeed / 5) * 1000);
	}
})
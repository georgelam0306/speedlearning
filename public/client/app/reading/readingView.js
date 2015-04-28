var ReadingView = Backbone.View.extend({
	currentDisplay: 0,
	splitText: [],
	displaySpeed: 500,
	initialize: function(){
		
		console.log("initialize reading view");
		this.render();
	},
	render: function() {
		console.log("rendering reading view");
		var that = this;
		$.post("/api/book", function(data) {
			console.log(data);
			that.splitText = data.split(' ');
			var inner = function() {
				that.$el.html('');
				var currentString = "";
				for(var i = 0; i < 5; i++)
				{
					if(that.currentDisplay + i < that.splitText.length)
						currentString += that.splitText[that.currentDisplay + i] + " ";
				}
				that.$el.append(currentString).addClass("wordflash");
				that.currentDisplay+= 5;
			}
			inner.bind(that)();
			setInterval(inner.bind(that), 60/(that.displaySpeed / 5) * 1000);
		})
		
	}
})
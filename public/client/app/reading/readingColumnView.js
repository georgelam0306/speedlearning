var reallyLongString2 = "this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7 this is a sentence 123 4 5 5 6 6 77 7this is a sentence 123 4 5 5 6 6 77 7";
var ReadingColumnView = Backbone.View.extend({
	tagName: "table",
	currentDisplay: 0,
	splitText: [],
	displaySpeed: 100,
	initialize: function() {
		this.splitText = reallyLongString2.split(' ');
		this.render();
	},
	render: function() {
		
		this.$el.html('');
		var tempString = "";
		for(var i = 0; i < this.splitText.length; i++)
		{
			if(i % 15 === 0)
			{
				tempString = "<tr>"
			}
			if(i % 5 === 0)
			{
				tempString += "<td>"
			}
			tempString += this.splitText[i] + " ";
			if(i % 5 === 4)
			{
				tempString += "</td>"
			}
			if(i % 15 === 14)
			{
				tempString += "</tr>"
				this.$el.append(tempString)
			}
		}
	}
})
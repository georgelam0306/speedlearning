var ReadingColumnView = Backbone.View.extend({
	tagName: "table",
	currentDisplay: 0,
	splitText: [],
	displaySpeed: 500,
	elements : [],
	initialize: function() {
		this.render();
	},
	render: function() {
		var that = this;
		$.post("/api/book", function(data) {
			that.$el.html('');
			var tempString = "";
			that.splitText = data.split(' ');
			for(var i = 0; i < that.splitText.length; i++)
			{
				if(i % 15 === 0)
				{
					tempString = "<tr>"
				}
				if(i % 5 === 0)
				{
					tempString += "<td class='inactive'>"
				}
				tempString += that.splitText[i] + " ";
				if(i % 5 === 4)
				{
					tempString += "</td>"
				}
				if(i % 15 === 14)
				{
					tempString += "</tr>";
					that.$el.append(tempString);
				}
			}

			that.$el.find("td").each(function(i, element)
			{
				that.elements.push($(element));
			})

			var inner = function() {
				this.elements[this.currentDisplay].removeClass("active");
				this.elements[this.currentDisplay].addClass("inactive");
				this.currentDisplay++;
				this.elements[this.currentDisplay].removeClass("inactive");
				this.elements[this.currentDisplay].addClass("active");
				this.elements[this.currentDisplay].get(0).scrollIntoView({block: "end", behavior: "smooth"});
			}
			inner.bind(that)();
			setInterval(inner.bind(that), 60/(that.displaySpeed / 5) * 1000);
		});
	}
})
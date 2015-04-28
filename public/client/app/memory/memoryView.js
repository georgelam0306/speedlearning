var MemoryView = Backbone.View.extend({
	colors:["red", "blue", "orange", "teal", "violet", "green"],
	images:[],
	initialize: function(){
		console.log("initialize memory view");

		this.render();
		
	},
	render: function() {
		this.images = [];
		for(var i = 0; i < 20; i++)
		{
			
			this.images.push(Math.floor(Math.random() * 1000));
		}
		console.log(this.images);
		this.$el.html('<div class="timer"></div>');
		var canvas = d3.select(this.el).append("svg")
	  .attr("width", 800)
	  .attr("height", 800)
	  .style("background-color", "gray");

	  d3.select(".timer").select("span").text("1:00");

	  var selectImages = canvas.selectAll(".images")
  	.data(this.images, function(d, i){return d;});

  	var that = this;
  	var enemy = selectImages.enter().append("svg")
  	.attr("x", function(d) { return Math.random() * 750 })
	  .attr("y", function(d) { return Math.random() * 750 })
	  .attr("width", 200)
	  .attr("height", 200)

  	enemy.append("circle")
	  .attr("class", "image")
	  .attr("cx", 20)
	  .attr("cy", 20)
	  .attr("r", 20)
	  .attr("value", function(d) { return d; })
	  .style("fill", function(d) { return that.colors[Math.floor(Math.random() * that.colors.length)]; })
	  enemy.append("text").
	  text(function(d) { return d;})
	  .attr("x", 20)
	  .attr("y", 20)
	  .attr("font-family","sans-serif")
	  .attr("font-size","20px")
		.attr("text-anchor","middle");

	}
})
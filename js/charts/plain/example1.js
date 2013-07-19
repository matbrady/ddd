// Example1.js

define('plain/example1', ['d3', 'backbone'], function(d3, Backbone) {

	console.log("Let's Show Example 1!");

	// Data shared across both graphs
	var data = [4, 8, 15, 16, 23, 42];
	var data2 = [16, 9, 30];

	/** 
	* Plain D3 
	*/
	var chart = d3.select("#plain").append("div")
	   .attr("class", "chart example1");

	chart.selectAll('div')
		.data(data)
		.enter()
		.append('div')
			.attr({
				class: 'bar'
			})
			.style({
				width: function(d) { return d * 10 + 'px' }
			})
			.text(function(d){  return d; });

	return;
});
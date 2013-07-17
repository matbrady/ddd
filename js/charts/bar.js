/** 
 * Detection Polyfill
 * 
 * Stand-alone module for non-jquery class/id detection
 * @return has() : function that tests for basic CSS selector queries.
 */
define("charts/bar", ['d3'], function(d3) {	

	console.log( d3 );
	// d3.select("body").append("svg")
	// 	.attr("width", 50)
	// 	.attr("height", 50)
	// 	.append("circle")
	// 	.attr("cx", 25)
	// 	.attr("cy", 25)
	// 	.attr("r", 25)
	// 	.style("fill", "blue");


	var theData = [1,2,3];

	var getDataBack = function(d) {
		return d;
	}

	var p = d3.select("#graph")
		.selectAll("svg")
		.data(theData)
		.enter()
		.append('p')
		.text( getDataBack );

	var svg = d3.select("#graph")
		.selectAll("svg")
		.data(theData)
		.enter()
		.append("svg")
		.attr("width", 50)
		.attr("height", 50)
		.append("circle")
		.attr("cx", 25)
		.attr("cy", 25)
		.attr("r", 25)
		.style("fill", "blue");

	return; 

});
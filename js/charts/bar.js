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
		var text = d + ". Hello";
		return text;
	};

	var p = d3.select("#graph")
		.selectAll("svg")
		.data(theData)
		.enter()
		.append('p')
		.text( getDataBack );


	// 3 SVG Circles
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



	var circleRadii = [40,20,10];

	var pickCircleColor = function(d) {
		var color;

		switch (d) {
			case 40:
				color = "green";
			break;
			case 20:
				color = "purple";
			break;
			case 10:
				color = "red";
			break;
			default:
				color = "black";
			break;
		}
		return color;
	};

	var svgContainer = d3.select("#graph")
		.append('svg')
		.attr("width", 200)
		.attr("height", 200);

	var circles = svgContainer.selectAll("circle")
		.data( circleRadii )
		.enter()
		.append("circle");

	var circleAttributes = circles
		.attr("cx", 50)
		.attr("cy", 50)
		.attr("r", function(d) {return d;})
		.style("fill", pickCircleColor);

	return; 

});
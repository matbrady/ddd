/** 
 * Testing Demos from Dashing3D.js.com
 */
define("charts/demo", ['d3', 'poly/simple-ajax'], function(d3, ajax) {	


	/**
	* Color Picker
	* @desc Color is chosen based on that data passed.
	* A different color is made at every 25 increments 
	* from 0 - 100.
	* @return color string
	*/
	var pickColor = function(d) {
		var color;

		if ( d > 100 ) {
			color = "red";
		}
		else if ( d < 100 && d >= 75 ) {
			color = "blue";
		}
		else if ( d < 75 && d >= 50 ) {
			color = "orange";
		}
		else if ( d < 50 && d >= 25 ) {
			color = "purple";
		}
		else if ( d < 25 && d > 0 ) {
			color = "yellow";
		}
		else {
			color = "black";
		}
		return color;
	};

	// d3.select("body").append("svg")
	// 	.attr("width", 50)
	// 	.attr("height", 50)
	// 	.append("circle")
	// 	.attr("cx", 25)
	// 	.attr("cy", 25)
	// 	.attr("r", 25)
	// 	.style("fill", "blue");


	// var theData = [1,2,3];

	// var getDataBack = function(d) {
	// 	var text = d + ". Hello";
	// 	return text;
	// };

	// var p = d3.select("#graph")
	// 	.selectAll("svg")
	// 	.data(theData)
	// 	.enter()
	// 	.append('p')
	// 	.text( getDataBack );


	// // Repeat 3 SVG Circles
	// var svg = d3.select("#graph")
	// 	.selectAll("svg")
	// 	.data(theData)
	// 	.enter()
	// 	.append("svg")
	// 	.attr("width", 50)
	// 	.attr("height", 50)
	// 	.append("circle")
	// 	.attr("cx", 25)
	// 	.attr("cy", 25)
	// 	.attr("r", 25)
	// 	.style("fill", "blue");



	// // Create color circles based on data
	// var circleRadii = [40,20,10];

	// var bullsEyeContainer = d3.select("#graph")
	// 	.append('svg')
	// 	.attr("width", 200)
	// 	.attr("height", 200);

	// var circles = bullsEyeContainer.selectAll("circle")
	// 	.data( circleRadii )
	// 	.enter()
	// 	.append("circle");

	// var circleAttributes = circles
	// 	.attr("cx", 50)
	// 	.attr("cy", 50)
	// 	.attr("r", function(d) {return d;})
	// 	.style("fill", pickColor);




	// // Create circles with coordinates 	
	// var circleSpaces = [ 30, 70, 110];

	// var returnData = function(d) {
	// 	return d;
	// };

	// var circleSpaceContainer = d3.select('body')
	// 	.append('svg')
	// 	.attr({
	// 		"height": 200,
	// 		"width": 500,
	// 		"id": "circleSpaceContainer"
	// 	})
	// 	.style({
	// 		"background-color": '#eee',
	// 		"border": "solid 3px black"
	// 	});

	// var circles_1 = circleSpaceContainer.selectAll("circle")
	// 	.data( circleSpaces )
	// 	.enter()
	// 	.append("circle");

	// var circles_1Attr = {
	// 	"cx": returnData,
	// 	"cy": returnData,
	// 	"r": 20
	// };

	// var circle_1Styles = {
	// 	"fill": pickColor
	// };

	// // Apply the attributes and styles
	// circles_1.attr(circles_1Attr)
	// 				 .style(circle_1Styles);


	var getData = function( d, i ) {
		return 30;
	};

	// Circles from Data
	var buildCircles = function( data ) {

		var circles_2 = dataCircleCont.selectAll("circle")
			.data( data )
			.enter()
			.append("circle");

			console.log(circles_2);

		circles_2.attr({
			"cx": function(d) {return d.cx;},
			"cy": function(d) {return d.cy;},
			"r" : function(d) {return d.r;}
		}).style({
			"fill": 'red'
		});
	};

	var dataCircleCont = d3.select('body')
		.append('svg')
		.attr({
			"height": 200,
			"width": 500,
			"id": "dataCircleCont"
		})
		.style({
			"background-color": '#eee',
			"border": "solid 3px black"
		});

	ajax('js/data/circle_data.json', function(data) {
		buildCircles( JSON.parse(data) );
	});


	return; 
});
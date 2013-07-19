// Bar.js

define("charts/bar", ["d3", "backbone"], function(d3, Backbone) {

	console.log("Let's Build A Bar Chart!");

	// Plain
	var margin = {
		top: 20, 
		right: 20,
		bottom: 30,
		left: 40
	};
	var width = 500 - margin.left - margin.right;
	var height = 500 - margin.top - margin.bottom;

	var svg = d3.select('#plain-example2').append("svg")
		.attr({
			width: width + margin.left + margin.right,
			height: height + margin.top + margin.bottom
		})
		.append("g")
		.attr({
			transform: "translate(" + margin.left + "," + margin.top + ")"
		});


	/**
	* Awesome - Backbo
	*/
	var ChartBase = Backbone.View.extend({

		// Default options
		defaults: {
			margin: {
				top: 20,
				right: 20,
				bottom: 30,
				left: 40
			}
		},

		render: function() {
			var margin = this.options.margin;
			this.width = this.$el.width() - margin.left - margin.right;
			this.height = this.$el.height() - margin.top - margin.bottom;

			this.svg = d3.select(this.el).append("svg")
				.attr({
					width: width + margin.left + margin.right,
					height: height + margin.top + margin.bottom
				})
				.append("g")
				.attr({
					transform: "translate(" + margin.left + "," + margin.top + ")"
				});

			this.scales = {
				x: this.getXScale(),
				y: this.getYScale()
			};

			this.renderAxes();
			this.renderData();

			return this;
		}
	});

	var chart = new ChartBase({
		// Basic Backbone view options
		el: "#chart-container",
		collection: new Backbone.Collection(margin),

		// Override default options to match data
		// (use default margins)
		xAttr: "letter",
		yAttr: "frequency"

	});

	// Sets margins, gets scales, renders data
	chart.render();

	return;

});
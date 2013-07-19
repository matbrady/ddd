// Example1.js

define('charts/example1', ['d3', 'backbone'], function(d3, Backbone) {

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

	/**
	* Awesome Backbone D3
	*/

	// Chart Model
	var ChartModel = Backbone.Model.extend({
		defaults: {
			data: data2
		} 
	});

	var ChartView = Backbone.View.extend({
		el: '<div id="chart1">',

		events: {
			"click": function() { 
				this.model.set({ data: data }); 
			} 
		},

		initialize: function() {
			$('#awesome').append(this.$el);

			// Bind with Model Events 
			this.model.on('change', function() {
				this.rebuildView();
			}, this);

			// Create the d3 cahrt container
			this.d3Obj = d3.select('#chart1').append('div')
				.attr("class", "chart example1");

			this.render();
		},

		render: function() {

			var self = this;

			this.d3Obj.selectAll('div')
				.data( self.model.get('data') )
				.enter()
				.append('div')
					.attr({
						"class": 'bar'
					})
					.style({
						width: function(d) { return d * 10 + 'px' }
					})
					.text(function(d){  return d; });
		},

		rebuildView: function() {

			var self = this;

			this.d3Obj.selectAll('div')
				// Update the data provided
				.data( self.model.get('data') )
				.style({
					"background": "#000",
					width: self.getWidth
				})
				.text( self.getValue )
				.enter()
				.append('div')
					.attr({
						class: 'bar'
					})
					.style({
						"background": "#000",
						width: self.getWidth
					})
					.text( self.getValue );


			this.d3Obj.selectAll('div')
				// Update the remaining data
				.data( self.model.get('data') )
				.exit()
				.remove();
		},

		/**
		 * Bar Width
		 * @return string : pixel width
		*/
		getWidth: function(d) {
			return d * 10 + 'px';
		},

		/**
		 * Text
		 * @return int : data value
		*/
		getValue: function(d) {
			return d;
		}

	});

	var _chartModel = new ChartModel();

	var _chart = new ChartView({model: _chartModel});

	return;
});
// Example1.js

define('awesome/example1', ['d3', 'backbone', 'charts/views/chartView'], function(d3, Backbone, ChartView) {

	// Data shared across both graphs
	var data = [4, 8, 15, 16, 23, 42];
	var data2 = [16, 9, 30];


	/**
	* Awesome Backbone D3
	*/

	// Chart Model
	var ChartModel = Backbone.Model.extend({
		defaults: {
			data: data2,
			subData: data
		} 
	});

	var _chartModel = new ChartModel();

	var _chart = new ChartView({model: _chartModel});

	return;
});
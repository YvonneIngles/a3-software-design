$(function () {
    var chartData;

    // Load data in using d3's csv function.
    d3.csv('data/myData.csv', function (error, data) {
        // Put data into generic terms
        chartData = data.map(function (d) {
            return {
                id: d.animal,
                count: d.count,
            };
        });

        // Define function to draw a donut
        var donut = DonutChart();

        var chart = d3.select('#vis').datum(chartData)
            .call(donut);

        chart.exit().remove();
    });
});
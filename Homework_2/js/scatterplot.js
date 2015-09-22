  d3.json("data/data.json", function(error, json) {
    if (error) return console.warn(error);
    var myData = json;
    renderGraph(myData);
  });

function renderGraph(myData) {

  nv.addGraph(function() {
    var chart = nv.models.scatterChart()
                  .x(function(d) {return d.x})
                  .y(function(d) {return d.y})
                  .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
                  .showDistY(true)
                  .color(d3.scale.category10().range());

    //Axis settings
    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));

    d3.select('#scatterchart svg')
        .datum(myData)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
}

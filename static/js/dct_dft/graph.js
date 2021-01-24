// graphs
const width = 1000;
const height = 600;
const margin = {
  top: 50,
  bottom: 50,
  left: 50,
  right: 50
};

function drawDiagram() {
  let graph = d3.select("#diagramSVG").attr("viewBox", [0, 0, width, height]);
  var x = d3.scaleLinear()
    .domain([0, 7])
    .range([margin.left, width - margin.right]);

  var y = d3.scaleLinear()
    .domain([0, 255])
    .range([height - margin.bottom, margin.top]);

  var xAxis = d3.axisBottom(x)
    .ticks(8);
  var yAxis = d3.axisLeft(y)
    .ticks(5);

  //draw x-axis
  graph.append("g")
    .attr("class", "xAxis")
    .style("font-size", "16px")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(xAxis);
  graph.append("text")
    .style("font", "20px Open Sans")
    .style("fill", "green")
    .attr("class", "xAxis")
    .attr("transform", "translate(" + (width - margin.right + 10) + "," + y(0) + ")")
    .text("X");

  //draw y-axis
  graph.append("g")
    .attr("class", "yAxis")
    .style("font-size", "16px")
    .attr("transform", "translate(" + (margin.left) + ", 0)")
    .call(yAxis);
  graph.append("text")
    .style("font", "20px Open Sans")
    .style("fill", "green")
    .attr("class", "yAxis")
    .attr("transform", "translate(" + (margin.left / 2 - 5) + "," + (margin.top - 10) + ")")
    .text("Grayscale");
  drawLines();
}

function drawLines() {
  $("#diagramSVG .line").remove();
  let graph = d3.select("#diagramSVG");
  let xScale = d3.scaleLinear()
    .domain([0, 7])
    .range([margin.left, width - margin.right]);
  let yScale = d3.scaleLinear()
    .domain([0, 255])
    .range([height - margin.bottom, margin.top]);

  var line = d3.line().curve(d3.curveCatmullRom)
    .x((d, i) => xScale(i))
    .y(d => yScale(d));

  graph.append("path")
    .attr("class", "line")
    .attr("d", line(dataFields[currentDataField]))
    .style("fill", "none")
    .style("stroke", "red")
    .style("stroke-width", 2);
  graph.append("path")
    .attr("class", "line")
    .attr("d", line(backtransformation(inputArrays[currentTransformationType], quantisationValues[currentQuantisationType])))
    .style("fill", "none")
    .style("stroke", "blue")
    .style("stroke-width", 2);
}

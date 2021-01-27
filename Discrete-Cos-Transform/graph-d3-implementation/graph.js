var graph;
var width;
var height;
const margin = {top: 50, bottom: 50, left: 50, right: 50};

const points = [0, 1, 2, 3, 4, 5, 6, 7];
var x;
var y;
/////////////////////////////////////////////////////////////////
var expectedGraphData = new Array(1000);
var actualGraphData = new Array(1000);

expectedGraphData[0] = 127;
actualGraphData[0] = 127;

var inverse = true;
for(var i = 1; i < 1000; i++){
	var movement = Math.random();
	if(inverse){
		if(expectedGraphData[i - 1] + movement <= 270){
			expectedGraphData[i] = expectedGraphData[i - 1] + movement;
			actualGraphData[i] = actualGraphData[i - 1] - movement;
		}else{
			expectedGraphData[i] = expectedGraphData[i - 1] - movement;
			actualGraphData[i] = actualGraphData[i - 1] + movement;
			inverse = false;
		}
	}else{
		if(expectedGraphData[i - 1] - movement >= 0){
			expectedGraphData[i] = expectedGraphData[i - 1] - movement;
			actualGraphData[i] = actualGraphData[i - 1] + movement;
		}else{
			expectedGraphData[i] = expectedGraphData[i - 1] + movement;
			actualGraphData[i] = actualGraphData[i - 1] - movement;
			inverse = true;
		}
	}
}

const stepSize = Math.floor((expectedGraphData.length - 1) / (points.length - 1));
//////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function(){
	graph = document.getElementById('graph');
	width = graph.width.baseVal.value;
	height = graph.height.baseVal.value;
	
	graph = d3.select("#graph")
		.attr("viewBox", [0, 0, width, height]);
	
	x = d3.scaleLinear()
		.domain([0, 7])
		.range([margin.left, width - margin.right]);
	
	y = d3.scaleLinear()
		.domain([0, 255])
		.range([height - margin.bottom, margin.top]);
	
	//displays initialized mode
	graph.append("text")
			.style("font", "20px times")
			.style("text-anchor", "middle")
			.attr("class", "mode")
			.attr("transform", "translate(" + (width / 2) + "," + (margin.top / 2) + ")");
	
	displayModeName("DCT");
	drawAxes();
	drawExpectedGraph();
	drawActualGraph();
});

//changes displayed mode name
function displayModeName(mode){
	if(mode == "DCT"){
		graph.select(".mode")
			.text("Discrete Cosine Transformation");
	}else{
		graph.select(".mode")
			.text("Discrete Fourier Transformation");
	}
}

function drawAxes(){
	var xAxis = d3.axisBottom(x)
		.ticks(8);
	var yAxis = d3.axisLeft(y)
		.ticks(5);
	
	//draw x-axis
	graph.append("g")
		.attr("class", "xAxis")
		.attr("transform", "translate(0," + y(0) + ")")
		.call(xAxis);
	graph.append("text")
		.style("font", "16px times")
		.style("fill", "lime")
		.attr("class", "xAxis")
		.attr("transform", "translate(" + (width - margin.right + 10) + "," + y(0) + ")")
		.text("X");
	
	//draw y-axis
	graph.append("g")
		.attr("class", "yAxis")
		.attr("transform", "translate(" + (margin.left) + ", 0)")
		.call(yAxis);
	graph.append("text")
		.style("font", "16px times")
		.style("fill", "lime")
		.attr("class", "yAxis")
		.attr("transform", "translate(" + (margin.left / 2 - 5) + "," + (margin.top - 10) + ")")
		.text("Grayscale");
}

//new position for x-axis based on mode
function changeAxis(mode){
	if(mode == "DCT"){
		graph.select("g.xAxis")
			.attr("transform", "translate(0," + y(0) + ")");
		graph.select("text.xAxis")
			.attr("transform", "translate(" + (width - margin.right + 10) + "," + y(0) + ")")
	}else{
		graph.select("g.xAxis")
			.attr("transform", "translate(0," + y(127.5) + ")");
		graph.select("text.xAxis")
			.attr("transform", "translate(" + (width - margin.right + 10) + "," + y(127.5) + ")");
	}
}

function drawExpectedGraph(){
	//resets expected graph
	graph.selectAll(".expectedGraphLines").remove();
	graph.selectAll(".expectedGraphPoints").remove();
	
	//draw expected graph
	graph.selectAll(".expectedGraphLines")
		.data([expectedGraphData], (d, i) => i)
		.enter()
		.append("path")
			.attr("class", "expectedGraphLines")
			.attr("fill", "none")
			.attr("stroke", "blue")
			.attr("stroke-width", 1.5)
			.attr("d", d3.line()
				.x((d, i) => x(i / stepSize))
				.y(function(d){
					//clipping
					if(d > 255){
						return y(255);
					}else if(d < 0){
						return y(0);
					}
					
					return y(d);
				})
			);
	
	//draw points on expected graph
	graph.selectAll(".expectedGraphPoints")
		.data(points)
		.enter()
		.append("circle")
			.attr("class", "expectedGraphPoints")
			.attr("fill", "blue")
			.attr("opacity", 0.8)
			.attr("cx", d => x(d))
			.attr("cy", function(d){
				//clipping
				if(expectedGraphData[d * stepSize] > 255){
					return y(255);
				}else if(expectedGraphData[d * stepSize] < 0){
					return y(0);
				}
				
				return y(expectedGraphData[d * stepSize]);
			})
			.attr("r", 3);
}

function drawActualGraph(){
	//resets actual graph
	graph.selectAll(".actualGraphLines").remove();
	graph.selectAll(".actualGraphPoints").remove();
	
	//draw actual graph
	graph.selectAll(".actualGraphLines")
		.data([actualGraphData], (d, i) => i)
		.enter()
		.append("path")
			.attr("class", "actualGraphLines")
			.attr("fill", "none")
			.attr("stroke", "red")
			.attr("stroke-width", 1.5)
			.attr("d", d3.line()
				.x((d, i) => x(i / stepSize))
				.y(function(d){
					//clipping
					if(d > 255){
						return y(255);
					}else if(d < 0){
						return y(0);
					}
					
					return y(d);
				})
			);
	
	//draw points on actual graph
	graph.selectAll(".actualGraphPoints")
		.data(points)
		.enter()
		.append("circle")
			.attr("class", "actualGraphPoints")
			.attr("fill", "red")
			.attr("opacity", 0.8)
			.attr("cx", d => x(d))
			.attr("cy", function(d){
				//clipping
				if(actualGraphData[d * stepSize] > 255){
					return y(255);
				}else if(actualGraphData[d * stepSize] < 0){
					return y(0);
				}
				
				return y(actualGraphData[d * stepSize]);
			})
			.attr("r", 3);
}

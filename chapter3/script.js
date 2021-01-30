var stage = 0;
var channel = 0;

var b_matrix = [	[-28, -25, -20, - 9, - 9, - 2,   2,   6],
				[-24, -28, -22, - 8, - 7, - 1,   1,   7],
				[-17, -31, -19, - 4, - 9, - 3,   2,  11],
				[  4, -37, -19, -10, - 9, - 1,   3,  12],
				[-17, -36, -21, -10, - 8, - 3,   0,  15],
				[-35, -33, -24, -14, - 8, - 1,   0,  16],
				[-41, -39, -26, -21, -17, - 7, - 2,  12],
				[-43, -42, -31, -23, -19, -10, -15,  28]	];
var c_matrix = [	[	[- 96.1, -107.5,   10.1, -  8.3,   26.4,    8.0,   17.6, -  5.3],
								[  24.5,   20.2, -  6.0,   11.7, -  2.8,   11.5, -  7.4,    0.7],
								[- 20.5, - 11.5, -  5.3, - 12.8, -  9.0, - 14.3, -  4.8, -  5.9],
								[   1.0, -  3.1, -  7.7,    0.2, -  9.4, -  3.5, -  6.4,    0.7],
								[   1.9,    3.8,    8.2,    2.0,    7.9,    1.4,    6.5,    1.2],
								[   1.0,    4.2,    2.6,    3.9, -  3.3,    6.7,    0.3,    3.2],
								[   1.9, -  3.1, -  1.8, -  5.0,    0.9, -  4.2, -  0.9, -  3.0],
								[-  3.1, -  1.0, -  3.2, -  4.8, -  2.0,    0.7, -  2.3, -  0.6]	],
							[	[-287.2,   20.7,    4.6,    1.5,   19.0, -  7.1, -  3.3,    4.1],
								[-  8.1, - 15.8,   15.1, - 11.0,    2.5, -  3.5,    5.6, -  4.2],
								[-  2.9, -  7.0,   17.6, -  8.0, -  3.0, -  2.4,    7.1, -  6.6],
								[   3.5, - 10.0, -  9.4,    1.4,   10.5, -  4.0, -  4.1,    4.8],
								[   6.7,    5.2,    0.9, -  1.8, -  0.5, -  1.3,    1.0, -  0.2],
								[-  5.0, -  3.6,    6.3, -  1.2, -  4.9,    1.3,    2.8, -  1.5],
								[   6.1, -  0.5, -  4.6,    0.9,    2.6, -  1.9, -  2.9,    2.9],
								[   0.1, -  0.9,    1.6, -  2.5,    0.4, -  0.2,    1.4, -  0.9]	],
							[	[ 447.1, - 15.6,    0.8, -  0.4, - 31.6,   11.7,    2.8, -  3.8],
								[  51.8,   18.2, - 29.4,   17.2, -  5.0,    5.0, - 10.5,    6.8],
								[- 19.2,    5.8, - 32.8,   14.6,    8.6,    1.1, - 13.4,    9.9],
								[  18.0,    6.9,   21.8, -  3.6, - 19.6,    6.1,    9.4, -  6.3],
								[- 29.1, -  1.5,    2.9,    0.0, -  0.4,    0.3, -  0.5, -  0.8],
								[  24.4, -  0.1, - 10.1,    2.6,    9.8, -  1.6, -  4.7,    4.7],
								[- 17.3,    7.2,    5.1,    0.6, -  7.0,    2.1,    3.1, -  1.4],
								[   4.6, -  1.1, -  1.0,    2.3, -  0.7,    0.5, -  3.0,    2.0]	]	];

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("select_left").addEventListener("click", function() {
		if(stage == 0)
			return;
		setStage(stage - 1);
	});
	
	document.getElementById("select0").addEventListener("click", function() {
		setStage(0);
	});
	
	document.getElementById("select1").addEventListener("click", function() {
		setStage(1);
	});
	
	document.getElementById("select2").addEventListener("click", function() {
		setStage(2);
	});
	
	document.getElementById("select3").addEventListener("click", function() {
		setStage(3);
	});
	
	document.getElementById("select4").addEventListener("click", function() {
		setStage(4);
	});
	
	document.getElementById("select5").addEventListener("click", function() {
		setStage(5);
	});
	
	document.getElementById("select6").addEventListener("click", function() {
		setStage(6);
	});
	
	document.getElementById("select_right").addEventListener("click", function() {
		if(stage == 6)
			return;
		setStage(stage + 1);
	});
	
	{
		const width = document.getElementById("block_matrix").width.baseVal.value;
		const height = document.getElementById("block_matrix").height.baseVal.value;
		
		var block_matrix = d3.select("#block_matrix")
			.attr("viewbox", [0, 0, width, height]);
		
		var x = d3.scaleOrdinal()
			.domain([0, 1, 2, 3, 4, 5, 6, 7])
			.range([0, width/8, width/4, 3*width/8, width/2, 5*width/8, 3*width/4, 7*width/8, width]);
		
		var y = d3.scaleOrdinal()
			.domain([0, 1, 2, 3, 4, 5, 6, 7])
			.range([height, 7*height/8, 3*height/4, 5*height/8, height/2, 3*height/8, height/4, height/8, 0]);
		
		var matrix_as_stream = [];
		for(var j = 0; j < 8; j++) {
			for(var i = 0; i < 8; i++) {
				matrix_as_stream.push(b_matrix[i][j]);
			}
		}
		
		block_matrix.append("g")
			.attr("fill", "#FFEFEF")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("rect")
			.data(matrix_as_stream)
			.enter()
			.append("rect")
				.attr("x", (d, i) => x(Math.floor(i / 8)))
				.attr("y", (d, i) => y(i % 8) - height / 8)
				.attr("width", width / 8)
				.attr("height", height / 8);
		
		block_matrix.append("g")
			.attr("fill", "#AFAFFF")
			.attr("font-size", "12")
			.attr("text-anchor", "middle")
			.style("cursor", "default")
			.selectAll("rect")
			.data(matrix_as_stream)
			.enter()
			.append("text")
				.attr("x", (d, i) => x(Math.floor(i / 8)) + (x(1) / 2))
				.attr("y", (d, i) => height - (y(i % 8) - height / 8 + (y(7) / 4)))
				.text(d => d);
	}
	
	{
		const width = document.getElementById("rectangle_function").width.baseVal.value;
		const height = document.getElementById("rectangle_function").height.baseVal.value;
		
		var rectangle_function = d3.select("#rectangle_function")
			.attr("viewbox", [0, 0, width, height]);
		
		var min = b_matrix[0][0];
		var max = b_matrix[0][0];
		var matrix_as_stream = [];
		for(var j = 0; j < 8; j++) {
			for(var i = 0; i < 8; i++) {
				if(min > b_matrix[i][j]) {
					min = b_matrix[i][j];
				} else if(max < b_matrix[i][j]) {
					max = b_matrix[i][j];
				}
				
				matrix_as_stream.push(b_matrix[i][j]);
			}
		}
		
		const x0 = width / 3;
		const y0 = 2 * height / 3;
		
		var mapper = d3.scaleLinear()
			.domain([min, max])
			.range([height - y0, 5 * height / 6]);
			
		const z0 = height - mapper(0);
		
		rectangle_function.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.attr("x1", x0)
			.attr("x2", width)
			.attr("y1", y0)
			.attr("y2", y0);
		
		rectangle_function.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.attr("x1", x0)
			.attr("x2", x0)
			.attr("y1", y0)
			.attr("y2", 0);
		
		rectangle_function.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.attr("x1", x0)
			.attr("x2", 0)
			.attr("y1", y0)
			.attr("y2", height);
			
		rectangle_function.append("line")
			.attr("stroke", "#CFCFFF")
			.attr("stroke-width", 1)
			.attr("x1", x0)
			.attr("x2", width)
			.attr("y1", z0)
			.attr("y2", z0);
		
		rectangle_function.append("line")
			.attr("stroke", "#CFCFFF")
			.attr("stroke-width", 1)
			.attr("x1", x0)
			.attr("x2", 0)
			.attr("y1", z0)
			.attr("y2", (height / 3) + z0);
		
		var rectangles = rectangle_function.selectAll("g").data(matrix_as_stream).enter().append("g");
		
		rectangles
			.attr("fill", "#AFAFFF")
			.attr("stroke", "#8F8FFF")
			.attr("stroke-width", 1)
			.append("path")
				.attr("d", function(d, i) {
					var x = Math.floor(i / 8);
					var y = i % 8;
					var z = d;
					
					var transformed_x = (width / 3) + (x * width / 12) - (y * width / 24);
					var transformed_y = (height - mapper(z)) + (y * height / 24);
					
					return "M " + transformed_x + "," + transformed_y + " l " + (width / 12) + ",0 l " + (-width / 24) + "," + (height / 24) + " l " + (-width / 12) + ",0 Z";
				});
		
		rectangles.append("rect")
			.attr("x", function(d, i) {
				var x = Math.floor(i / 8);
				var y = i % 8;
				
				return (width / 3) + (x * width / 12) - (y * width / 24) - (width / 24);
			})
			.attr("y", function(d, i) {
				var y = i % 8;
				var z = d;
				
				return (height - mapper(z)) + (y * height / 24) + (height / 24);
			})
			.attr("width", width / 12)
			.attr("height", d => y0 - (height - mapper(d)));
		
		rectangles.append("path")
			.attr("d", function(d, i) {
				var x = Math.floor(i / 8);
				var y = i % 8;
				var z = d;
				
				var transformed_x = (width / 3) + (x * width / 12) - (y * width / 24);
				var transformed_y = (height - mapper(z)) + (y * height / 24);
				
				return "M " + (transformed_x + (width / 12)) + "," + transformed_y + " l 0," + (y0 - (height - mapper(z))) + " l " + (-width / 24) + "," + (height / 24) + " l 0," + (-(y0 - (height - mapper(z)))) + " Z";
			});
	}
	
	{ // mouseover/mouseout need to show/hide "Ort" and "Wert"
		const width = document.getElementById("function_values").width.baseVal.value;
		const height = document.getElementById("function_values").height.baseVal.value;
		
		var function_values = d3.select("#function_values")
			.attr("viewbox", [0, 0, width, height]);
		
		const values_as_stream = [2, 4, 1];
		
		function_values.append("g")
			.attr("fill", "#EFEFFF")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("rect")
			.data(values_as_stream)
			.enter()
			.append("rect")
				.attr("id", (d, i) => "300" + i)
				.attr("x", (d, i) => i * width / 3)
				.attr("y", 0)
				.attr("width", width / 3)
				.attr("height", height)
				.on("mouseover", function() {
					d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 1);
					
					d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
						.style("opacity", 1);
				})
				.on("mouseout", function() {
					d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 0);
					
					d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
						.style("opacity", 0);
				});
		
		function_values.append("g")
			.selectAll("rect")
			.data(values_as_stream)
			.enter()
			.append("text")
				.attr("id", (d, i) => "301" + i)
				.attr("x", (d, i) => (i * width / 3) + (width / 6))
				.attr("y", 2 * height / 3)
				.attr("fill", "#AFAFFF")
				.attr("font-size", height / 2)
				.attr("text-anchor", "middle")
				.style("cursor", "default")
				.text(d => d)
				.on("mouseover", function() {
					d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 1);
					
					d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
						.style("opacity", 1);
				})
				.on("mouseout", function() {
					d3.selectAll("rect[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 0);
					
					d3.selectAll("circle[id='" + this.id.substring(0, 2) + "3" + this.id.substring(3) + "']")
						.style("opacity", 0);
				});
	}
	
	{ // mouseover/mouseout need to show/hide "Frequenz" and "Amplitude"
		const width = document.getElementById("function_amplitudes").width.baseVal.value;
		const height = document.getElementById("function_amplitudes").height.baseVal.value;
		
		var function_amplitudes = d3.select("#function_amplitudes")
			.attr("viewbox", [0, 0, width, height]);
		
		const amplitudes_as_stream = [4.4, 0.9, -2.3];
		
		function_amplitudes.append("g")
			.attr("fill", "#EFEFFF")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("rect")
			.data(amplitudes_as_stream)
			.enter()
			.append("rect")
				.attr("id", (d, i) => "310" + i)
				.attr("x", (d, i) => i * width / 3)
				.attr("y", 0)
				.attr("width", width / 3)
				.attr("height", height)
				.on("mouseover", function() {
					d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 1);
				})
				.on("mouseout", function() {
					d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 0);
				});
		
		function_amplitudes.append("g")
			.selectAll("rect")
			.data(amplitudes_as_stream)
			.enter()
			.append("text")
				.attr("id", (d, i) => "311" + i)
				.attr("x", (d, i) => (i * width / 3) + (width / 6))
				.attr("y", 2 * height / 3)
				.attr("fill", "#AFAFFF")
				.attr("font-size", height / 2)
				.attr("text-anchor", "middle")
				.style("cursor", "default")
				.text(d => d)
				.on("mouseover", function() {
					d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 1);
				})
				.on("mouseout", function() {
					d3.selectAll("g[id='" + this.id.substring(0, 2) + "2" + this.id.substring(3) + "']")
						.style("opacity", 0);
				});
	}
	
	{
		const width = document.getElementById("rectangle_function_example").width.baseVal.value;
		const height = document.getElementById("rectangle_function_example").height.baseVal.value;
		
		var rectangle_function_example = d3.select("#rectangle_function_example")
			.attr("viewbox", [0, 0, width, height]);
		
		const values_as_stream = [2, 4, 1];
		
		var x = d3.scaleLinear()
			.domain([-2.5, 3.5])
			.range([0, width]);
		
		var y = d3.scaleLinear()
			.domain([-1, 5])
			.range([height, 0]);
		
		rectangle_function_example.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.attr("x1", 0)
			.attr("x2", width)
			.attr("y1", y(0))
			.attr("y2", y(0));
		
		rectangle_function_example.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.attr("x1", x(0))
			.attr("x2", x(0))
			.attr("y1", height)
			.attr("y2", 0);
		
		var rectangles = rectangle_function_example.selectAll("g").data(values_as_stream).enter().append("g");
		
		rectangles
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.append("line")
				.attr("x1", (d, i) => x(i - 0.5))
				.attr("x2", (d, i) => x(i + 0.5))
				.attr("y1", d => y(d))
				.attr("y2", d => y(d));
				
		rectangles.append("line")
			.attr("x1", (d, i) => x(i - 0.5))
			.attr("x2", (d, i) => x(i - 0.5))
			.attr("y1", d => y(d))
			.attr("y2", function(d, i) {
				if(i == 0)
					return y(0);
				return y(values_as_stream[i - 1]);
			});
		
		rectangle_function_example.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.attr("x1", x(2.5))
			.attr("x2", x(2.5))
			.attr("y1", y(0))
			.attr("y2", y(values_as_stream[2]));
		
		rectangle_function_example.append("g")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("line")
			.data([-2, -1, 0, 1, 2, 3])
			.enter()
			.append("line")
				.attr("x1", d => x(d))
				.attr("x2", d => x(d))
				.attr("y1", y(0.15))
				.attr("y2", y(-0.15));
		
		rectangle_function_example.append("g")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("line")
			.data([0, 1, 2, 3, 4])
			.enter()
			.append("line")
				.attr("x1", x(-0.15))
				.attr("x2", x(0.15))
				.attr("y1", d => y(d))
				.attr("y2", d => y(d));
		
		rectangle_function_example.selectAll("rect[class='hover']")
			.data(values_as_stream)
			.enter()
			.append("rect")
				.attr("id", (d, i) => "302" + i)
				.attr("class", "hover")
				.attr("stroke", "none")
				.attr("fill", "#FF0000")
				.attr("x", (d, i) => x(i - 0.05))
				.attr("width", (d, i) => x(i + 0.05) - x(i - 0.05))
				.attr("y", y(0.15))
				.attr("height", y(-0.15) - y(0.15))
				.style("opacity", 0);
		
		rectangle_function_example.selectAll("circle[class='hover']")
			.data(values_as_stream)
			.enter()
			.append("circle")
				.attr("id", (d, i) => "303" + i)
				.attr("class", "hover")
				.attr("stroke", "none")
				.attr("fill", "#0000FF")
				.attr("cx", (d, i) => x(i))
				.attr("cy", d => y(d))
				.attr("r", 3)
				.style("opacity", 0);
	}
	
	{
		const width = document.getElementById("basis_function").width.baseVal.value;
		const height = document.getElementById("basis_function").height.baseVal.value;
		
		var basis_function = d3.select("#basis_function")
			.attr("viewbox", [0, 0, width, height]);
		
		const amplitudes_as_stream = [4.4, 0.9, -2.3];
		
		var x = d3.scaleLinear()
			.domain([-2.5, 3.5])
			.range([width/20, 19*width/20]);
		
		var y = d3.scaleLinear()
			.domain([-4, 6])
			.range([19*height/20, height/20]);
		
		basis_function.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.attr("x1", x(-2.5))
			.attr("x2", x(3.5))
			.attr("y1", y(0))
			.attr("y2", y(0));
		
		basis_function.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.attr("x1", x(0))
			.attr("x2", x(0))
			.attr("y1", y(-4))
			.attr("y2", y(6));
		
		basis_function.append("g")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("line")
			.data([-2, -1, 0, 1, 2, 3])
			.enter()
			.append("line")
				.attr("x1", d => x(d))
				.attr("x2", d => x(d))
				.attr("y1", y(0.3))
				.attr("y2", y(-0.3));
		
		basis_function.append("g")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("line")
			.data([-2, 0, 2, 4])
			.enter()
			.append("line")
				.attr("x1", x(-0.15))
				.attr("x2", x(0.15))
				.attr("y1", d => y(d))
				.attr("y2", d => y(d));
		
		basis_function.append("g")
			.attr("id", "3120")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.style("opacity", 0)
			.append("line")
				.attr("x1", x(-2.5))
				.attr("x2", x(3.5))
				.attr("y1", y(amplitudes_as_stream[0]))
				.attr("y2", y(amplitudes_as_stream[0]));
				
		var amplitudes = [];
		for(var i = -2.5; i <= 3.5; i += 0.01){
			amplitudes.push(amplitudes_as_stream[1] * Math.cos((2 * i + 1) * (Math.PI / 6)));
		}
		
		basis_function.append("g")
			.attr("id", "3121")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.style("opacity", 0)
			.selectAll("line[class='basis1']")
			.data(amplitudes)
			.enter()
			.append("line")
				.attr("class", "basis1")
				.attr("x1", (d, i) => x((i * 6 / amplitudes.length) - 2.5))
				.attr("x2", (d, i) => x(((i + 1) * 6 / amplitudes.length) - 2.5))
				.attr("y1", d => y(d))
				.attr("y2", function(d, i) {
					if(i == amplitudes.length)
						return y(amplitudes[i - 1]);
					return y(d);
				});
		
		amplitudes = [];
		for(var i = -2.5; i <= 3.5; i += 0.01){
			amplitudes.push(amplitudes_as_stream[2] * Math.cos((2 * i + 1) * (2 * Math.PI / 6)));
		}
		
		basis_function.append("g")
			.attr("id", "3122")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.style("opacity", 0)
			.selectAll("line[class='basis2']")
			.data(amplitudes)
			.enter()
			.append("line")
				.attr("class", "basis2")
				.attr("x1", (d, i) => x((i * 6 / amplitudes.length) - 2.5))
				.attr("x2", (d, i) => x(((i + 1) * 6 / amplitudes.length) - 2.5))
				.attr("y1", d => y(d))
				.attr("y2", function(d, i) {
					if(i == amplitudes.length)
						return y(amplitudes[i - 1]);
					return y(d);
				});
	}
	
	{ // function is a little bit offset
		const width = document.getElementById("total_function").width.baseVal.value;
		const height = document.getElementById("total_function").height.baseVal.value;
		
		var total_function = d3.select("#total_function")
			.attr("viewbox", [0, 0, width, height]);
		
		var x = d3.scaleLinear()
			.domain([-2.5, 3.5])
			.range([width/20, 19*width/20]);
		
		var y = d3.scaleLinear()
			.domain([-4, 6])
			.range([19*height/20, height/20]);
		
		total_function.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.attr("x1", x(-2.5))
			.attr("x2", x(3.5))
			.attr("y1", y(0))
			.attr("y2", y(0));
		
		total_function.append("line")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.attr("x1", x(0))
			.attr("x2", x(0))
			.attr("y1", y(-4))
			.attr("y2", y(6));
		
		total_function.append("g")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("line")
			.data([-2, -1, 0, 1, 2, 3])
			.enter()
			.append("line")
				.attr("x1", d => x(d))
				.attr("x2", d => x(d))
				.attr("y1", y(0.3))
				.attr("y2", y(-0.3));
		
		total_function.append("g")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("line")
			.data([-2, 0, 2, 4])
			.enter()
			.append("line")
				.attr("x1", x(-0.15))
				.attr("x2", x(0.15))
				.attr("y1", d => y(d))
				.attr("y2", d => y(d));
		
		var amplitudes = [];
		for(var i = -1.5; i <= 2.5; i += 0.01){
			amplitudes.push(2 + (0.9 * Math.cos((2 * i + 1) * (Math.PI / 6))) - (2.3 * Math.cos((2 * i + 1) * (2 * Math.PI / 6))));
		}
		
		total_function.append("g")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 2)
			.selectAll("line[class='total']")
			.data(amplitudes)
			.enter()
			.append("line")
				.attr("class", "total")
				.attr("x1", (d, i) => x((i * 4 / amplitudes.length) - 1.5))
				.attr("x2", (d, i) => x(((i + 1) * 4 / amplitudes.length) - 1.5))
				.attr("y1", d => y(d))
				.attr("y2", function(d, i) {
					if(i == amplitudes.length)
						return y(amplitudes[i - 1]);
					return y(d);
				});
		
		total_function.selectAll("circle[class='points']")
			.data([2, 4, 1])
			.enter()
			.append("circle")
				.attr("class", "points")
				.attr("stroke", "none")
				.attr("fill", "#0000FF")
				.attr("cx", (d, i) => x(i))
				.attr("cy", d => y(d))
				.attr("r", 3);
	}
	
	{ // formular text-size different after hover
		const width = document.getElementById("tile_mask").width.baseVal.value;
		const height = document.getElementById("tile_mask").height.baseVal.value;
		
		var tile_mask = d3.select("#tile_mask")
			.attr("viewbox", [0, 0, width, height]);
		
		const scale = 0.9;
		const offset = 2;
		
		var x = d3.scaleOrdinal()
			.domain([0, 1, 2, 3, 4, 5, 6, 7])
			.range([0, scale*width/8, scale*width/4, scale*3*width/8, scale*width/2, scale*5*width/8, scale*3*width/4, scale*7*width/8, scale*width]);
		
		var y = d3.scaleOrdinal()
			.domain([0, 1, 2, 3, 4, 5, 6, 7])
			.range([scale*height, scale*7*height/8, scale*3*height/4, scale*5*height/8, scale*height/2, scale*3*height/8, scale*height/4, scale*height/8, 0]);
		
		const tiles = [	{	"id" : 0,
							"x"  : 0,
							"y"  : 0	},
						{	"id" : 1,
							"x"  : 1,
							"y"  : 0	},
						{	"id" : 2,
							"x"  : 7,
							"y"  : 0	},
						{	"id" : 3,
							"x"  : 0,
							"y"  : 1	},
						{	"id" : 4,
							"x"  : 0,
							"y"  : 7	},
						{	"id" : 5,
							"x"  : 7,
							"y"  : 7	}	];
		
		tile_mask.append("g")
			.attr("fill", "#FFAFAF")
			.attr("stroke-width", 2)
			.style("opacity", 0.5)
			.selectAll("g")
			.data(tiles)
			.enter()
			.append("rect")
				.attr("id", d => "340" + d.id)
				.attr("x", d => x(d.x) + offset)
				.attr("y", d => y(7 - d.y) - (scale * height / 8) + offset)
				.attr("width", scale * width / 8)
				.attr("height", scale * height / 8)
				.on("mouseover", function() {
					d3.selectAll("rect[id='" + this.id + "']")
						.style("stroke", "#FF0000")
						.style("opacity", 1);
					
					const index = parseInt(this.id.substring(3, 4));
					
					if(tiles[index].x == 0) {
						document.getElementById("formular_basis_x").style.backgroundColor = "#EFEFFF";
						document.getElementById("formular_basis_x").innerText = "\\[\\textcolor{#CFCFFF}{\\cos((2x+1)}\\textcolor{#FFCFCF}{{0 \\over 16}\\pi}\\textcolor{#CFCFFF}{)}\\]";
					} else {
						document.getElementById("formular_basis_x").innerText = "\\[\\cos((2x+1)\\textcolor{red}{{" + tiles[index].x + " \\over 16}\\pi})\\]";
					}
					
					if(tiles[index].y == 0) {
						document.getElementById("formular_basis_y").style.backgroundColor = "#EFEFFF";
						document.getElementById("formular_basis_y").innerText = "\\[\\textcolor{#CFCFFF}{\\cos((2y+1)}\\textcolor{#FFCFCF}{{0 \\over 16}\\pi}\\textcolor{#CFCFFF}{)}\\]";
					} else {
						document.getElementById("formular_basis_y").innerText = "\\[\\cos((2y+1)\\textcolor{red}{{" + tiles[index].y + " \\over 16}\\pi})\\]";
					}
					
					document.getElementById("basis_function_image" + index).hidden = false;
					document.getElementById("no_function_image").hidden = true;
					
					switch(index) {
						case 0:
							document.getElementById("basis_equals_1").style.visibility = "visible";
							
							document.getElementById("basis_description_text").innerHTML = "Stelle: (0,0)<br /><br />Die Frequenz ist Null, d.h. diese Funktion beschreibt den gleichbleibenden Anteil aller Pixelwerte des Blocks.<br /><br />Der Wert an dieser Stelle entspricht dem 8-fachen Mittelwert aller 64 Pixelwerte in einem Block.";
							break;
						case 1:
							document.getElementById("basis_description_text").innerHTML = "Stelle: (1,0)<br /><br />Diese Funktion beschreibt eine allm&auml;hliche &Auml;nderung der Pixelwerte in horizontaler Richtung.<br /><br />Beispiel:<br />Farb&auml;nderung in einem Farbverlauf zwischen linkem und rechtem Rand";
							break;
						case 2:
							document.getElementById("basis_description_text").innerHTML = "Stelle: (7,0)<br /><br />Diese Funktion beschreibt eine st&auml;ndige &Auml;nderung der Pixelwerte in horizontaler Richtung.<br /><br />Beispiel:<br />senkrechte Linien in schwarzer Schrift aus wei&szlig;em Grund";
							break;
						case 3:
							document.getElementById("basis_description_text").innerHTML = "Stelle: (0,1)<br /><br />Diese Funktion beschreibt eine allm&auml;hliche &Auml;nderung der Pixelwerte in vertikaler Richtung.<br /><br />Beispiel:<br />Farb&auml;nderung in einem Farbverlauf zwischen oberem und unterem Rand";
							break;
						case 4:
							document.getElementById("basis_description_text").innerHTML = "Stelle: (0,7)<br /><br />Diese Funktion beschreibt eine st&auml;ndige &Auml;nderung der Pixelwerte in vertikaler Richtung.<br /><br />Beispiel:<br />Strichzeichnung";
							break;
						case 5:
							document.getElementById("basis_description_text").innerHTML = "Stelle: (7,7)<br /><br />Diese Funktion beschreibt eine st&auml;ndige &Auml;nderung der Werte von Pixel zu Pixel.<br /><br />Beispiel:<br />die meist sehr geringe Wert$auml;nderung von Pixel zu Pixel in einem Farbverlauf";
							break;
					}
					
					MathJax.typeset();
				})
				.on("mouseout", function() {
					d3.selectAll("rect[id='" + this.id + "']")
						.style("stroke", "none");
					
					const index = parseInt(this.id.substring(3, 4));
					
					if(index == 0)
						document.getElementById("basis_equals_1").style.visibility = "hidden";
					
					document.getElementById("formular_basis_x").style.backgroundColor = "transparent";
					document.getElementById("formular_basis_y").style.backgroundColor = "transparent";
					document.getElementById("formular_basis_x").innerText = "\\[\\cos((2x+1)\\textcolor{red}{{u \\over 16}\\pi})\\]";
					document.getElementById("formular_basis_y").innerText = "\\[\\cos((2y+1)\\textcolor{red}{{v \\over 16}\\pi})\\]";
					
					document.getElementById("basis_function_image" + index).hidden = true;
					document.getElementById("no_function_image").hidden = false;
					
					document.getElementById("basis_description_text").innerText = "";
					
					MathJax.typeset();
				});
	}
	
	document.getElementById("select_y").addEventListener("click", function() {
		d3.selectAll("g[id='351" + channel + "']")
			.style("opacity", 0);
		channel = 0;
		d3.selectAll("g[id='3510']")
			.style("opacity", 1);
	});
	
	document.getElementById("select_cb").addEventListener("click", function() {
		d3.selectAll("g[id='351" + channel + "']")
			.style("opacity", 0);
		channel = 1;
		d3.selectAll("g[id='3511']")
			.style("opacity", 1);
	});
	
	document.getElementById("select_cr").addEventListener("click", function() {
		d3.selectAll("g[id='351" + channel + "']")
			.style("opacity", 0);
		channel = 2;
		d3.selectAll("g[id='3512']")
			.style("opacity", 1);
	});
	
	{ // formular text-size different after hover
		const width = document.getElementById("coefficient_matrix").width.baseVal.value;
		const height = document.getElementById("coefficient_matrix").height.baseVal.value;
		
		var coefficient_matrix = d3.select("#coefficient_matrix")
			.attr("viewbox", [0, 0, width, height]);
		
		var x = d3.scaleOrdinal()
			.domain([0, 1, 2, 3, 4, 5, 6, 7])
			.range([0, width/8, width/4, 3*width/8, width/2, 5*width/8, 3*width/4, 7*width/8, width]);
		
		var y = d3.scaleOrdinal()
			.domain([0, 1, 2, 3, 4, 5, 6, 7])
			.range([height, 7*height/8, 3*height/4, 5*height/8, height/2, 3*height/8, height/4, height/8, 0]);
		
		var matrix_as_stream = [[], [], []];
		for(var c = 0; c < 3; c++) {
			for(var j = 0; j < 8; j++) {
				for(var i = 0; i < 8; i++) {
					matrix_as_stream[c].push(c_matrix[c][i][j]);
				}
			}
		}
		
		coefficient_matrix.append("g")
			.attr("fill", "#FFEFEF")
			.attr("stroke", "#AFAFFF")
			.attr("stroke-width", 1)
			.selectAll("rect")
			.data(matrix_as_stream[0])
			.enter()
			.append("rect")
				.attr("x", (d, i) => x(Math.floor(i / 8)))
				.attr("y", (d, i) => y(i % 8) - height / 8)
				.attr("width", width / 8)
				.attr("height", height / 8);
		
		coefficient_matrix.append("g")
			.attr("id", "3510")
			.attr("fill", "#AFAFFF")
			.attr("font-size", "12")
			.attr("text-anchor", "middle")
			.style("cursor", "default")
			.style("opacity", 1)
			.selectAll("rect")
			.data(matrix_as_stream[0])
			.enter()
			.append("text")
				.attr("x", (d, i) => x(Math.floor(i / 8)) + (x(1) / 2))
				.attr("y", (d, i) => height - (y(i % 8) - height / 8 + (y(7) / 4)))
				.text(d => d);
		
		coefficient_matrix.append("g")
			.attr("id", "3511")
			.attr("fill", "#AFAFFF")
			.attr("font-size", "12")
			.attr("text-anchor", "middle")
			.style("cursor", "default")
			.style("opacity", 0)
			.selectAll("rect")
			.data(matrix_as_stream[1])
			.enter()
			.append("text")
				.attr("x", (d, i) => x(Math.floor(i / 8)) + (x(1) / 2))
				.attr("y", (d, i) => height - (y(i % 8) - height / 8 + (y(7) / 4)))
				.text(d => d);
		
		coefficient_matrix.append("g")
			.attr("id", "3512")
			.attr("fill", "#AFAFFF")
			.attr("font-size", "12")
			.attr("text-anchor", "middle")
			.style("cursor", "default")
			.style("opacity", 0)
			.selectAll("rect")
			.data(matrix_as_stream[2])
			.enter()
			.append("text")
				.attr("x", (d, i) => x(Math.floor(i / 8)) + (x(1) / 2))
				.attr("y", (d, i) => height - (y(i % 8) - height / 8 + (y(7) / 4)))
				.text(d => d);
		
		const tiles = [	{	"id" : 0,
							"x"  : 0,
							"y"  : 0	},
						{	"id" : 1,
							"x"  : 1,
							"y"  : 0	},
						{	"id" : 2,
							"x"  : 7,
							"y"  : 0	},
						{	"id" : 3,
							"x"  : 0,
							"y"  : 1	},
						{	"id" : 4,
							"x"  : 0,
							"y"  : 7	},
						{	"id" : 5,
							"x"  : 7,
							"y"  : 7	}	];
		
		coefficient_matrix.append("g")
			.attr("fill", "#FFAFAF")
			.attr("stroke-width", 2)
			.style("opacity", 0.3)
			.selectAll("g")
			.data(tiles)
			.enter()
			.append("rect")
				.attr("id", d => "350" + d.id)
				.attr("x", d => x(d.x))
				.attr("y", d => y(7 - d.y) - (height / 8))
				.attr("width", width / 8)
				.attr("height", height / 8)
				.on("mouseover", function() {
					d3.selectAll("rect[id='" + this.id + "']")
						.style("stroke", "#FF0000")
						.style("opacity", 1);
					
					const index = parseInt(this.id.substring(3, 4));
					
					var formular = "\\[\\mathbf{\\textcolor{red}{S_{" + tiles[index].x + "" + tiles[index].y + "} = F(" + tiles[index].x + "," + tiles[index].y + ")}} = {1 \\over 4}c_{" + tiles[index].x + "}c_{" + tiles[index].y + "}\\sum_{x=0}^7 \\sum_{y=0}^7 z_{xy}";
					
					if(tiles[index].x == 0) {
						formular += "\\textcolor{lightgrey}{\\cos((2x+1){0 \\over 16}\\pi)}";
					} else {
						formular += "\\cos((2x+1){" + tiles[index].x + "\\over 16}\\pi)";
					}
					
					if(tiles[index].y == 0) {
						formular += "\\textcolor{lightgrey}{\\cos((2y+1){0 \\over 16}\\pi)}\\]";
					} else {
						formular += "\\cos((2y+1){" + tiles[index].y + "\\over 16}\\pi)\\]";
					}
					
					document.getElementById("formular").innerText = formular;
					
					switch(index) {
						case 0:
							document.getElementById("coefficient_description_text").innerHTML = "Stelle: (0,0) -> <b>\\(S_{00}\\)</b><br />Dieser Koeffizient ist der 8fache <b>Grundton des Blocks</b>, also der gleich bleibende Anteil aller Werte. Man bezeichnet ihn daher als Gleichanteil oder <b>DC-Koeffizient</b> (von engl. direct current = Gleichstrom)";
							break;
						case 1:
							document.getElementById("coefficient_description_text").innerHTML = "Stelle: (1,0) -> <b>\\(S_{10}\\)</b><br />Dieser Koeffizient ist ein Frequenzanteil oder <b>AC-Koeffizient</b> (engl. alternating current = Wechselstrom)<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts in hohem Ma&szlig;, aber allm&auml;hlich.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts kaum.";
							break;
						case 2:
							document.getElementById("coefficient_description_text").innerHTML = "Stelle: (7,0) -> <b>\\(S_{70}\\)</b><br />Dieser Koeffizient ist ein <b>AC-Koeffizient</b>.<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts st&auml;ndig mit gro&szlig;em Unterschied.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von links nach rechts st&auml;ndig, aber nur mit kleinem Unterschieden.";
							break;
						case 3:
							document.getElementById("coefficient_description_text").innerHTML = "Stelle: (0,1) -> <b>\\(S_{01}\\)</b><br />Dieser Koeffizient ist ein Frequenzanteil oder <b>AC-Koeffizient</b> (engl. alternating current = Wechselstrom)<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten in hohem Ma&szlig;, aber allm&auml;hlich.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten kaum.";
							break;
						case 4:
							document.getElementById("coefficient_description_text").innerHTML = "Stelle: (0,7) -> <b>\\(S_{07}\\)</b><br />Dieser Koeffizient ist ein <b>AC-Koeffizient</b>.<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten st&auml;ndig mit gro&szlig;em Unterschied.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich von oben nach unten st&auml;ndig, aber nur mit kleinem Unterschieden.";
							break;
						case 5:
							document.getElementById("coefficient_description_text").innerHTML = "Stelle: (7,7) -> <b>\\(S_{77}\\)</b><br />Dieser Koeffizient ist ein <b>AC-Koeffizient</b>.<br /><b>Gro&szlig;er Wert</b>: Pixelwerte &auml;ndern sich in beide Richtungen st&auml;ndig mit gro&szlig;em Unterschied.<br /><b>Kleiner Wert</b>: Pixelwerte &auml;ndern sich in beide Richtungen st&auml;ndig, aber nur mit kleinem Unterschieden.";
							break;
					}
					
					MathJax.typeset();
				})
				.on("mouseout", function() {
					d3.selectAll("rect[id='" + this.id + "']")
						.style("stroke", "none");
						
					document.getElementById("formular").innerText = "\\[\\mathbf{\\textcolor{red}{S_{uv} = F(u,v)}} = {1 \\over 4}c_{u}c_{v}\\sum_{x=0}^7 \\sum_{y=0}^7 z_{xy}\\cos((2x+1){u \\over 16}\\pi)\\cos((2y+1){v \\over 16}\\pi)\\]";
					
					document.getElementById("coefficient_description_text").innerText = "";
					
					MathJax.typeset();
				});
	}
});

function setStage(s) {
	document.getElementById("chapter" + stage).hidden = true;
	
	stage = s;
	switch(stage) {
		case 0:
			document.getElementById("chapter_name").innerText = "3.1 DCT-Übersicht";
			break;
		case 1:
			document.getElementById("chapter_name").innerText = "3.2 Blockmatrix als 2D-Rechteckfunktion";
			break;
		case 2:
			document.getElementById("chapter_name").innerText = "3.3 Eindimensionale diskrete Cosinus-Transformation";
			break;
		case 3:
			document.getElementById("chapter_name").innerText = "3.4 Zweidimensionale diskrete Cosinus-Transformation";
			break;
		case 4:
			document.getElementById("chapter_name").innerText = "3.5 Zweidimensionale diskrete Cosinus-Transformation: Basisfunktionen";
			break;
		case 5:
			document.getElementById("chapter_name").innerText = "3.6 DCT-Koeffizientenmatrix";
			break;
		case 6:
			document.getElementById("chapter_name").innerText = "3.7 DCT: Zusammenfassung";
			break;
	}
	
	document.getElementById("chapter" + stage).hidden = false;
}
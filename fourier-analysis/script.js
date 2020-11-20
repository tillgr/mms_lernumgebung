document.addEventListener("DOMContentLoaded", function() {
	
	
	// buttons
	buttonSineWave = document.getElementById("buttonSineWave");
	buttonCosineWave = document.getElementById("buttonCosineWave");
	buttonSawWave = document.getElementById("buttonSawWave");
	buttonSquareWave = document.getElementById("buttonSquareWave");
	buttonTriangleWave = document.getElementById("buttonTriangleWave");
	buttonGraetzSine = document.getElementById("buttonGraetzSine");
	buttonResetWave = document.getElementById("buttonResetWave");
	
	// button EventListeners
	buttonSineWave.addEventListener("click", function() {createSineWave();});
	buttonCosineWave.addEventListener("click", function() {createCosineWave();});
	buttonSawWave.addEventListener("click", function() {createSawWave();});
	buttonSquareWave.addEventListener("click", function() {createSquareWave();});
	buttonTriangleWave.addEventListener("click", function() {createTriangleWave();});
	buttonGraetzSine.addEventListener("click", function() {createGraetzSine();});
	buttonResetWave.addEventListener("click", function() {resetWave();});
	
	
	// wave creation functions
	function createSineWave() {
		displayFunctionGraetz = false;
		resetWave();
		sliders_a[0].value = 99;
		
		calculateFunctionData(64);
		calculateSpectrumData();
		updateGraphs();
	}
	
	function createCosineWave() {
		displayFunctionGraetz = false;
		resetWave();
		sliders_b[0].value = 99;
		
		calculateFunctionData(64);
		calculateSpectrumData();
		updateGraphs();
	}
	
	function createSawWave() {
		displayFunctionGraetz = false;
		resetWave();
		sliders_a[0].value = 99;
		sliders_a[1].value = 50;
		sliders_a[2].value = 20;
		sliders_a[3].value = 10;
		sliders_a[4].value = 2;
		sliders_a[5].value = 2;
		sliders_a[6].value = 1;
		
		calculateFunctionData(64);
		calculateSpectrumData();
		updateGraphs();
	}
	
	function createSquareWave() {
		displayFunctionGraetz = false;
		resetWave();
		sliders_a[0].value = 99;
		sliders_a[2].value = 27;
		sliders_a[4].value = 13;
		sliders_a[5].value = 1;
		sliders_a[6].value = 4;
		sliders_a[7].value = 1;
		
		calculateFunctionData(64);
		calculateSpectrumData();
		updateGraphs();
	}
	
	function createTriangleWave() {
		displayFunctionGraetz = false;
		resetWave();
		sliders_b[0].value = 99;
		sliders_b[2].value = 10;
		sliders_b[3].value = 1;
		sliders_b[4].value = 10;
		sliders_b[5].value = 1;
		
		calculateFunctionData(64);
		calculateSpectrumData();
		updateGraphs();
	}
	
	var displayFunctionGraetz = false;
	
	function createGraetzSine() {
		resetWave();
		sliders_a[0].value = 99;
		displayFunctionGraetz = true;
		
		calculateFunctionData(64);
		calculateSpectrumData();
		updateGraphs();
	}
	
	function resetWave() {
		
		for(var i = 0; i < 10; i++) {
			sliders_a[i].value = 0;
			sliders_b[i].value = 0;
		}
		
		displayFunctionGraetz = false;
		calculateFunctionData(64);
		calculateSpectrumData();
		updateGraphs();
	}
	
	
	// range sliders are saved in arrays
	var sliders_a = new Array(10);
	var sliders_b = new Array(10);
	
	for(var i = 0; i < 10; i++) {
		sliders_a[i] = document.getElementById("slider_a_" + i.toString());
		sliders_b[i] = document.getElementById("slider_b_" + i.toString());
	}
	
	// add slider EventListeners
	sliders_a.forEach(function(slider) {
		slider.addEventListener("input", function() {
			text_fields_a[sliders_a.indexOf(this)].value = slider.value;
			calculateFunctionData(64);
			calculateSpectrumData();
			updateGraphs();
		});
	});
	
	sliders_b.forEach(function(slider) {
		slider.addEventListener("input", function() {
			text_fields_b[sliders_b.indexOf(this)].value = slider.value;
			calculateFunctionData(64);
			calculateSpectrumData();
			updateGraphs();
		});
	});
	
	
	// text fields are saved in arrays
	var text_fields_a = new Array(10);
	var text_fields_b = new Array(10);
	
	for(var i = 0; i < 10; i++) {
		text_fields_a[i] = document.getElementById("text_field_a_" + i.toString());
		text_fields_b[i] = document.getElementById("text_field_b_" + i.toString());
	}
	
	// add text field EventListeners
	text_fields_a.forEach(function(text_field) {
		text_field.addEventListener("input", function() {
			sliders_a[text_fields_a.indexOf(this)].value = text_field.value;
			calculateFunctionData(64);
			calculateSpectrumData();
			updateGraphs();
		});
	});
	
	text_fields_b.forEach(function(text_field) {
		text_field.addEventListener("input", function() {
			sliders_b[text_fields_b.indexOf(this)].value = text_field.value;
			calculateFunctionData(64);
			calculateSpectrumData();
			updateGraphs();
		});
	});
	
	
	// data arrays
	var function_data = [];
	var spectrum_data = new Array(10);
	
	
	// function calculation
	function calculateFunctionAt(n) {
		
		var result = 0;
		
		for(var i = 1; i <= 10; i++) {
			result = result + (parseFloat(sliders_a[i-1].value) * Math.sin(parseFloat(i) * n) + parseFloat(sliders_b[i-1].value) * Math.cos(parseFloat(i) * n));
		}
		return result;
	}
	
	function calculateFunctionData(stepSize) {
		
		function_data = [];
		
		if(displayFunctionGraetz === true) {
			for(var i = 0; i < Math.PI * 8; i += Math.PI / stepSize) {
				function_data.push(Math.abs(calculateFunctionAt(i)));
			}
		} else {
			for(var i = 0; i < Math.PI * 8; i += Math.PI / stepSize) {
				function_data.push(calculateFunctionAt(i));
			}
		}
		
		
	}
	
	
	// spectrum calculation
	function calculateSpectrumData() {
		for(var i = 0; i < spectrum_data.length; i++) {
			spectrum_data[i] = Math.sqrt(parseInt(sliders_a[i].value, 10) * parseInt(sliders_a[i].value, 10) + parseInt(sliders_b[i].value, 10) * parseInt(sliders_b[i].value, 10));
		}
	}
	
	// d3 stuff
	
	const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
	
	// graphs
	const svg_graph1 = document.getElementById("svg_graph1");
	const svg_graph2 = document.getElementById("svg_graph2");
	
	const width = 1000;
	const height = 600;
	const margin = {top: 50, bottom: 50, left: 50, right: 50};
	const color = {};
	
	createSineWave();
	
	// graph1 (function_data) ///////////////
	
	var x = d3.scaleBand()
		.domain(d3.range(function_data.length))
		.range([margin.left, width - margin.right])
		.padding(0.1);
		
	var y = d3.scaleLinear()
		.domain([-300, 300]).nice()
		.range([height - margin.bottom, margin.top]);
		
	var xAxis = d3.axisBottom(x);
	var yAxis = d3.axisLeft(y);
		
	var svg1 = d3.select("#svg_graph1")
		.attr("viewBox", [0, 0, width, height]);
	
	
	
	svg1.append("g")
		.attr("class", "x_axis")
		.attr("transform", "translate(0," + y(0) + ")")
		.call(xAxis);
	svg1.append("g")
		.attr("class", "y_axis")
		.attr("transform", "translate(" + (margin.left) + ", 0)")
		.call(yAxis);
		
		
		var dataLine = svg1.selectAll(".dataLine")
			.data([function_data], (d, i) => i);
		
		dataLine
			.enter()
			.append("path")
				.attr("class", "dataLine")
			.merge(dataLine)
			.transition()
			.duration(10)
				.attr("fill", "none")
				.attr("stroke", "blue")
				.attr("stroke-linejoin", "round")
				.attr("d", d3.line()
					.x((d, i) => x(i))
					.y(d => y(d)));
					
					
	
	
	// graph2 (spectrum_data) ///////////////
	
	var x = d3.scaleBand()
		.domain(d3.range(spectrum_data.length))
		.range([margin.left, width - margin.right])
		.padding(0.1);
		
	var y = d3.scaleLinear()
		.domain([0, 150]).nice()
		.range([height - margin.bottom, margin.top]);
		
	var xAxis = d3.axisBottom(x);
	var yAxis = d3.axisLeft(y);
		
	var svg2 = d3.select("#svg_graph2")
		.attr("viewBox", [0, 0, width, height]);
	
	
	
	svg2.append("g")
		.attr("class", "x_axis")
		.attr("transform", "translate(0," + y(0) + ")")
		.call(xAxis);
	svg2.append("g")
		.attr("class", "y_axis")
		.attr("transform", "translate(" + (margin.left) + ", 0)")
		.call(yAxis);
		
		
		var dataLine = svg2.selectAll(".dataLine")
			.data([spectrum_data], (d, i) => i);
		
		dataLine
			.enter()
			.append("path")
				.attr("class", "dataLine")
			.merge(dataLine)
			.transition()
			.duration(200)
				.attr("fill", "none")
				.attr("stroke", "blue")
				.attr("stroke-linejoin", "round")
				.attr("d", d3.line()
					.x((d, i) => x(i))
					.y(d => y(d)));
					
	function updateGraphs() {
		
	// graph1 (function_data)
	
	var x = d3.scaleBand()
		.domain(d3.range(function_data.length))
		.range([margin.left, width - margin.right])
		.padding(0.1);
		
	var y = d3.scaleLinear()
		.domain([-300, 300]).nice()
		.range([height - margin.bottom, margin.top]);
		
	var svg1 = d3.select("#svg_graph1")
		.attr("viewBox", [0, 0, width, height]);		
		
		var dataLine = svg1.selectAll(".dataLine")
			.data([function_data], (d, i) => i);
		
		dataLine
			.enter()
			.append("path")
				.attr("class", "dataLine")
			.merge(dataLine)
			.transition()
			.duration(200)
				.attr("fill", "none")
				.attr("stroke", "blue")
				.attr("stroke-linejoin", "round")
				.attr("d", d3.line()
					.x((d, i) => x(i))
					.y(d => y(d)));
					
					
	
	
	// graph2 (spectrum_data) ///////////////
	
	var x = d3.scaleBand()
		.domain(d3.range(spectrum_data.length))
		.range([margin.left, width - margin.right])
		.padding(0.1);
		
	var y = d3.scaleLinear()
		.domain([0, 150]).nice()
		.range([height - margin.bottom, margin.top]);
		
	var svg2 = d3.select("#svg_graph2")
		.attr("viewBox", [0, 0, width, height]);		
		
	var dataLine = svg2.selectAll(".dataLine")
		.data([spectrum_data], (d, i) => i);
		
		dataLine
			.enter()
			.append("path")
				.attr("class", "dataLine")
			.merge(dataLine)
			.transition()
			.duration(200)
				.attr("fill", "none")
				.attr("stroke", "blue")
				.attr("stroke-linejoin", "round")
				.attr("d", d3.line()
					.x((d, i) => x(i))
					.y(d => y(d)));
		
	}
});
var c = document.getElementById('myCanvas');

function drawPlot() {
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    var signal = sfield[current_s].split(',').map(Number);
    drawSpline(signal, '#0000ff', ctx);

    var q_field = params['q_mode'].split(',').map(Number);
    user_sfield = backtransformation(user_cfield, params['t_mode'], q_field);
    drawSpline(user_sfield, '#ff0000', ctx);

    renderBoard();
}

function drawSpline(points, color, ctx) {
    ctx.strokeStyle = color;
    points = rescale(points)
    ctx.curve(points);
    ctx.stroke();

    for (var i = 0; i <= points.length; i += 2){
        ctx.beginPath();
        ctx.arc(points[i], points[i+1], 3, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill()
    }
}

function rescale(points) {
    // points contains y values of the coordinates
    var newPoints = new Array(points.length * 2);
    var height = c.height;

    for (var i = 0; i < points.length; i++){
        newPoints[i * 2] = 100 * i;                         // Insert x value
        var y_val = Math.min(Math.max(points[i], 0), 255);  // Limit to (0, 255)
        newPoints[i * 2 + 1] = (height - y_val * 2);        // Scale to canvas size
    }
    return newPoints;
}

function magic() {
    var signal = sfield[current_s].split(',').map(Number);
    var q_field = params['q_mode'].split(',').map(Number);
    var cfield = transformation(signal, params['t_mode'], q_field);
    reset(cfield);
}

// ----------------- GUI -----------------

//setup
var t_mode = ['DCT', 'DFT'];
var sfield = {1:'150, 170, 132, 185, 147, 190, 215, 220',
         2:'165, 185, 130, 190, 175, 196, 223, 199',
         3:' 55, 163, 180,  20, 202, 173,  97, 170',
         4:'143, 154, 160, 170, 211, 185, 190, 166',
         5:'130, 140, 172, 190, 193, 150, 180, 140',
         6:' 35,  64, 198, 180,  77, 141,  72, 135',
         7:'170, 190, 163, 140, 165, 132, 160, 140',
         8:'160,  40, 145,  35, 170, 199, 190,  29',
         9:'120,  80, 120,  80, 120,  80, 120,  80',
         10:'200, 100, 200, 100, 200, 100, 200, 100',
         11:'255,   0, 255,   0, 255,   0, 255,   0',
         12:'0,   0,   0,   0,   0,   0,   0,   0'};
var current_s = 1;
var q_mode = {'Do not quantise': '1, 1, 1, 1, 1, 1, 1, 1',
        'Divide u\'s by 2': '2, 2, 2, 2, 2, 2, 2, 2',
        'Divide u\'s by 5': '5, 5, 5, 5, 5, 5, 5, 5',
        'Divide u\'s by 10': '10, 10, 10, 10, 10, 10, 10, 10',
        'Divide u\'s by 25': '25, 25, 25, 25, 25, 25, 25, 25',
        'Divide u\'s by 50': '50, 50, 50, 50, 50, 50, 50, 50',
        'JPEG Standard': '16, 11, 10, 16, 24, 40, 51, 61'};
var user_sfield = [0, 0, 0, 0, 0, 0, 0, 0]
var user_cfield = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var slider_controllers = new Array(user_cfield.length);

var params = {
    't_mode': t_mode[0],
    'q_mode': q_mode['Do not quantise'],
    'reset': function() { reset([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) },
    'magic': function() { magic() }
}

const gui = new dat.GUI({autoPlace: false});
gui.domElement.id = 'datGUI';

document.getElementById('panel').appendChild(gui.domElement);

gui.add(params, 't_mode', t_mode).onChange((x) => { change_mode(x) });

var q_mode_controller = gui.add(params, 'q_mode', q_mode).onChange(() => { drawPlot() });

gui.add(params, 'reset');

gui.add(params, 'magic');

//onChange

for (let i = 0; i < 16; i++) {
    params['user_cfield' + i] = user_cfield[i];
    slider_controllers[i] = gui.add(params, 'user_cfield' + i, -400, 400, 1).onChange((x) => {
        user_cfield[i] = x;
        drawPlot();
    });
}

function change_mode(t_mode) {
    if (t_mode === 'DFT') {
        q_mode_controller.domElement.style.display = "none";
    } else {
        q_mode_controller.domElement.style.display = "";
    }
    for (var i = 0; i < slider_controllers.length; i++) {
        slider_controller = slider_controllers[i];
        if (t_mode === 'DCT' && i % 2 === 1) {
            slider_controller.domElement.style.display = "none";
        } else {
            slider_controller.domElement.style.display = "";
        }
        min = (t_mode === 'DFT') ? -2040 : -400;
        max = (t_mode === 'DFT') ? 2040 : 400;
        slider_controller.min(min);
        slider_controller.max(max);
    }
    reset([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}

function reset(user_cfield_new) {
    for (var i = 0; i < user_cfield.length; i++) {
        slider_controller = slider_controllers[i]
        slider_onchange_temp = slider_controller.__onChange
        slider_controller.__onChange = null
        slider_controller.setValue(user_cfield_new[i]);
        user_cfield[i] = user_cfield_new[i]
        slider_controller.__onChange = slider_onchange_temp
    }
    drawPlot();
}

// ----------------- AXES -----------------

function drawAxes() {
    canvas_position = c.getBoundingClientRect();
    svgElement = document.getElementById('mySVG');
    svgElement.style.position = 'absolute';
    svgElement.style.top = canvas_position.top - 25;
    svgElement.style.left = canvas_position.left - 25;
    const margin = {top: 24, bottom: 25, left: 25, right: 25};
    graph = document.getElementById('mySVG');
	var width = graph.width.baseVal.value;
	var height = graph.height.baseVal.value;
    graph = d3.select("#mySVG").attr("viewBox", [0, 0, width, height]);

    x = d3.scaleLinear()
		.domain([0, 7])
		.range([margin.left, width - margin.right]);
	y = d3.scaleLinear()
		.domain([0, 255])
		.range([height - margin.bottom, margin.top]);

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
		.style("fill", "green")
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
		.style("fill", "green")
		.attr("class", "yAxis")
		.attr("transform", "translate(" + (margin.left / 2 - 5) + "," + (margin.top - 10) + ")")
		.text("Grayscale");
}

// ----------------- INIT -----------------

document.addEventListener("DOMContentLoaded", function(){
    change_mode(params['t_mode']);
    drawAxes();
});

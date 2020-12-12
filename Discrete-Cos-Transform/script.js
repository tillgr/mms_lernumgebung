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
  var newPoints = new Array(points.length * 2);

  for (var i = 0; i < points.length; i++){
    newPoints[i * 2] = 100 * i;
    newPoints[i * 2 + 1] = (500 - points[i] * 2);
  }
  return newPoints;
}

function magic() {
  var signal = sfield[current_s].split(',').map(Number);
  var q_field = params['q_mode'].split(',').map(Number);
  var cfield = transformation(signal, params['t_mode'], q_field);
  reset(cfield);
  drawPlot();
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
    'Divide by 2': '2, 2, 2, 2, 2, 2, 2, 2',
    'Divide by 5': '1, 1, 1, 1, 1, 1, 1, 1',
    'Divide by 8': '1, 1, 1, 1, 1, 1, 1, 1',
    'Divide by 16': '1, 1, 1, 1, 1, 1, 1, 1',
    'JPEG Standard': '1, 1, 1, 1, 1, 1, 1, 1'};
var user_sfield = [0, 0, 0, 0, 0, 0, 0, 0]
var user_cfield = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sliderControllers = new Array(user_cfield.length);

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
  sliderControllers[i] = gui.add(params, 'user_cfield' + i, -400, 400, 1).onChange((x) => {
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
    for (var i = 0; i < sliderControllers.length; i++) {
        slider_controller = sliderControllers[i];
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

function reset(user_cfield) {
  for (var i = 0; i < user_cfield.length; i++) {
    sliderControllers[i].setValue(user_cfield[i]);
  }
}

document.addEventListener("DOMContentLoaded", function(){
    change_mode(params['t_mode']);
    drawPlot();
});

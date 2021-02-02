// 0 - Einführung, 1-Auflösung-Abtast, 2-Auflösung-Speicher, 3-Lineare Quantisierung, 4-Nichtlineare Quantisierung, 5-Auswertung

// ###########################################################
// ################### Vairable Setup ########################
// ###########################################################

var currentMaxStep = 0;
// Task 1
var randomFrequency;
// Task 2
var randomSecond;
var randomFileSize;
// Task 3 and 4
var dataSet;
var xScale;
var width = 1000,
height = 600;
var padding = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40
};

// Task 3
var diagramLinear;
var yScaleLinear;
var circleDataLinear;
var absoluteArrayLinear;
var circlesLinear;
var correctArrayLinear;
//Task 4
var diagramNonLinear;
var yScaleNonLinear;
var circleDataNonLinear;
var absoluteArrayNonLinear;
var circlesNonLinear;
var correctArrayNonLinear;

// ###########################################################
// ################# Navigation Handling #####################
// ###########################################################

var contentStepDivs = Array(
  $('#snippet-intro'),
  $('#snippet-resolution1'),
  $('#snippet-resolution2'),
  $('#snippet-linearQuantisation'),
  $('#snippet-nonlinearQuantisation'),
  $('#snippet-evaluation')
);

var sidebarButtons = Array(
  $('#sidebarIntroduction'),
  $('#sidebarSamplingFrequency'),
  $('#sidebarStoragefrequency'),
  $('#sidebarLinear'),
  $('#sidebarNonlinear'),
  $('#sidebarEvaluation')
);

function switchStep(step) {
  sidebarButtons.forEach((item, i) => {
    if (i > currentMaxStep) {
      // disable all buttons for steps that are not yet reached
      item.parent().removeClass("active");
      item.parent().addClass("disabled");
      item.removeClass("text-white");
      item.prop("disabled", true);
    } else if (step == i) {
      // mark current task as active
      item.parent().addClass("active");
      item.parent().removeClass("disabled");
      item.addClass("text-white");
      item.prop("disabled", false);
    } else {
      // mark passed tasks with default styling and clickable
      item.parent().removeClass("active");
      item.parent().removeClass("disabled");
      item.removeClass("text-white");
      item.prop("disabled", false);
    }
  });

  contentStepDivs.forEach((item, i) => {
    if (step == i) {
      item.show();
    } else {
      item.hide();
    }
  });
}

function loadStep(stepNumber) {
  if (currentMaxStep < stepNumber) currentMaxStep = stepNumber;
  $('.validation').hide();
  switchStep(stepNumber);
}

// ###########################################################
// ################# Snippet initializing ####################
// ###########################################################

$(document).ready(function() {
  snippetRestart();
});

function snippetRestart() {
  $('.solution').hide();
  $('.task').show();
  $('.correctAnswer').hide();
  $('.btn-solution').hide();
  $('#linearSVG').empty();
  $('#nonLinearSVG').empty();
  $('#evaluationSVG').empty();
  $('#snippet-nonlinearQuantisation tbody td').empty();
  $('#snippet-linearQuantisation tbody td').empty();
  currentMaxStep = 0;
  randomFrequency = undefined;
  randomSecond = undefined;
  randomFileSize = undefined;
  dataSet = undefined;
  circleDataLinear = undefined;
  circleDataNonLinear = undefined;
  loadStep(0);
  initTasks();
}

function initTasks() {
  // task 1
  $('#limitFrequency').text(getRandomFrequency());

  // task 2
  $('#limitSeconds').text(getRandomSecond());
  $('#limitStorage').text(getRandomFileSize());

  // task 3
  yScaleLinear = d3.scaleLinear()
    .domain([0, 210])
    .range([height - padding.top - padding.bottom, 0]);
  let yAxisLinear = d3.axisLeft(yScaleLinear)
    .tickValues([30, 60, 90, 120, 150, 180, 210]);

  diagramLinear = createDiagram("linearSVG", yScaleLinear, yAxisLinear);

  circlesLinear = diagramLinear.selectAll("circle").data(getCircleDataLinear()).enter().append("circle");
  circlesLinear.attr('class', 'circleButton')
    .attr("cx", function(d) {
      return xScale(d.x);
    })
    .attr("cy", function(d) {
      return yScaleLinear(d.y);
    })
    .attr("r", "10")
    .style("fill", "grey")
    .on("click", function(point) {
      setCircleColumnGreyByX(Object.values(point)[0], getCircleDataLinear(), circlesLinear);
      setRedOnCircleData(Object.values(point)[0], Object.values(point)[1], true, getCircleDataLinear(), circlesLinear);
      updateArrays(absoluteArrayLinear, getCircleDataLinear(), "linear");
    });

  // task 4
  yScaleNonLinear = d3.scaleLinear()
    .domain([0, 210])
    .range([height - padding.top - padding.bottom, 0]);
  let yAxisNonLinear = d3.axisLeft(yScaleNonLinear)
    .tickValues([10, 25, 45, 70, 100, 140, 200]);

  diagramNonLinear = createDiagram("nonLinearSVG", yScaleNonLinear, yAxisNonLinear);

  circlesNonLinear = diagramNonLinear.selectAll("circle").data(getCircleDataNonLinear()).enter().append("circle");
  circlesNonLinear.attr('class', 'circleButton')
    .attr("cx", function(d) {
      return xScale(d.x);
    })
    .attr("cy", function(d) {
      return yScaleNonLinear(d.y);
    })
    .attr("r", "9")
    .style("fill", "grey")
    .on("click", function(point) {
      setCircleColumnGreyByX(Object.values(point)[0], getCircleDataNonLinear(), circlesNonLinear);
      setRedOnCircleData(Object.values(point)[0], Object.values(point)[1], true, getCircleDataNonLinear(), circlesNonLinear);
      updateArrays(absoluteArrayNonLinear, getCircleDataNonLinear(), "nonLinear");
    });

    // task5
    yScaleEval = d3.scaleLinear()
      .domain([0, 210])
      .range([height - padding.top - padding.bottom, 0]);
    let yAxisEval = d3.axisLeft(yScaleLinear)
      .tickValues([30, 60, 90, 120, 150, 180, 210]);
    resultDiagram = createDiagram("evaluationSVG", yScaleEval, yAxisEval);
    drawResultLine(resultDiagram, yScaleLinear, correctArrayLinear, "red");
    drawResultLine(resultDiagram, yScaleNonLinear, correctArrayNonLinear, "blue");
}

// ###########################################################
// ################# Snippet Functions #######################
// ###########################################################

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++ Task 1 ++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

function getRandomFrequency() {
  if (randomFrequency == undefined) {
    randomFrequency = Math.round(Math.random() * 5000) + 18000;
  }
  return randomFrequency;
}

function validateTask1(showSolution) {
  let answer = $('#samplingFrequency').val();
  let correctAnswer = getRandomFrequency() * 2;

  $('#errorMessageResolution1_1').hide();
  $('#errorMessageResolution1_2').hide();

  if (answer == "") {
    $('#errorMessageResolution1_1').show();
    $('#samplingFrequency').val("");
  } else if (answer == correctAnswer || showSolution) {
    if (!showSolution) $('#snippet-resolution1').find('.correctAnswer').show();
    $('#snippet-resolution1').find('.task').hide();
    $('#snippet-resolution1').find('.solution').show();
    $('#answerLimitFrequency').text(getRandomFrequency());
    $('#answerSamplingFrequency').text(correctAnswer);
  } else {
    $('#inputSamplingFrequency').text(answer);
    $('#errorMessageResolution1_2').show();
    $('#snippet-resolution1').find('.btn-solution').show();
  }
  $('.validation').show();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++ Task 2 ++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

function getRandomSecond() {
  if (randomSecond == undefined) {
    randomSecond = Math.round(Math.random() * 5) + 5;
  }
  return randomSecond;
}

function getRandomFileSize() {
  if (randomFileSize == undefined) {
    randomFileSize = Math.round(Math.random() * 400) + 100;
  }
  return randomFileSize;
}

function validateTask2(showSolution) {
  let answer = $('#storageAnswer').val();
  let samples = 44000 * getRandomSecond();
  let availableStorage = getRandomFileSize() * 8192;
  let correctAnswer = Math.floor(availableStorage / samples);
  let storage_Byte = getRandomFileSize() * 1024;
  let storage_bit = storage_Byte * 8;

  $('#errorMessageResolution2_1').hide();
  $('#errorMessageResolution2_2').hide();

  if (answer == 0) {
    $('#errorMessageResolution2_1').show();
    $('#samplingFrequency').val("");
  } else if (answer == correctAnswer || showSolution) {
    if (!showSolution) $('#snippet-resolution2').find('.correctAnswer').show();
    $('#snippet-resolution2').find('.task').hide();
    $('#snippet-resolution2').find('.solution').show();

    $('#secondsCorrect,#secondsCorrect2').text(getRandomSecond());
    $('#samples,#samples2,#samples3').text(samples);
    $('#storage,#storage2').text(getRandomFileSize());
    $('#storage3_Byte,#storage3_Byte2').text(storage_Byte);
    $('#storage4_Bit,#storage4_Bit2,#storage4_Bit3').text(storage_bit);
    $('#answerStorage').text(correctAnswer);
  } else {
    $('#storageInput').text(answer);
    $('#errorMessageResolution2_2').show();
    $('#snippet-resolution2').find('.btn-solution').show();
  }
  $('.validation').show();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++ Task 3 and 4 ++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// randomize Data
function getDataSet(){
  if (dataSet == undefined) {
    dataSet = [];
    absoluteArrayLinear = [];
    absoluteArrayNonLinear = [];
    for (var i = 0; i < 10; i++) {
      absoluteArrayLinear.push({x:i*0.02,y:null});
      absoluteArrayNonLinear.push({x:i*0.02,y:null});
      if (i==0) {
        dataSet.push({x:0,y:100});
      } else if (i<6){
        dataSet.push({x:i*0.02,y:randomDataset1()});
      } else if (i==6){
        dataSet.push({x:i*0.02,y:20});
      } else {
        dataSet.push({x:i*0.02,y:randomDataset2()});
      }
    }
    correctArrayLinear = initializeCorrectArray(getCircleDataLinear());
    correctArrayNonLinear = initializeCorrectArray(getCircleDataNonLinear());
  }
  return dataSet;
}

function randomDataset1() {
  return Math.floor(Math.random() * 191) + 20;
}

function randomDataset2() {
  return Math.floor(Math.random() * 45) + 1;
}

//new diagram
function createDiagram(svgId, yScale, yAxis){
  diagram = d3.select('.snippet #'+svgId)
      .attr("class", "diagram")
      .attr("viewBox", [0, 0, width, height]).append('g')
      .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');

  xScale = d3.scaleLinear()
    .domain(d3.extent(getDataSet(), function(d) {
      return d.x;
    }))
    .range([0, width - padding.left - padding.right]);
  var xAxis = d3.axisBottom(xScale);

  diagram
    .append('g').attr('class', 'axis').attr('transform', 'translate(0,' + (height - padding.top - padding.bottom) + ')').call(xAxis)
    .append("text").attr("x", width-(2*padding.right)).attr("y", "40").attr("fill", "#002557").text("ms");

  diagram
    .append('g').attr('class', 'axis').call(yAxis)
    .append("text").attr("x", "10").attr("y", "-20").attr("fill", "#002557").text("mV");

  var line = d3.line().curve(d3.curveCatmullRom)
    .x(function(d) {
      return xScale(d.x);
    })
    .y(function(d) {
      return yScale(d.y);
    });

  var xAxisGrid = xAxis.ticks(9)
    .tickSize(-height, 0, 0)
    .tickFormat("");
  var yAxisGrid = yAxis.ticks(7)
    .tickSize(-width, 0, 0)
    .tickFormat("");

  diagram.append("g").attr("class", "x grid").attr("transform", "translate(0," + height + ")").call(xAxisGrid);
  diagram.append("g").attr("class", "y grid").call(yAxisGrid);
  diagram.append('path').attr('class', 'svgCurve').attr('d', line(getDataSet()));

  return diagram;
}

function getCircleColumnByX(xValue, circleData) {
  return circleData.filter(point => point['x'] == xValue);
}

function setCircleColumnGreyByX(x, circleData, circles) {
  getCircleColumnByX(x, circleData).forEach((point) => {
    setRedOnCircleData(Object.values(point)[0], Object.values(point)[1], false, circleData, circles);
  });
}

function updateCircleDataView(circles) {
  circles.filter(function(d) {
    return d.isRed == true;
  }).style("fill", "red");
  circles.filter(function(d) {
    return d.isRed == false;
  }).style("fill", "grey");
}

function setRedOnCircleData(x, y, boolRed, circleData, circles) {
  circleData.forEach((point) => {
    if (Object.values(point)[0] == x && Object.values(point)[1] == y) {
      point.isRed = boolRed;
    }
  });
  updateCircleDataView(circles);
}

function getRedCircleInColumn(array) {
  return array.find(point => point.isRed == true);
}

function isRedCircleInColumn(array) {
  let bool = false;
  array.forEach((point) => {
    if (point.isRed == true) {
      bool = true;
      return false;
    }
  });
  return bool;
}

function initializeCorrectArray(circleData) {
  correctArray = [];
  for (var i = 0; i <= 0.18; i += 0.02) {
    let min = 210;
    let coordinate;
    i = parseFloat(i.toFixed(2));
    getCircleColumnByX(i, circleData).forEach((point) => {
      if (min > Math.abs(point.y - getDataSet().find(point2 => point2.x == i).y)) {
        min = Math.abs(point.y - getDataSet().find(point2 => point2.x == i).y);
        coordinate = point.y
      }
    });
    correctArray.push({
      x: i,
      y: coordinate,
      isRed: true
    });
  }
  return correctArray;
}

function getAllRedCircle(circleData) {
  return circleData.filter(point => point.isRed == true);
}

function checkSolution(array, circleData) {
  var hash = {};
  array.forEach(point => {
    hash[[point.x, point.y]] = true;
  });
  getAllRedCircle(circleData).forEach(point => {
    hash[[point.x, point.y]] = true;
  });
  if (Object.keys(hash).length == 10 && getAllRedCircle(circleData).length == 10) {
    return true;
  } else {
    booLinear = true;
    return false
  }
}

function updateArrays(absoluteArray, circleData, idPrefix) {
  var arraynumR = [];
  absoluteArray.forEach((point) => {
    if (isRedCircleInColumn(getCircleColumnByX(Object.values(point)[0], circleData))) {
      // TODO: hier berechnungen machen
      point.y = getRedCircleInColumn(getCircleColumnByX(Object.values(point)[0], circleData)).y;
      if (getDataSet().find(val => val.x === point.x).y) {
        var numberA = Math.abs(getDataSet().find(val => val.x === point.x).y - point.y)
        document.getElementById(idPrefix+'Absolute' + point.x).innerHTML = numberA;
        var numberR = Math.floor((numberA / getDataSet().find(val => val.x === point.x).y) * 100);
        document.getElementById(idPrefix+'Relative' + point.x).innerHTML = numberR + "%";
        // add also to "Auswertung" page
        document.getElementById(idPrefix + point.x).innerHTML = numberR + "%";
        arraynumR.push(numberR);
      }
    }
  });
  var sum =0;
  var average = 0;
  for(var j=0; j< arraynumR.length; j++){
    sum = sum+arraynumR[j];
    average = Math.round(sum/arraynumR.length);
  }
  document.getElementById(idPrefix+"Average").innerHTML = average+"%";
}

function drawResultLine(diagram, yScale, correctArray, color) {
  var correctline = d3.line().curve(d3.curveStep)
    .x(function(d) {
      return xScale(d.x);
    })
    .y(function(d) {
      return yScale(d.y);
    });
  var lineGraph = diagram.append("path")
    .attr("d", correctline(correctArray))
    .attr("fill", "none")
    .attr("stroke", color)
    .attr("stroke-width", "3px");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++ Task 3 ++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

function getCircleDataLinear(){
  if (circleDataLinear == undefined) {
    circleDataLinear = [];
    for (var xValue = 0; xValue <= 0.18; xValue += 0.02) {
      for (var yValue = 210; yValue >= 0; yValue -= 30) {
        circleDataLinear.push({
          x: parseFloat(xValue.toFixed(2)),
          y: yValue,
          isRed: false
        });
      }
    }
  }
  return circleDataLinear;
}

function validateTask3(showSolution){
  $('#linearErrorMessage').hide();
  if (showSolution) {
    drawResultLine(diagramLinear, yScaleLinear, correctArrayLinear, "red");
    $('#snippet-linearQuantisation').find('.task').hide();
    $('#snippet-linearQuantisation').find('.solution').show();
    correctArrayLinear.forEach((item) => {
      setRedOnCircleData(item.x,item.y,true,getCircleDataLinear(),circlesLinear);
      updateArrays(absoluteArrayLinear, getCircleDataLinear(), "linear");
    });
  }
  if (checkSolution(correctArrayLinear, getCircleDataLinear())) {
    $('#snippet-linearQuantisation').find('.correctAnswer').show();
    $('#snippet-linearQuantisation').find('.task').hide();
    $('#snippet-linearQuantisation').find('.solution').show();
    drawResultLine(diagramLinear, yScaleLinear, correctArrayLinear, "red");
  } else {
    $('#linearErrorMessage').show();
    $('#snippet-linearQuantisation').find('.btn-solution').show();
  }
  $('.validation').show();
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++ Task 4 ++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++

function getCircleDataNonLinear(){
  if (circleDataNonLinear == undefined) {
    circleDataNonLinear = [];
    let yValues = [0, 2, 5, 9, 14, 20, 28, 40];
    for (var xValue = 0; xValue <= 0.18; xValue += 0.02) {
      for (var i = 0; i < yValues.length; i++) {
        circleDataNonLinear.push({
          x: parseFloat(xValue.toFixed(2)),
          y: (5 * yValues[i]),
          isRed: false
        });
      }
    }
  }
  return circleDataNonLinear;
}

function validateTask4(showSolution){
  $('#nonlinearErrorMessage').hide();
  if (showSolution) {
    drawResultLine(diagramNonLinear, yScaleNonLinear, correctArrayNonLinear, "blue");
    $('#snippet-nonlinearQuantisation').find('.task').hide();
    $('#snippet-nonlinearQuantisation').find('.solution').show();
    correctArrayNonLinear.forEach((item) => {
      setRedOnCircleData(item.x,item.y,true,getCircleDataNonLinear(),circlesNonLinear);
      updateArrays(absoluteArrayNonLinear, getCircleDataNonLinear(), "nonLinear");
    });
  }
  if (checkSolution(correctArrayNonLinear, getCircleDataNonLinear())) {
    $('#snippet-nonlinearQuantisation').find('.correctAnswer').show();
    $('#snippet-nonlinearQuantisation').find('.task').hide();
    $('#snippet-nonlinearQuantisation').find('.solution').show();
    drawResultLine(diagramNonLinear, yScaleNonLinear, correctArrayNonLinear, "blue");
  } else {
    $('#nonlinearErrorMessage').show();
    $('#snippet-nonlinearQuantisation').find('.btn-solution').show();
  }
  $('.validation').show();
}

document.getElementById("sidebarIntroduction").style.color = "#ff3311";
document.getElementById("sidebarResolution").style.display = "none";
document.getElementById("sidebarSamplingFrequency").style.display = "none";
document.getElementById("sidebarStoragefrequency").style.display = "none";
document.getElementById("sidebarLinear").style.display = "none";
document.getElementById("sidebarNonlinear").style.display = "none";
document.getElementById("sidebarEvaluation").style.display = "none";
document.getElementById('resolution1').style.display = "none";
document.getElementById('errorMessageResolution1_1').style.display = "none";
document.getElementById('errorMessageResolution1_2').style.display = "none";
document.querySelector('.btnShowCorrectAnswer').style.display = "none";
document.getElementById('answerExplanationResolution1_1').style.display = "none";
document.getElementById('answerExplanationResolution1_2').style.display = "none";
document.querySelector('.btnsamplingFrequency2').style.display = "none";
document.getElementById('answerIsCorrectSampling').style.display = "none";
document.getElementById('resolution2').style.display = 'none';
document.getElementById('errorMessageResolution2_1').style.display = 'none';
document.getElementById('errorMessageResolution2_2').style.display = 'none';
document.getElementById('answerIsCorrectStorage').style.display = 'none';
document.getElementById('btnShowCorrectAnswerStorage').style.display = 'none';
document.getElementById('answerExplanationStorage').style.display = 'none';
document.querySelector('.btnContinueLinear').style.display = "none";
document.getElementById('linearQuantisation').style.display = 'none';
document.getElementById('nonlinearQuantisation').style.display = 'none';
document.getElementById('linearTaskEnd').style.display = 'none';
document.getElementById('nonlinearTaskEnd').style.display = 'none';
document.getElementById('evaluation').style.display = 'none';


var randomNumber = Math.round(Math.random() * 5000) + 18000;
var correctAnswer = randomNumber * 2;

var randomSecond = Math.round(Math.random() * 5) + 5;
var randomStorage = Math.round(Math.random() * 400) + 100;
var samples = 44000 * randomSecond;
var availableStorage = randomStorage * 8192;
var storageAnswer = Math.floor(availableStorage / samples);
var storage_Byte = randomStorage * 1024;
var storage_bit = storage_Byte * 8;


function btnResolution() {
  document.getElementById("sidebarResolution").style.display = "block";
  document.getElementById("placeholderResolution").style.display = "none";
  document.getElementById("sidebarResolution").style.color = "#ff3311";
  document.getElementById("sidebarSamplingFrequency").style.display = "block";
  document.querySelector("#placeholderSamplingFrequency").style.display = "none";
  document.getElementById("sidebarSamplingFrequency").style.color = "#ff3311";
  document.getElementById("sidebarIntroduction").style.color = "#212529";
  document.getElementById("sidebarStoragefrequency").style.color = "#212529";
  document.getElementById("sidebarLinear").style.color = "#212529";
  document.getElementById("sidebarNonlinear").style.color = "#212529";
  document.getElementById("sidebarEvaluation").style.color = "#212529";
  document.getElementById("intro").style.display = "none";
  document.getElementById('resolution1').style.display = "block";
  randomFrequency();
  document.getElementById('resolution2').style.display = 'none';
  document.getElementById('linearQuantisation').style.display = 'none';
  document.getElementById('nonlinearQuantisation').style.display = 'none';
  document.getElementById('evaluation').style.display = 'none';
}

function btnIntroduction() {
  document.getElementById("intro").style.display = "block";
  document.getElementById("sidebarIntroduction").style.color = "#ff3311";
  document.getElementById("sidebarResolution").style.color = "#212529";
  document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
  document.getElementById("sidebarStoragefrequency").style.color = "#212529";
  document.getElementById("sidebarLinear").style.color = "#212529";
  document.getElementById("sidebarNonlinear").style.color = "#212529";
  document.getElementById("sidebarEvaluation").style.color = "#212529";
  document.getElementById("resolution1").style.display = "none";
  document.getElementById('resolution2').style.display = 'none';
  document.getElementById('linearQuantisation').style.display = 'none';
  document.getElementById('nonlinearQuantisation').style.display = 'none';
  document.getElementById('evaluation').style.display = 'none';
}

function btnSkipIntro() {
  document.getElementById("sidebarLinear").style.display = "block";
  document.getElementById("placeholderLinear").style.display = "none";
  document.getElementById("sidebarLinear").style.color = "#ff3311";
  document.getElementById("sidebarIntroduction").style.color = "#212529";
  document.getElementById("sidebarStoragefrequency").style.color = "#212529";
  document.getElementById("sidebarResolution").style.color = "#212529";
  document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
  document.getElementById("sidebarNonlinear").style.color = "#212529";
  document.getElementById("sidebarEvaluation").style.color = "#212529";
  document.getElementById("resolution2").style.display = "none";
  document.getElementById('resolution1').style.display = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('linearQuantisation').style.display = 'block';
  document.getElementById("sidebarStoragefrequency").style.display = "block";
  document.getElementById("placeholderStoragefrequency").style.display = "none";
  document.getElementById("sidebarResolution").style.display = "block";
  document.getElementById("placeholderResolution").style.display = "none";
  document.getElementById("sidebarSamplingFrequency").style.display = "block";
  document.querySelector("#placeholderSamplingFrequency").style.display = "none";
  document.getElementById('nonlinearQuantisation').style.display = 'none';
  document.getElementById('linearErrorMessage').style.display = 'none';

  document.getElementById('evaluation').style.display = 'none';
  document.getElementById('btnShowCorrectAnswerLinear').style.display = 'none';

}

function randomFrequency() {
  document.getElementById('limitFrequency').innerHTML = randomNumber;
}

function btnCheckAnswer() {
  let inputAnswer = document.forms["inputFieldResolution1"]["samplingFrequency"].value;

  document.getElementById('errorMessageResolution1_1').style.display = "none";
  document.getElementById('errorMessageResolution1_2').style.display = "none";
  document.querySelector('.btnShowCorrectAnswer').style.display = "none";

  if (inputAnswer == "") {
    document.getElementById("errorMessageResolution1_1").style.display = "block";
    document.forms["inputFieldResolution1"]["samplingFrequency"].value = "";
  } else if (inputAnswer == correctAnswer) {
    document.getElementById("answerIsCorrectSampling").style.display = "block";
    btnShowCorrectAnswerResolution1();
  } else {
    document.getElementById('inputSamplingFrequency').innerHTML = inputAnswer;
    document.getElementById("errorMessageResolution1_2").style.display = "block";
    document.querySelector('.btnShowCorrectAnswer').style.display = "block";
    document.forms["inputFieldResolution1"]["samplingFrequency"].value = "";
  }
}

function btnShowCorrectAnswerResolution1() {
  document.getElementById('errorMessageResolution1_1').style.display = "none";
  document.getElementById('errorMessageResolution1_2').style.display = "none";
  document.querySelector('.taskResolution1').style.display = "none";
  document.querySelector('.formResolution1').style.display = "none";
  document.getElementById('answerExplanationResolution1_1').style.display = "block";
  document.getElementById('answerExplanationResolution1_2').style.display = "block";
  document.getElementById('answerLimitFrequency').innerHTML = randomNumber;
  document.getElementById('answerSamplingFrequency').innerHTML = correctAnswer;
  document.querySelector('.btnsamplingFrequency2').style.display = "block";
  document.querySelector('.btnsamplingFrequency').style.display = "none";
  document.getElementById('linearQuantisation').style.display = 'none';
  document.getElementById('nonlinearQuantisation').style.display = 'none';
  document.getElementById('evaluation').style.display = 'none';
}

function btnStoragefrequency() {
  document.getElementById("sidebarStoragefrequency").style.display = "block";
  document.getElementById("placeholderStoragefrequency").style.display = "none";
  document.getElementById("sidebarStoragefrequency").style.color = "#ff3311";
  document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
  document.getElementById("sidebarIntroduction").style.color = "#212529";
  document.getElementById("sidebarResolution").style.color = "#ff3311";
  document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
  document.getElementById("sidebarLinear").style.color = "#212529";
  document.getElementById("sidebarNonlinear").style.color = "#212529";
  document.getElementById("sidebarEvaluation").style.color = "#212529";
  document.getElementById('resolution1').style.display = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('resolution2').style.display = 'block';
  document.getElementById('limitSeconds').innerHTML = randomSecond;
  document.getElementById('limitStorage').innerHTML = randomStorage;
  document.getElementById('linearQuantisation').style.display = 'none';
  document.getElementById('nonlinearQuantisation').style.display = 'none';
  document.getElementById('evaluation').style.display = 'none';
}

function btnCheckAnswerStorage() {
  let inputStorage = document.getElementById('storageAnswer').value;

  if (inputStorage == '') {
    document.getElementById('errorMessageResolution2_1').style.display = 'block';
    document.getElementById('storageAnswer').value = '';
  } else if (inputStorage == storageAnswer) {
    document.getElementById('answerIsCorrectStorage').style.display = 'block';
    document.getElementById('answerExplanationStorage').style.display = 'block';
    document.getElementById('Storage_task').style.display = 'none';
    document.getElementById('samples').innerHTML = samples;
    document.getElementById("secondsCorrect").innerHTML = randomSecond;
    document.getElementById("secondsCorrect2").innerHTML = randomSecond;
    document.getElementById("storage").innerHTML = randomStorage;
    document.getElementById("storage2").innerHTML = randomStorage;
    document.getElementById("storage3_Byte").innerHTML = storage_Byte;
    document.getElementById("storage3_Byte2").innerHTML = storage_Byte;
    document.getElementById("storage4_Bit").innerHTML = storage_bit;
    document.getElementById('samples2').innerHTML = samples;
    document.getElementById("storage4_Bit2").innerHTML = storage_bit;
    document.getElementById("storage4_Bit3").innerHTML = storage_bit;
    document.getElementById('samples3').innerHTML = samples;
    document.getElementById('answerStorage').innerHTML = storageAnswer;
    document.querySelector('.btnContinueLinear').style.display = "block";
    document.querySelector('.btnContinueStorage').style.display = "none";

  } else {

    document.getElementById('errorMessageResolution2_2').style.display = 'block';
    document.getElementById('storageInput').innerHTML = inputStorage;
    document.getElementById('storageAnswer').value = '';
    document.getElementById('btnShowCorrectAnswerStorage').style.display = 'block';



  }
}

function btnShowCorrectAnswerResolution2() {
  document.getElementById('errorMessageResolution2_1').style.display = "none";
  document.getElementById('errorMessageResolution2_2').style.display = "none";
  document.querySelector('.taskResolution2').style.display = "none";
  document.querySelector('.formResolution2').style.display = "none";
  document.getElementById('answerExplanationStorage').style.display = "block";
  document.getElementById('samples').innerHTML = samples;
  document.getElementById("secondsCorrect").innerHTML = randomSecond;
  document.getElementById("secondsCorrect2").innerHTML = randomSecond;
  document.getElementById("storage").innerHTML = randomStorage;
  document.getElementById("storage2").innerHTML = randomStorage;
  document.getElementById("storage3_Byte").innerHTML = storage_Byte;
  document.getElementById("storage3_Byte2").innerHTML = storage_Byte;
  document.getElementById("storage4_Bit").innerHTML = storage_bit;
  document.getElementById('samples2').innerHTML = samples;
  document.getElementById("storage4_Bit2").innerHTML = storage_bit;
  document.getElementById("storage4_Bit3").innerHTML = storage_bit;
  document.getElementById('samples3').innerHTML = samples;
  document.getElementById('answerStorage').innerHTML = storageAnswer;
  document.querySelector('.btnContinueLinear').style.display = "block";
  document.getElementById('btnShowCorrectAnswerStorage').style.display = "none";
  document.querySelector('.btnContinueStorage').style.display = "none";
  document.getElementById('linearQuantisation').style.display = 'none';
  document.getElementById('nonlinearQuantisation').style.display = 'none';
  document.getElementById('evaluation').style.display = 'none';
}

function btnContinueLinear() {
  document.getElementById("sidebarLinear").style.display = "block";
  document.getElementById("placeholderLinear").style.display = "none";
  document.getElementById("sidebarLinear").style.color = "#ff3311";
  document.getElementById("sidebarIntroduction").style.color = "#212529";
  document.getElementById("sidebarStoragefrequency").style.color = "#212529";
  document.getElementById("sidebarResolution").style.color = "#212529";
  document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
  document.getElementById("sidebarNonlinear").style.color = "#212529";
  document.getElementById("sidebarEvaluation").style.color = "#212529";
  document.getElementById("resolution2").style.display = "none";
  document.getElementById('resolution1').style.display = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('linearQuantisation').style.display = 'block';
  document.getElementById('nonlinearQuantisation').style.display = 'none';
  document.getElementById('linearErrorMessage').style.display = 'none';

  document.getElementById('evaluation').style.display = 'none';

  document.getElementById('btnShowCorrectAnswerLinear').style.display = 'none';

}
var dataset = [{
    x: 0,
    y: 100
  }, {
    x: 0.02,
    y: randomDataset1()
  },
  {
    x: 0.04,
    y: randomDataset1()
  }, {
    x: 0.06,
    y: randomDataset1()
  },
  {
    x: 0.08,
    y: randomDataset1()
  }, {
    x: 0.1,
    y: randomDataset1()
  },
  {
    x: 0.12,
    y: 20
  }, {
    x: 0.14,
    y: randomDataset2()
  },
  {
    x: 0.16,
    y: randomDataset2()
  }, {
    x: 0.18,
    y: randomDataset2()
  }
];
function diagramLinear(){

}
  var width = 400,
    height = 360;
  var padding = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  };
  var main = d3.select('.container #linearSVG').append('g')
    .classed('main', true)
    .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');

  var circleData = [];

  for (var xValue = 0; xValue <= 0.18; xValue += 0.02) {
    for (var yValue = 210; yValue >= 0; yValue -= 30) {
      circleData.push({
        x: parseFloat(xValue.toFixed(2)),
        y: yValue,
        isRed: false
      })
    }
  }
  var xScale = d3.scale.linear()
    .domain(d3.extent(dataset, function(d) {
      return d.x;
    }))
    .range([0, width - padding.left - padding.right]);
  var yScale = d3.scale.linear()
    .domain([0, 210])
    .range([height - padding.top - padding.bottom, 0]);
  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom');
  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left')
    .tickValues([30, 60, 90, 120, 150, 180, 210]);
  main.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0,' + (height - padding.top - padding.bottom) + ')')
    .call(xAxis)
    .append("text")
    .attr("x", "335")
    .attr("y", "30")
    .attr("fill", "#002557")
    .text("ms");

  main.append('g')
    .attr('class', 'axis')
    .call(yAxis)
    .append("text")
    .attr("x", "-30")
    .attr("y", "-20")
    .attr("fill", "#002557")
    .text("mV");
  var line = d3.svg.line()
    .x(function(d) {
      return xScale(d.x)
    })
    .y(function(d) {
      return yScale(d.y);
    })
    .interpolate('linear');
  main.append('path')
    .attr('class', 'line')
    .attr('d', line(dataset));
  var yAxisGrid = yAxis.ticks(7)
    .tickSize((width - padding.left - padding.right), 0, 0)
    .tickFormat("")
    .orient("right");
  var xAxisGrid = xAxis.ticks(9)
    .tickSize(-((height - padding.top - padding.bottom)), 0, 0)
    .tickFormat("")
    .orient("top");
  main.append("g")
    .classed("y", true)
    .classed("grid", true)
    .call(yAxisGrid)
  main.append("g")
    .classed('x', true)
    .classed('grid', true)
    .call(xAxisGrid);
  var circles = main.selectAll("circle")
    .data(circleData)
    .enter()
    .append("circle");
  var circleAttributes = circles
    .attr('class', 'click-circle')
    .attr("cx", function(d) {
      return xScale(d.x);
    })
    .attr("cy", function(d) {
      return yScale(d.y);
    })
    .attr("r", "4px")
    .style("fill", "grey")
    .on("click", function(point) {
      setCircleColumnGreyByX(Object.values(point)[0]);
      setRedOnCircleData(Object.values(point)[0], Object.values(point)[1], true);
      updateArrays();
    })



  function getCircleColumnByX(xValue) {
    return circleData.filter(point => point['x'] == xValue);
  }

  function setCircleColumnGreyByX(x) {
    getCircleColumnByX(x).forEach((point) => {
      setRedOnCircleData(Object.values(point)[0], Object.values(point)[1], false);
    });
  }

  function updateCircleDataView() {
    circles.filter(function(d) {
      return d['isRed'] == true;
    }).style("fill", "red");
    circles.filter(function(d) {
      return d['isRed'] == false;
    }).style("fill", "grey");

  }

  function setRedOnCircleData(x, y, boolRed) {
    circleData.forEach((point) => {
      if (Object.values(point)[0] == x && Object.values(point)[1] == y) {
        point['isRed'] = boolRed;
      }
    });
    updateCircleDataView();
  }

  function getRedCircleInColumn(array) {
    return array.find(point => point['isRed'] == true);
  }

  function isRedCircleInColumn(array) {
    let bool = false;
    array.forEach((point) => {
      if (point['isRed'] == true) {
        bool = true;
        return false;
      }
    });
    return bool;
  }
  var absoluteArray = [{
      x: 0.00,
      y: null
    },
    {
      x: 0.02,
      y: null
    },
    {
      x: 0.04,
      y: null
    },
    {
      x: 0.06,
      y: null
    },
    {
      x: 0.08,
      y: null
    },
    {
      x: 0.10,
      y: null
    },
    {
      x: 0.12,
      y: null
    },
    {
      x: 0.14,
      y: null
    },
    {
      x: 0.16,
      y: null
    },
    {
      x: 0.18,
      y: null
    }
  ];

  function updateArrays() {
    var arraynumR = [];
    absoluteArray.forEach((point) => {
      if (isRedCircleInColumn(getCircleColumnByX(Object.values(point)[0]))) {
        // TODO: hier berechnungen machen
        point['y'] = getRedCircleInColumn(getCircleColumnByX(Object.values(point)[0]))['y'];
        if (dataset.find(val => val.x === point.x).y) {
          var numberA = Math.abs(dataset.find(val => val.x === point.x).y - point.y)
          document.getElementById('linearAbsolute' + point.x).innerHTML = numberA;
          var numberR = Math.floor((numberA / dataset.find(val => val.x === point.x).y) * 100);
          arraynumR.push(numberR);
          var sum =0;
          var average = 0;
          for(var j=0; j< arraynumR.length; j++){
            sum = sum+arraynumR[j];
            average = Math.round(sum/arraynumR.length);
          }
          console.log("average: "+ average);
          document.getElementById('linearRelative' + point.x).innerHTML = numberR + "%";
          document.getElementById('Linear' + point.x).innerHTML = numberR + "%";
          document.getElementById("averageLinear").innerHTML = average+"%";
        }
      }
    });
  }
  var correctArray = [];
  initializeCorrectArray();

  function initializeCorrectArray() {
    for (var i = 0; i <= 0.18; i += 0.02) {

      let min = 210
      let coordinate;
      i = parseFloat(i.toFixed(2))
      getCircleColumnByX(i).forEach((point) => {
        if (min > Math.abs(point['y'] - dataset.find(point2 => point2['x'] == i)['y'])) {
          min = Math.abs(point['y'] - dataset.find(point2 => point2['x'] == i)['y']);
          coordinate = point['y']
        }
      });
      correctArray.push({
        x: i,
        y: coordinate,
        isRed: true
      });
    }
  }

  function getAllRedCircle() {
    return circleData.filter(point => point['isRed'] == true)
  }

  function checkSolution(array) {
    var hash = {}
    array.forEach(point => {
      hash[[point['x'], point['y']]] = true;
    });
    getAllRedCircle().forEach(point => {
      hash[[point['x'], point['y']]] = true;
    });

    if (Object.keys(hash).length == 10 && getAllRedCircle().length == 10) {
      return true;
    } else {
      booLinear = true;
      return false
    }
  }


  function drawLineLinear() {
    var correctline = d3.svg.line()
      .x(function(d) {
        return d.x;
      })
      .y(function(d) {
        return d.y;
      })
      .interpolate('linear');
    var lineArray = [{
        "x": 0,
        "y": yScale(correctArray[0].y)
      }, {
        "x": 17.75,
        "y": yScale(correctArray[0].y)
      }, {
        "x": 17.75,
        "y": yScale(correctArray[1].y)
      },
      {
        "x": 35.5,
        "y": yScale(correctArray[1].y)
      }, {
        "x": 53.25,
        "y": yScale(correctArray[1].y)
      }, {
        "x": 53.25,
        "y": yScale(correctArray[2].y)
      },
      {
        "x": 71,
        "y": yScale(correctArray[2].y)
      }, {
        "x": 88.75,
        "y": yScale(correctArray[2].y)
      }, {
        "x": 88.75,
        "y": yScale(correctArray[3].y)
      },
      {
        "x": 106.5,
        "y": yScale(correctArray[3].y)
      }, {
        "x": 124.25,
        "y": yScale(correctArray[3].y)
      }, {
        "x": 124.25,
        "y": yScale(correctArray[4].y)
      },
      {
        "x": 142,
        "y": yScale(correctArray[4].y)
      }, {
        "x": 159.75,
        "y": yScale(correctArray[4].y)
      }, {
        "x": 159.75,
        "y": yScale(correctArray[5].y)
      },
      {
        "x": 177.5,
        "y": yScale(correctArray[5].y)
      }, {
        "x": 195.25,
        "y": yScale(correctArray[5].y)
      }, {
        "x": 195.25,
        "y": yScale(correctArray[6].y)
      },
      {
        "x": 213,
        "y": yScale(correctArray[6].y)
      }, {
        "x": 230.75,
        "y": yScale(correctArray[6].y)
      }, {
        "x": 230.75,
        "y": yScale(correctArray[7].y)
      },
      {
        "x": 248.5,
        "y": yScale(correctArray[7].y)
      }, {
        "x": 266.25,
        "y": yScale(correctArray[7].y)
      }, {
        "x": 266.25,
        "y": yScale(correctArray[8].y)
      },
      {
        "x": 284,
        "y": yScale(correctArray[8].y)
      }, {
        "x": 301.75,
        "y": yScale(correctArray[8].y)
      }, {
        "x": 301.75,
        "y": yScale(correctArray[9].y)
      },
      {
        "x": 319.5,
        "y": yScale(correctArray[9].y)
      }
    ];
    var lineGraph = main.append("path")
      .attr("d", correctline(lineArray))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", "3px");
      var lineGraph = eval.append("path")
      .attr("d", correctline(lineArray))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", "3px");
  }




function randomDataset1() {
  return Math.floor(Math.random() * 191) + 20;
}

function randomDataset2() {
  return Math.floor(Math.random() * 45) + 1;
}

function btnContinueNonLinear() {
  document.getElementById('nonlinearQuantisation').style.display = 'block';
  document.getElementById("nonlinearTask").style.display = "block";
  document.getElementById("nonlinearText1").style.display = "block";
  document.getElementById("nonlinearText2").style.display = "block";
  document.getElementById("sidebarNonlinear").style.display = "block";
  document.getElementById("placeholderNonlinear").style.display = "none";
  document.getElementById("sidebarNonlinear").style.color = "#ff3311";
  document.getElementById("sidebarLinear").style.color = "#212529";
  document.getElementById("sidebarIntroduction").style.color = "#212529";
  document.getElementById("sidebarStoragefrequency").style.color = "#212529";
  document.getElementById("sidebarResolution").style.color = "#212529";
  document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
  document.getElementById("sidebarEvaluation").style.color = "#212529";
  document.getElementById("resolution2").style.display = "none";
  document.getElementById('resolution1').style.display = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('linearQuantisation').style.display = 'none';

  document.getElementById('evaluation').style.display = 'none';

  document.getElementById('nonlinearErrorMessage').style.display = 'none';
  document.getElementById('btnShowCorrectAnswerNoninear').style.display = 'none';
  document.getElementById('nonlinearTaskEnd').style.display = 'none';

  diagramNonlinear();
}

var circleDataNonLinear = [];

var yValues = [0, 2, 5, 9, 14, 20, 28, 40];

for (var xValue = 0; xValue <= 0.18; xValue += 0.02) {
  for (var i = 0; i < yValues.length; i++) {
    circleDataNonLinear.push({
      x: parseFloat(xValue.toFixed(2)),
      y: (5 * yValues[i]),
      isRed: false
    })
  }
}
var graph = d3.select('.container #nonlinear').append('g')
    .classed('graph', true)
    .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');
function diagramNonlinear() {
  var width = 400,
    height = 360;
  var padding = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  };

  var xScale = d3.scale.linear()
    .domain(d3.extent(dataset, function(d) {
      return d.x;
    }))
    .range([0, width - padding.left - padding.right]);
  var yScale = d3.scale.linear()
    .domain([0, 210])
    .range([height - padding.top - padding.bottom, 0]);
  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom');
  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left')
    .tickValues([10, 25, 45, 70, 100, 140, 200]);
  graph.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0,' + (height - padding.top - padding.bottom) + ')')
    .call(xAxis)
    .append("text")
    .attr("x", "335")
    .attr("y", "30")
    .attr("fill", "#002557")
    .text("ms");
  graph.append('g')
    .attr('class', 'axis')
    .call(yAxis)
    .append("text")
    .attr("x", "-30")
    .attr("y", "-20")
    .attr("fill", "#002557")
    .text("mV");
  var line = d3.svg.line()
    .x(function(d) {
      return xScale(d.x)
    })
    .y(function(d) {
      return yScale(d.y);
    })
    .interpolate('linear');
  graph.append('path')
    .attr('class', 'line')
    .attr('d', line(dataset));
  var yAxisGrid = yAxis.ticks(7)
    .tickSize((width - padding.left - padding.right), 0, 0)
    .tickFormat("")
    .orient("right");
  var xAxisGrid = xAxis.ticks(9)
    .tickSize(-((height - padding.top - padding.bottom)), 0, 0)
    .tickFormat("")
    .orient("top");
  graph.append("g")
    .classed("y", true)
    .classed("grid", true)
    .call(yAxisGrid)
  graph.append("g")
    .classed('x', true)
    .classed('grid', true)
    .call(xAxisGrid);
  var circles = graph.selectAll("circle")
    .data(circleDataNonLinear)
    .enter()
    .append("circle");
  var circleAttributes = circles
    .attr('class', 'click-circle')
    .attr("cx", function(d) {
      return xScale(d.x);
    })
    .attr("cy", function(d) {
      return yScale(d.y);
    })
    .attr("r", "4px")
    .style("fill", "grey")
    .on("click", function(point) {
      setCircleColumnGreyByX(Object.values(point)[0]);
      setRedOnCircleData(Object.values(point)[0], Object.values(point)[1], true);
      updateArrays();
      console.log(correctArrayNonlinear);
      console.log(nonlinearArray);
    })

  function getCircleColumnByX(xValue) {
    return circleDataNonLinear.filter(point => point['x'] == xValue);
  }

  function setCircleColumnGreyByX(x) {
    getCircleColumnByX(x).forEach((point) => {
      setRedOnCircleData(Object.values(point)[0], Object.values(point)[1], false);

    });
  }

  function updateCircleDataView() {
    circles.filter(function(d) {
      return d['isRed'] == true;
    }).style("fill", "#054faf");
    circles.filter(function(d) {
      return d['isRed'] == false;
    }).style("fill", "grey");

  }

  function setRedOnCircleData(x, y, boolRed) {
    circleDataNonLinear.forEach((point) => {
      if (Object.values(point)[0] == x && Object.values(point)[1] == y) {
        point['isRed'] = boolRed;
      }
    });
    updateCircleDataView();
  }

  function getRedCircleInColumn(array) {
    return array.find(point => point['isRed'] == true);
  }

  function isRedCircleInColumn(array) {
    let bool = false;
    array.forEach((point) => {
      if (point['isRed'] == true) {
        bool = true;
        return false;
      }
    });
    return bool;
  }
  var nonlinearArray = [{
      x: 0.00,
      y: null
    },
    {
      x: 0.02,
      y: null
    },
    {
      x: 0.04,
      y: null
    },
    {
      x: 0.06,
      y: null
    },
    {
      x: 0.08,
      y: null
    },
    {
      x: 0.10,
      y: null
    },
    {
      x: 0.12,
      y: null
    },
    {
      x: 0.14,
      y: null
    },
    {
      x: 0.16,
      y: null
    },
    {
      x: 0.18,
      y: null
    }
  ];

  function updateArrays() {
    var arraynumR = [];
    nonlinearArray.forEach((point) => {
      if (isRedCircleInColumn(getCircleColumnByX(Object.values(point)[0]))) {
        // TODO: hier berechnungen machen
        point['y'] = getRedCircleInColumn(getCircleColumnByX(Object.values(point)[0]))['y'];
        if (dataset.find(val => val.x === point.x).y) {
          var numberA = Math.abs(dataset.find(val => val.x === point.x).y - point.y)
          document.getElementById('linearAbsolute' + point.x).innerHTML = numberA;
          var numberR = Math.floor((numberA / dataset.find(val => val.x === point.x).y) * 100);
          arraynumR.push(numberR);
          var sum =0;
          var average = 0;
          for(var j=0; j< arraynumR.length; j++){
            sum = sum+arraynumR[j];
            average = Math.round(sum/arraynumR.length);
          }
          console.log("average: "+ average);
          document.getElementById('nonlinearRelative' + point.x).innerHTML = numberR + "%";
          document.getElementById('Nonlinear' + point.x).innerHTML = numberR + "%";
          document.getElementById("averageNonlinear").innerHTML = average+"%";
        }
      }
    });
  }
  var correctArrayNonlinear = [];
  initializeCorrectArray();

  function initializeCorrectArray() {
    for (var i = 0; i <= 0.18; i += 0.02) {

      let min = 210
      let coordinate;
      i = parseFloat(i.toFixed(2))
      getCircleColumnByX(i).forEach((point) => {
        if (min > Math.abs(point['y'] - dataset.find(point2 => point2['x'] == i)['y'])) {
          min = Math.abs(point['y'] - dataset.find(point2 => point2['x'] == i)['y']);
          coordinate = point['y']
        }
      });
      correctArrayNonlinear.push({
        x: i,
        y: coordinate,
        isRed: true
      });
    }
  }

  function getAllRedCircle() {
    return circleDataNonLinear.filter(point => point['isRed'] == true)
  }
}
function drawLineNonlinear() {
  var correctline = d3.svg.line()
    .x(function(d) {
      return d.x;
    })
    .y(function(d) {
      return d.y;
    })
    .interpolate('nonlinear');
  var lineArray = [{
      "x": 0,
      "y": yScale(correctArrayNonlinear[0].y)
    }, {
      "x": 17.75,
      "y": yScale(correctArrayNonlinear[0].y)
    }, {
      "x": 17.75,
      "y": yScale(correctArrayNonlinear[1].y)
    },
    {
      "x": 35.5,
      "y": yScale(correctArrayNonlinear[1].y)
    }, {
      "x": 53.25,
      "y": yScale(correctArrayNonlinear[1].y)
    }, {
      "x": 53.25,
      "y": yScale(correctArrayNonlinear[2].y)
    },
    {
      "x": 71,
      "y": yScale(correctArrayNonlinear[2].y)
    }, {
      "x": 88.75,
      "y": yScale(correctArrayNonlinear[2].y)
    }, {
      "x": 88.75,
      "y": yScale(correctArrayNonlinear[3].y)
    },
    {
      "x": 106.5,
      "y": yScale(correctArrayNonlinear[3].y)
    }, {
      "x": 124.25,
      "y": yScale(correctArrayNonlinear[3].y)
    }, {
      "x": 124.25,
      "y": yScale(correctArrayNonlinear[4].y)
    },
    {
      "x": 142,
      "y": yScale(correctArrayNonlinear[4].y)
    }, {
      "x": 159.75,
      "y": yScale(correctArrayNonlinear[4].y)
    }, {
      "x": 159.75,
      "y": yScale(correctArrayNonlinear[5].y)
    },
    {
      "x": 177.5,
      "y": yScale(correctArrayNonlinear[5].y)
    }, {
      "x": 195.25,
      "y": yScale(correctArrayNonlinear[5].y)
    }, {
      "x": 195.25,
      "y": yScale(correctArrayNonlinear[6].y)
    },
    {
      "x": 213,
      "y": yScale(correctArrayNonlinear[6].y)
    }, {
      "x": 230.75,
      "y": yScale(correctArrayNonlinear[6].y)
    }, {
      "x": 230.75,
      "y": yScale(correctArrayNonlinear[7].y)
    },
    {
      "x": 248.5,
      "y": yScale(correctArrayNonlinear[7].y)
    }, {
      "x": 266.25,
      "y": yScale(correctArrayNonlinear[7].y)
    }, {
      "x": 266.25,
      "y": yScale(correctArrayNonlinear[8].y)
    },
    {
      "x": 284,
      "y": yScale(correctArrayNonlinear[8].y)
    }, {
      "x": 301.75,
      "y": yScale(correctArrayNonlinear[8].y)
    }, {
      "x": 301.75,
      "y": yScale(correctArrayNonlinear[9].y)
    },
    {
      "x": 319.5,
      "y": yScale(correctArrayNonlinear[9].y)
    }
  ];
  var lineGraph = graph.append("path")
    .attr("d", correctline(lineArray))
    .attr("fill", "none")
    .attr("stroke", "#054faf")
    .attr("stroke-width", "3px");
    var lineGraph = eval.append("path")
    .attr("d", correctline(lineArray))
    .attr("fill", "none")
    .attr("stroke", "#054faf")
    .attr("stroke-width", "3px");
}



}


function btnShowCorrectAnswerLinear(){
  document.getElementById('linearTaskEnd').style.display = 'block';
  document.getElementById('linearTask').style.display = 'none';
  drawLineLinear();

}
function btnCheckLinear() {
  //TODO: quantisieren und arrays vergleichen
  if (checkSolution(correctArray)) {
    btnShowCorrectAnswerLinear();

  }else {
    document.getElementById('linearText1').style.display = 'none';
    document.getElementById('linearText2').style.display = 'none';
    document.getElementById('linearErrorMessage').style.display = 'block';
    document.getElementById('btnShowCorrectAnswerLinear').style.display = 'block';
  }
}

function btnCheckNonlinear(){
//TODO: quantisieren und arrays vergleichen
  document.getElementById('nonlinearTaskEnd').style.display = 'block';
  document.getElementById('nonlinearTask').style.display = 'none';
}

function showEvaluation(){
  document.getElementById('evaluation').style.display='block';
  document.getElementById('nonlinearTaskEnd').style.display = 'none';
  document.getElementById('nonlinearTask').style.display = 'none';
  document.getElementById('placeholderEvaluation').style.display = 'none';
  document.getElementById('sidebarEvaluation').style.display = "block";
  document.getElementById('sidebarEvaluation').style.color = "#ff3311";
  document.getElementById("sidebarLinear").style.color = "#212529";
  document.getElementById("sidebarIntroduction").style.color = "#212529";
  document.getElementById("sidebarStoragefrequency").style.color = "#212529";
  document.getElementById("sidebarResolution").style.color = "#212529";
  document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
  document.getElementById("sidebarNonlinear").style.color = "#212529";
  document.getElementById("nonlinearQuantisation").style.display = 'none';
  document.getElementById('intro').style.display = "none";
  document.getElementById('linearQuantisation').style.display = 'none';
  document.getElementById('nonlinearErrorMessage').style.display = 'none';
  document.getElementById('btnShowCorrectAnswerNoninear').style.display = 'none';
  document.getElementById('nonlinearTaskEnd').style.display = 'none';
  document.getElementById('evaluation').style.display = 'block';

}

var eval = d3.select('.container #elavuationDiagram').append('g')
    .classed('eval', true)
    .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');

  var xScale = d3.scale.linear()
    .domain(d3.extent(dataset, function(d) {
      return d.x;
    }))
    .range([0, width - padding.left - padding.right]);
  var yScale = d3.scale.linear()
    .domain([0, 210])
    .range([height - padding.top - padding.bottom, 0]);
  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom');
  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left')
    .tickValues([30, 60, 90, 120, 150, 180, 210]);
  eval.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(0,' + (height - padding.top - padding.bottom) + ')')
    .call(xAxis)
    .append("text")
    .attr("x", "335")
    .attr("y", "30")
    .attr("fill", "#002557")
    .text("ms");

  eval.append('g')
    .attr('class', 'axis')
    .call(yAxis)
    .append("text")
    .attr("x", "-30")
    .attr("y", "-20")
    .attr("fill", "#002557")
    .text("mV");
  var line = d3.svg.line()
    .x(function(d) {
      return xScale(d.x)
    })
    .y(function(d) {
      return yScale(d.y);
    })
    .interpolate('linear');
  eval.append('path')
    .attr('class', 'line')
    .attr('d', line(dataset));
  var yAxisGrid = yAxis.ticks(7)
    .tickSize((width - padding.left - padding.right), 0, 0)
    .tickFormat("")
    .orient("right");
  var xAxisGrid = xAxis.ticks(9)
    .tickSize(-((height - padding.top - padding.bottom)), 0, 0)
    .tickFormat("")
    .orient("top");
  eval.append("g")
    .classed("y", true)
    .classed("grid", true)
    .call(yAxisGrid)
  eval.append("g")
    .classed('x', true)
    .classed('grid', true)
    .call(xAxisGrid);

function fillTableEval(){
  for(var i=0; i<dataset.length;i++){
    var numberA = Math.abs(dataset[i].y-correctArray[i].y);
    document.getElementById('nonlinearAbsolute' + point.x).innerHTML = numberA;
  }
}
function btnRestart(){
  location.reload();
}

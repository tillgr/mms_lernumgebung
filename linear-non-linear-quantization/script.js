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
document.getElementById('resolution2').style.display ='none';
document.getElementById('errorMessageResolution2_1').style.display ='none';
document.getElementById('errorMessageResolution2_2').style.display ='none';
document.getElementById('answerIsCorrectStorage').style.display = 'none';
document.getElementById('btnShowCorrectAnswerStorage').style.display = 'none';
document.getElementById('answerExplanationStorage').style.display = 'none';
document.querySelector('.btnContinueLinear').style.display = "none";
document.getElementById('linearQuantisation').style.display = 'none';

var randomNumber = Math.round(Math.random() * 5000 ) + 18000;
var correctAnswer = randomNumber * 2;

var randomSecond = Math.round(Math.random() * 5) + 5;
var randomStorage = Math.round(Math.random() * 400) + 100;
var samples = 44000*randomSecond;
var availableStorage = randomStorage *8192;
var storageAnswer = Math.floor(availableStorage / samples);
var storage_Byte = randomStorage*1024;
var storage_bit = storage_Byte*8;

function btnResolution(){
    document.getElementById("sidebarResolution").style.display = "block";
    document.getElementById("placeholderResolution").style.display = "none";
    document.getElementById("sidebarResolution").style.color = "#ff3311";
    document.getElementById("sidebarSamplingFrequency").style.display = "block";
    document.querySelector("#placeholderSamplingFrequency").style.display = "none"
    document.getElementById("sidebarSamplingFrequency").style.color = "#ff3311";
    document.getElementById("sidebarIntroduction").style.color = "#212529";
    document.getElementById("sidebarStoragefrequency").style.color = "#212529";
    document.getElementById("sidebarLinear").style.color = "#212529";
    document.getElementById("sidebarNonlinear").style.color = "#212529";
    document.getElementById("sidebarEvaluation").style.color = "#212529";
    document.getElementById("intro").style.display="none";
    document.getElementById('resolution1').style.display = "block";
    randomFrequency();
    document.getElementById('resolution2').style.display ='none';
}

function btnIntroduction(){
    document.getElementById("intro").style.display="block";
    document.getElementById("sidebarIntroduction").style.color = "#ff3311";
    document.getElementById("sidebarResolution").style.color = "#212529";
    document.getElementById("sidebarSamplingFrequency").style.color = "#212529";
    document.getElementById("sidebarStoragefrequency").style.color = "#212529";
    document.getElementById("sidebarLinear").style.color = "#212529";
    document.getElementById("sidebarNonlinear").style.color = "#212529";
    document.getElementById("sidebarEvaluation").style.color = "#212529";
    document.getElementById("resolution1").style.display="none";
    document.getElementById('resolution2').style.display ='none';
}

function randomFrequency(){
    document.getElementById('limitFrequency').innerHTML = randomNumber;
}

function btnCheckAnswer(){
    let inputAnswer = document.forms["inputFieldResolution1"]["samplingFrequency"].value;

    document.getElementById('errorMessageResolution1_1').style.display = "none";
    document.getElementById('errorMessageResolution1_2').style.display = "none";
    document.querySelector('.btnShowCorrectAnswer').style.display = "none";

    if (inputAnswer == "") {
        document.getElementById("errorMessageResolution1_1").style.display = "block";
        document.forms["inputFieldResolution1"]["samplingFrequency"].value = "";
    }else if (inputAnswer == correctAnswer) {
        document.getElementById("answerIsCorrectSampling").style.display="block";
        btnShowCorrectAnswerResolution1();
    }else {
        document.getElementById('inputSamplingFrequency').innerHTML = inputAnswer;
        document.getElementById("errorMessageResolution1_2").style.display = "block";
        document.querySelector('.btnShowCorrectAnswer').style.display = "block";
        document.forms["inputFieldResolution1"]["samplingFrequency"].value = "";
    }
}

function btnShowCorrectAnswerResolution1(){
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
}
function btnStoragefrequency(){
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
    document.getElementById('resolution2').style.display ='block';
    document.getElementById('limitSeconds').innerHTML = randomSecond;
    document.getElementById('limitStorage').innerHTML = randomStorage;
}

function btnCheckAnswerStorage(){
    let inputStorage = document.getElementById('storageAnswer').value;

    if(inputStorage==''){
        document.getElementById('errorMessageResolution2_1').style.display ='block';
        document.getElementById('storageAnswer').value = '';
    }else if(inputStorage == storageAnswer){
        document.getElementById('answerIsCorrectStorage').style.display = 'block';
        document.getElementById('answerExplanationStorage').style.display = 'block';
        document.getElementById('Storage_task').style.display='none';
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

    }else{

        document.getElementById('errorMessageResolution2_2').style.display ='block';
        document.getElementById('storageInput').innerHTML = inputStorage;
        document.getElementById('storageAnswer').value='';
        document.getElementById('btnShowCorrectAnswerStorage').style.display = 'block';



    }
}

function btnShowCorrectAnswerResolution2(){
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
}

function btnContinueLinear(){
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
}
window.onload = function() {
    var width = 400, height = 360;
    var padding = { top: 40, right: 40, bottom: 40, left: 40 };
    var main = d3.select('.container svg').append('g')
            .classed('main', true)
            .attr('transform', "translate(" + padding.top + ',' + padding.left + ')');
    var dataset = [
        {x: 0, y: 97}, {x: 0.02, y: 150},
        {x: 0.04, y: 174}, {x: 0.06, y: 165},
        {x: 0.08, y: 77}, {x: 0.1, y: 46},
        {x: 0.12, y: 65}, {x: 0.14, y: 43},
        {x: 0.16, y: 14}, {x: 0.18, y: 4}
    ];
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
            .orient('left');
    main.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0,' + (height - padding.top - padding.bottom) + ')')
            .call(xAxis);
    main.append('g')
            .attr('class', 'axis')
            .call(yAxis);
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

}

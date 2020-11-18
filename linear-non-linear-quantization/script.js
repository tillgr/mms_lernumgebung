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

var randomNumber = Math.round(Math.random() * 5000 ) + 18000;
var correctAnswer = randomNumber * 2;

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
}

function randomFrequency(){
    document.getElementById('limitFrequency').innerHTML = randomNumber;
    document.getElementById('inputSamplingFrequency').innerHTML = randomNumber;
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
}

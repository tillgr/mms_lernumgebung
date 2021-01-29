var currentDataField = 0;
var currentTransformationType = 0;
var currentQuantisationType = 0;

$(document).ready(function() {
  resetSliders();
  // generate options for the dataset select
  for (const [key, value] of Object.entries(dataFields)) {
    let option = "";
    if (key == 0) {
      option = "<option value='" + key + "' selected>Signaldaten " + (parseInt(key) + 1) + "</option>";
    } else {
      option = "<option value='" + key + "'>Signaldaten " + (parseInt(key) + 1) + "</option>";
    }
    $('#chooseDataSet').append(option);
  }

  //generate options for transformationType select
  for (const [key, value] of Object.entries(transformationType)) {
    let option = "";
    if (key == 0) {
      option = "<option value='" + key + "' selected>" + value + "</option>";
    } else {
      option = "<option value='" + key + "'>" + value + "</option>";
    }
    $('#transformationType').append(option);
  }

  //generate options for quantisationType select
  for (const [key, value] of Object.entries(quantisationType)) {
    let option = "";
    if (key == 0) {
      option = "<option value='" + key + "' selected>" + value + "</option>";
    } else {
      option = "<option value='" + key + "'>" + value + "</option>";
    }
    $('#quantisationType').append(option);
  }

  // bind the dataset change listener
  $('#chooseDataSet').on("change", function() {
    currentDataField = this.value;
    renderSnippet();
  });
  // bind the transformationType change listener
  $('#transformationType').on("change", function() {
    currentTransformationType = this.value;
    createSliders();
    renderSnippet();
  });
  // bind the quantisationType change listener
  $('#quantisationType').on("change", function() {
    currentQuantisationType = this.value;
    renderSnippet();
  });
  // init view
  createSliders();
  drawDiagram();
  renderSnippet();
});

function renderSnippet() {
  drawLines();
  updateVisualization(dataFields[currentDataField], backtransformation(inputArrays[currentTransformationType], quantisationValues[currentQuantisationType]));
}

function resetSliders() {
  dctInputs = new Array(8).fill(0);
  dftInputs = new Array(16).fill(0);
  inputArrays = {
    0: dctInputs,
    1: dftInputs
  }
  createSliders();
  renderSnippet();
}

function autoSolve() {
  correctInputs = transformation(dataFields[currentDataField], quantisationValues[currentQuantisationType]);
  inputArrays[currentTransformationType] = correctInputs;
  createSliders();
  renderSnippet();
}

function createSliders() {
  $('#userControls').empty();
  if (currentTransformationType == 0) {
    $('#userControls').append("<div class='slider-group'></div>");
    let inputDiv = $('#userControls').find(".slider-group");
    $('#coInterval').text(" (-400 bis 400)");
    inputArrays[currentTransformationType].forEach((item, i) => {
      let slider =
        '<div class="slider_and_textfield">' +
        '  <label class="small" for="userInput' + i + '">cos' + i + '</label>' +
        '  <input id="userInput' + i + '" class="form-control-range" type="range" orient="vertical" min="-400" max="400" value="' + item + '">' +
        '  <input id="userTextInput' + i + '" class="form-control" type="number" min="-400" max="400" value="' + item + '" aria-labelledby="userInput' + i + '">' +
        '</div>';
      inputDiv.append(slider);
      $('#userInput' + i + "," + '#userTextInput' + i).on("input", function() {
        inputArrays[currentTransformationType][i] = this.value;
        $('#userInput' + i + "," + '#userTextInput' + i).val(this.value);
        $(this).next().val(this.value);
        renderSnippet();
      });
    });
  } else {
    $('#coInterval').text(" (-2040 bis 2040)");
    $('#userControls').append("<div class='slider-group g1'></div>");
    $('#userControls').append("<hr>");
    $('#userControls').append("<div class='slider-group g2'></div>");
    let inputDiv1 = $('#userControls').find(".g1");
    let inputDiv2 = $('#userControls').find(".g2");
    for (var i = 0; i < inputArrays[currentTransformationType].length/2; i++) {
      let sliderCos =
        '<div class="slider_and_textfield">' +
        '  <label class="small" for="userInput' + (2*i) + '">cos ' + i + '</label>' +
        '  <input id="userInput' + (2*i) + '" class="form-control-range" item-number="'+(2*i)+'" type="range" orient="vertical" min="-2040" max="2040" value="' + inputArrays[currentTransformationType][2*i] + '">' +
        '  <input id="userTextInput' + (2*i) + '" class="form-control" item-number="'+(2*i)+'" type="number" min="-2040" max="2040" value="' + inputArrays[currentTransformationType][2*i] + '" aria-labelledby="userInput' + (2*i) + '">' +
        '</div>';
      let sliderSin =
        '<div class="slider_and_textfield">' +
        '  <label class="small" for="userInput' + (2*i+1) + '">sin ' + i + '</label>' +
        '  <input id="userInput' + (2*i+1) + '" class="form-control-range" item-number="'+(2*i+1)+'" type="range" orient="vertical" min="-2040" max="2040" value="' + inputArrays[currentTransformationType][2*i+1] + '">' +
        '  <input id="userTextInput' + (2*i+1) + '" class="form-control" item-number="'+(2*i+1)+'" type="number" min="-2040" max="2040" value="' + inputArrays[currentTransformationType][2*i+1] + '" aria-labelledby="userInput' + (2*i+1) + '">' +
        '</div>';
      let sliders = "<div class='duo-wrapper'>" + sliderCos + sliderSin + "</div>";
      if (i<=3) {
        inputDiv1.append(sliders);
      } else {
        inputDiv2.append(sliders);
      }
      //bind events
      $('#userInput' + (2*i) + "," + '#userTextInput' + (2*i)).on("input", function() {
        let itemNumber = $(this).attr("item-number");
        inputArrays[currentTransformationType][itemNumber] = this.value;
        $('#userInput' + 2*i + "," + '#userTextInput' + itemNumber).val(this.value);
        $(this).next().val(this.value);
        renderSnippet();
      });
      $('#userInput' + (2*i+1) + "," + '#userTextInput' + (2*i+1)).on("input", function() {
        let itemNumber = $(this).attr("item-number");
        inputArrays[currentTransformationType][itemNumber] = this.value;
        $('#userInput' + 2*i+1 + "," + '#userTextInput' + itemNumber).val(this.value);
        $(this).next().val(this.value);
        renderSnippet();
      });
    }
  }
}

function updateVisualization(origin, result){
  // origin and result are Arrays containing values from 0..255
  $("#visualization").find(".visualOrigin").empty();
  $("#visualization").find(".visualResult").empty();

  origin.forEach((item, i) => {
    let rgb = "rgb(" + item + "," + item + "," + item + ")";
    let div = "<div style='background-color:" + rgb + "'></div>";
    $("#visualization").find(".visualOrigin").append(div);
  });
  result.forEach((item, i) => {
    let rgb = "rgb(" + item + "," + item + "," + item + ")";
    let div = "<div style='background-color:" + rgb + "'></div>";
    $("#visualization").find(".visualResult").append(div);
  });
}

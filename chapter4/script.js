document.querySelector(".rectBildTrue").style.display="none";
document.querySelector("#principle").style.display="none";
document.querySelector("#quantisation1").style.display="none";
document.querySelector("#quantisation2").style.display="none";
document.querySelector("#compression").style.display="none";
document.querySelector("#summary").style.display="none";
document.querySelector("#principleExampleNumber21").style.display="none";
document.querySelector("#principleExampleNumber22").style.display="none";
document.querySelector("#principleExampleNumber24").style.display="none";
document.querySelector("#principleExampleNumber31").style.display="none";
document.querySelector("#principleExampleNumber32").style.display="none";
document.querySelector("#principleExampleNumber34").style.display="none";
document.querySelector("#exsampleTable2").style.display="none";
document.querySelector("#exsampleTable3").style.display="none";
document.querySelector("#exsampleTable4").style.display="none";
document.querySelector("#exampleResult1").style.display="none";
document.querySelector("#exampleResult2").style.display="none";
document.querySelector("#exampleResult4").style.display="none";
var koeffizientenmatrixTables = new Array(9);
var quantisierungsmatrixTables = new Array(9);
var quantisierteKoeffizientenmatrixTables = new Array(9);
koeffizientenmatrixTables[0] = new Array(-96.1,-107.5,10.1,-8.3,26.4,8.0,17.6,-5.3,
                                              24.5,20.2,-6.0,11.7,-2.8,11.5,-7.4,0.7,
                                              -20.5,-11.5,-5.3,-12.8,-9.0,-14.3,-4.8,-5.9,
                                              1.0,-3.1,-7.7,0.2,-9.4,-3.5,-6.4,0.7,
                                              1.9,3.8,8.2,2.0,7.9,1.4,6.5,1.2,
                                              1.0,4.2,2.6,3.9,-3.3,6.7,0.3,3.2,
                                              1.9,-3.1,-1.8,-5.0,0.9,-4.2,-0.9,-3.0,
                                              -3.1,-1.0,-3.2,-4.8,-2.0,0.7,-2.3,-0.6);
quantisierungsmatrixTables[0] = new Array(32,22,20,32,48,80,102,122,
                                              24,24,28,38,52,116,120,110,
                                              28,26,32,48,80,114,138,112,
                                              28,34,44,58,102,174,160,124,
                                              36,44,74,112,136,218,206,154,
                                              48,70,110,128,162,208,226,184,
                                              98,128,156,174,206,242,240,202,
                                              144,184,190,196,224,200,206,198);
quantisierteKoeffizientenmatrixTables[0] =new Array(-3,-5,1,0,1,0,0,0,
                                                    1,1,0,0,0,0,0,0,
                                                    -1,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[1] = koeffizientenmatrixTables[0];
quantisierungsmatrixTables[1] = new Array(16,11,10,16,24,40,51,61,
                                          12,12,14,19,26,58,60,55,
                                          14,13,16,24,40,57,69,56,
                                          14,17,22,29,51,87,80,62,
                                          18,22,37,56,68,109,103,77,
                                          24,35,55,64,81,104,113,92,
                                          49,64,78,87,103,121,120,101,
                                          72,92,95,98,112,100,103,99);
quantisierteKoeffizientenmatrixTables[1] =new Array(-6,-10,1,-1,1,0,0,0,
                                                    2,2,0,1,0,0,0,0,
                                                    -1,-1,0,-1,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[2] = koeffizientenmatrixTables[0];
quantisierungsmatrixTables[2] = new Array(8,6,5,8,12,20,26,31,
                                          6,6,7,10,13,29,30,28,
                                          7,7,8,12,20,29,35,28,
                                          7,9,11,15,26,44,40,31,
                                          9,11,19,28,34,55,52,39,
                                          12,18,28,32,41,52,57,46,
                                          25,32,39,44,52,61,60,51,
                                          36,46,48,49,56,50,52,50);
quantisierteKoeffizientenmatrixTables[2] =new Array(-12,-18,2,-1,2,0,1,0,
                                                    4,3,-1,1,0,0,0,0,
                                                    -3,-2,-1,1,0,0,0,0,
                                                    0,0,-1,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[3] = new Array(-287.2,20.7,4.6,1.5,19,-17.1,-3.3,4.1,
                                        -8.1,-15.8,15.1,-11,2.5,-3.5,5.6,-4.2,
                                        -2.9,-7,17.6,-8,-3,-2.4,7.1,-6.6,
                                        3.5,-10,-9.4,1.4,10.5,-4,-4.1,4.8,
                                        6.7,5.2,0.9,-1.8,-0.5,-1.3,1,-0.2,
                                        -5,-3.6,6.3,-1.2,-4.9,1.3,2.8,-1.5,
                                        6.1,-0.5,-4.6,0.9,2.6,-1.9,-2.9,2.9,
                                        0.1,-0.9,1.6,-2.5,0.4,-0.2,1.4,-0.9)
quantisierungsmatrixTables[3] = new Array(34,36,48,94,198,198,198,198,
                                          36,42,52,132,198,198,198,198,
                                          48,52,112,198,198,198,198,198,
                                          94,132,198,198,198,198,198,198,
                                          198,198,198,198,198,198,198,198,
                                          198,198,198,198,198,198,198,198,
                                          198,198,198,198,198,198,198,198,
                                          198,198,198,198,198,198,198,198);
quantisierteKoeffizientenmatrixTables[3] =new Array(-8,1,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[4] = koeffizientenmatrixTables[3]
quantisierungsmatrixTables[4] = new Array(17,18,24,47,99,99,99,99,
                                          18,21,26,66,99,99,99,99,
                                          24,26,56,99,99,99,99,99,
                                          47,66,99,99,99,99,99,99,
                                          99,99,99,99,99,99,99,99,
                                          99,99,99,99,99,99,99,99,
                                          99,99,99,99,99,99,99,99,
                                          99,99,99,99,99,99,99,99);
quantisierteKoeffizientenmatrixTables[4] =new Array(-17,1,0,0,0,0,0,0,
                                                    0,-1,1,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[5] = koeffizientenmatrixTables[3]
quantisierungsmatrixTables[5] = new Array(9,9,12,24,50,50,50,50,
                                          9,11,13,33,50,50,50,50,
                                          12,13,28,50,50,50,50,50,
                                          24,33,50,50,50,50,50,50,
                                          50,50,50,50,50,50,50,50,
                                          50,50,50,50,50,50,50,50,
                                          50,50,50,50,50,50,50,50,
                                          50,50,50,50,50,50,50,50);
quantisierteKoeffizientenmatrixTables[5] =new Array(-32,2,0,0,0,0,0,0,
                                                    -1,-1,1,0,0,0,0,0,
                                                    0,-1,1,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[6] = new Array(447.1,-15.6,0.8,-0.4,-31.6,11.7,2.8,-3.8,
                                        51.8,18.2,-29.4,17.2,-5,5,-10.5,6.8,
                                        -19.2,5.8,-32.8,14.6,8.6,1.1,-13.4,9.9,
                                        18,6.9,21.8,-3.6,-19.6,6.1,9.4,-6.3,
                                        -29.1,-1.5,2.9,0,-0.4,0.3,-0.5,-0.8,
                                        24.4,-0.1,-10.1,2.6,9.8,-1.6,-4.7,4.7,
                                        -17.3,7.2,5.1,0.6,-7,2.1,3.1,-1.4,
                                        4.6,-1.1,-1,2.3,-0.7,0.5,-3,2)
quantisierungsmatrixTables[6] = quantisierungsmatrixTables[3]
quantisierteKoeffizientenmatrixTables[6] =new Array(13,0,0,0,0,0,0,0,
                                                    1,0,-1,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[7] = koeffizientenmatrixTables[6]
quantisierungsmatrixTables[7] =quantisierungsmatrixTables[4]
quantisierteKoeffizientenmatrixTables[7] =new Array(26,-1,0,0,0,0,0,0,
                                                    3,1,-1,0,0,0,0,0,
                                                    -1,0,-1,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
koeffizientenmatrixTables[8] = koeffizientenmatrixTables[6]
quantisierungsmatrixTables[8] =quantisierungsmatrixTables[5]
quantisierteKoeffizientenmatrixTables[8] =new Array(50,-2,0,0,-1,0,0,0,
                                                    6,2,-2,1,0,0,0,0,
                                                    -2,0,-1,0,0,0,0,0,
                                                    1,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0,
                                                    0,0,0,0,0,0,0,0);
var btnLast = document.querySelector(".btnLast");
var btnNext = document.querySelector(".btnNext");
btnNext.onclick = function(){
  principle();
}
document.querySelector(".rectBild").style.border="5px dashed lightgrey";
document.querySelector("#textBild").style.color="lightgrey";
var btnArray = new Array(9);
for (var i = 0; i < btnArray.length; i++) {
  btnArray[i] = {"ebene": parseInt(i/3), "faktor":i%3}
}
var compressionCombo = {ebene:0,faktor:0}
console.log(btnArray);
function overview(){
  document.querySelector("#overview").style.display="block";
  document.querySelector("#btnOverview").style.background="grey";
  document.querySelector("#subtitleText").innerHTML = "4.1 Quantisierung Übersicht";
  document.querySelector("#btnPrinciple").style.background="#002557";
  document.querySelector("#btnQuantisation1").style.background="#002557";
  document.querySelector("#btnQuantisation2").style.background="#002557";
  document.querySelector("#btnCompression").style.background="#002557";
  document.querySelector("#principle").style.display="none";
  document.querySelector("#quantisation1").style.display="none";
  document.querySelector("#quantisation2").style.display="none";
  document.querySelector("#compression").style.display="none";
  document.querySelector(".rectBildTrue").style.display="none";
  document.querySelector("#summary").style.display="none";
  document.querySelector("#btnSummary").style.background="#002557";
  btnNext.onclick = function(){
    principle();
  }
  btnLast.onclick = function(){
    overview();
  }
  btnLast.style.color = "grey";
  btnLast.style.background="white";
  btnNext.style.color = "#002557";
  btnNext.style.background = "darkgrey";
  document.querySelector(".rectBild").style.border="5px dashed lightgrey";
  document.querySelector("#textBild").style.color="lightgrey";
}

function principle(){
  document.querySelector("#principle").style.display="block";
  document.querySelector("#btnPrinciple").style.background="grey";
  document.querySelector("#subtitleText").innerHTML = "4.2 Prinzip der Quantisierung";
  document.querySelector("#btnOverview").style.background="#002557";
  document.querySelector("#btnQuantisation1").style.background="#002557";
  document.querySelector("#btnQuantisation2").style.background="#002557";
  document.querySelector("#btnCompression").style.background="#002557";
  document.querySelector("#overview").style.display="none";
  document.querySelector("#quantisation1").style.display="none";
  document.querySelector("#quantisation2").style.display="none";
  document.querySelector("#compression").style.display="none";
  document.querySelector(".rectBildTrue").style.display="none";
  document.querySelector("#summary").style.display="none";
  document.querySelector("#btnSummary").style.background="#002557";
  btnLast.onclick = function(){
    overview();
  }
  btnNext.onclick = function(){
    quantisation1();
  }
  btnLast.style.color = "#002557";
  btnLast.style.background = "darkgrey";
  btnNext.style.color = "#002557";
  btnNext.style.background = "darkgrey";
  document.querySelector(".rectBild").style.border="5px dashed lightgrey";
  document.querySelector("#textBild").style.color="lightgrey";
}
function quantisation1() {
  document.querySelector("#quantisation1").style.display="block";
  document.querySelector("#btnQuantisation1").style.background="grey";
  document.querySelector("#subtitleText").innerHTML = "4.3 Quantisierung bei JPEG";
  document.querySelector("#btnOverview").style.background="#002557";
  document.querySelector("#btnPrinciple").style.background="#002557";
  document.querySelector("#btnQuantisation2").style.background="#002557";
  document.querySelector("#btnCompression").style.background="#002557";
  document.querySelector("#overview").style.display="none";
  document.querySelector("#principle").style.display="none";
  document.querySelector("#quantisation2").style.display="none";
  document.querySelector("#compression").style.display="none";
  document.querySelector(".rectBildTrue").style.display="none";
  document.querySelector("#summary").style.display="none";
  document.querySelector("#btnSummary").style.background="#002557";
  btnLast.onclick = function(){
    principle();
  }
  btnNext.onclick = function(){
    quantisation2();
  }
  btnLast.style.color = "#002557";
  btnLast.style.background = "darkgrey";
  btnNext.style.color = "#002557";
  btnNext.style.background = "darkgrey";
  document.querySelector(".rectBild").style.border="5px dashed lightgrey";
  document.querySelector("#textBild").style.color="lightgrey";
}
function quantisation2() {
  document.querySelector("#quantisation2").style.display="block";
  document.querySelector("#btnQuantisation2").style.background="grey";
  document.querySelector("#subtitleText").innerHTML = "4.3 Quantisierung bei JPEG";
  document.querySelector("#btnOverview").style.background="#002557";
  document.querySelector("#btnPrinciple").style.background="#002557";
  document.querySelector("#btnQuantisation1").style.background="#002557";
  document.querySelector("#btnCompression").style.background="#002557";
  document.querySelector("#overview").style.display="none";
  document.querySelector("#principle").style.display="none";
  document.querySelector("#quantisation1").style.display="none";
  document.querySelector("#compression").style.display="none";
  document.querySelector(".rectBildTrue").style.display="none";
  document.querySelector("#summary").style.display="none";
  document.querySelector("#btnSummary").style.background="#002557";
  btnLast.onclick = function(){
    quantisation1();
  }
  btnNext.onclick = function(){
    compression();
  }
  btnLast.style.color = "#002557";
  btnLast.style.background = "darkgrey";
  btnNext.style.color = "#002557";
  btnNext.style.background = "darkgrey";
  document.querySelector(".rectBild").style.border="5px dashed lightgrey";
  document.querySelector("#textBild").style.color="lightgrey";
}
function compression() {
  document.querySelector("#compression").style.display="block";
  document.querySelector("#btnCompression").style.background="grey";
  document.querySelector("#subtitleText").innerHTML = "4.4 Kompressionsfaktor";
  document.querySelector("#btnOverview").style.background="#002557";
  document.querySelector("#btnPrinciple").style.background="#002557";
  document.querySelector("#btnQuantisation1").style.background="#002557";
  document.querySelector("#btnQuantisation2").style.background="#002557";
  document.querySelector("#overview").style.display="none";
  document.querySelector("#principle").style.display="none";
  document.querySelector("#quantisation1").style.display="none";
  document.querySelector("#quantisation2").style.display="none";
  document.querySelector("#summary").style.display="none";
  document.querySelector("#btnSummary").style.background="#002557";
  btnLast.onclick = function(){
    quantisation2();
  }
  btnNext.onclick = function(){
    summary();
  }
  btnLast.style.color = "#002557";
  btnLast.style.background = "darkgrey";
  btnNext.style.color = "#002557";
  btnNext.style.background = "darkgrey";
  document.querySelector(".rectBild").style.border="5px dashed grey";
  document.querySelector("#textBild").style.color="grey";
  document.querySelector(".rectBild").onclick = function() {
    document.querySelector(".rectBild").style.display="none";
    document.querySelector(".rectRight").style.height="380px";
    document.querySelector(".rectBildTrue").style.display="block";
  }
}
function summary(){
  document.querySelector("#summary").style.display="block";
  document.querySelector("#btnSummary").style.background="grey";
  document.querySelector("#subtitleText").innerHTML = "4.5 Quantisierung: Zusammenfassung";
  document.querySelector("#btnPrinciple").style.background="#002557";
  document.querySelector("#btnQuantisation1").style.background="#002557";
  document.querySelector("#btnQuantisation2").style.background="#002557";
  document.querySelector("#btnCompression").style.background="#002557";
  document.querySelector("#principle").style.display="none";
  document.querySelector("#quantisation1").style.display="none";
  document.querySelector("#quantisation2").style.display="none";
  document.querySelector("#compression").style.display="none";
  document.querySelector(".rectBildTrue").style.display="none";
  document.querySelector("#overview").style.display="none";
  document.querySelector("#btnOverview").style.background="#002557";
  btnNext.onclick = function(){
    summary();
  }
  btnLast.onclick = function(){
    compression();
  }
  btnLast.style.color = "#002557";
  btnLast.style.background="darkgrey";
  btnNext.style.color = "grey";
  btnNext.style.background = "white";
  document.querySelector(".rectBild").style.border="5px dashed lightgrey";
  document.querySelector("#textBild").style.color="lightgrey";
}
function closeBild() {
  document.querySelector(".rectBildTrue").style.display="none";
  document.querySelector(".rectRight").style.height="545px";
  document.querySelector(".rectBild").style.display="block";
}
function principle0() {
  document.querySelector("#exsampleTable1").style.display="block";
  document.querySelector("#principleExampleNumber20").style.display="block";
  document.querySelector("#principleExampleNumber30").style.display="block";
  document.querySelector("#principleExampleNumber21").style.display="none";
  document.querySelector("#principleExampleNumber22").style.display="none";
  document.querySelector("#principleExampleNumber24").style.display="none";
  document.querySelector("#principleExampleNumber31").style.display="none";
  document.querySelector("#principleExampleNumber32").style.display="none";
  document.querySelector("#principleExampleNumber34").style.display="none";
  document.querySelector("#exsampleTable2").style.display="none";
  document.querySelector("#exsampleTable3").style.display="none";
  document.querySelector("#exsampleTable4").style.display="none";
  document.querySelector("#exampleResult1").style.display="none";
  document.querySelector("#exampleResult2").style.display="none";
  document.querySelector("#exampleResult4").style.display="none";
}
function principle1() {
  document.querySelector("#principleExampleNumber21").style.display="block";
  document.querySelector("#principleExampleNumber31").style.display="block";
  document.querySelector("#exsampleTable2").style.display="block";
  document.querySelector("#exampleResult1").style.display="block";
  document.querySelector("#exsampleTable1").style.display="none";
  document.querySelector("#principleExampleNumber20").style.display="none";
  document.querySelector("#principleExampleNumber30").style.display="none";
  document.querySelector("#principleExampleNumber22").style.display="none";
  document.querySelector("#principleExampleNumber24").style.display="none";
  document.querySelector("#principleExampleNumber32").style.display="none";
  document.querySelector("#principleExampleNumber34").style.display="none";
  document.querySelector("#exsampleTable3").style.display="none";
  document.querySelector("#exsampleTable4").style.display="none";
  document.querySelector("#exampleResult2").style.display="none";
  document.querySelector("#exampleResult4").style.display="none";
}
function principle2(){
  document.querySelector("#principleExampleNumber21").style.display="none";
  document.querySelector("#principleExampleNumber31").style.display="none";
  document.querySelector("#exsampleTable2").style.display="none";
  document.querySelector("#exampleResult1").style.display="none";
  document.querySelector("#exsampleTable1").style.display="none";
  document.querySelector("#principleExampleNumber20").style.display="none";
  document.querySelector("#principleExampleNumber30").style.display="none";
  document.querySelector("#principleExampleNumber22").style.display="block";
  document.querySelector("#principleExampleNumber24").style.display="none";
  document.querySelector("#principleExampleNumber32").style.display="block";
  document.querySelector("#principleExampleNumber34").style.display="none";
  document.querySelector("#exsampleTable3").style.display="block";
  document.querySelector("#exsampleTable4").style.display="none";
  document.querySelector("#exampleResult2").style.display="block";
  document.querySelector("#exampleResult4").style.display="none";
}
function principle4() {
  document.querySelector("#principleExampleNumber21").style.display="none";
  document.querySelector("#principleExampleNumber31").style.display="none";
  document.querySelector("#exsampleTable2").style.display="none";
  document.querySelector("#exampleResult1").style.display="none";
  document.querySelector("#exsampleTable1").style.display="none";
  document.querySelector("#principleExampleNumber20").style.display="none";
  document.querySelector("#principleExampleNumber30").style.display="none";
  document.querySelector("#principleExampleNumber22").style.display="none";
  document.querySelector("#principleExampleNumber24").style.display="block";
  document.querySelector("#principleExampleNumber32").style.display="none";
  document.querySelector("#principleExampleNumber34").style.display="block";
  document.querySelector("#exsampleTable3").style.display="none";
  document.querySelector("#exsampleTable4").style.display="block";
  document.querySelector("#exampleResult2").style.display="none";
  document.querySelector("#exampleResult4").style.display="block";
}
function btnY(){
  compressionCombo.ebene = 0;
  document.querySelector("#btnCb").style.border = "2px solid lightgrey";
  document.querySelector("#btnY").style.border = "2px solid red";
  document.querySelector("#btnCr").style.border = "2px solid lightgrey";
  updateTables();
}
function btnCb(){
  compressionCombo.ebene = 1;
  document.querySelector("#btnCr").style.border = "2px solid lightgrey";
  document.querySelector("#btnCb").style.border = "2px solid red";
  document.querySelector("#btnY").style.border = "2px solid lightgrey";
  updateTables();
}
function btnCr(){
  compressionCombo.ebene = 2;
  document.querySelector("#btnCb").style.border = "2px solid lightgrey";
  document.querySelector("#btnCr").style.border = "2px solid red";
  document.querySelector("#btnY").style.border = "2px solid lightgrey";
  updateTables();
}
function btn25(){
  compressionCombo.faktor = 0;
  document.querySelector("#btn75").style.border = "2px solid lightgrey";
  document.querySelector("#btn50").style.border = "2px solid lightgrey";
  document.querySelector("#btn25").style.border = "2px solid red";
  updateTables();
}
function btn50(){
  compressionCombo.faktor = 1;
  document.querySelector("#btn25").style.border = "2px solid lightgrey";
  document.querySelector("#btn50").style.border = "2px solid red";
  document.querySelector("#btn75").style.border = "2px solid lightgrey";
  updateTables();
}
function btn75(){
  compressionCombo.faktor = 2;
  document.querySelector("#btn25").style.border = "2px solid lightgrey";
  document.querySelector("#btn50").style.border = "2px solid lightgrey";
  document.querySelector("#btn75").style.border = "2px solid red";
  updateTables();
}
function createTable(data,table){
  var tableData;
  for (var i = 0; i < 8; i++) {
    tableData += "<tr>";
    for (var j = 0; j < 8; j++) {
      tableData+="<td>"+data[i*8+j]+"</td>"
    }
    tableData+="</tr>"
  }
  $(table).html(tableData)
}
function updateTables(){
  for (var i = 0; i < btnArray.length; i++) {
    if (btnArray[i]["ebene"] == compressionCombo["ebene"] && btnArray[i]["faktor"] == compressionCombo["faktor"]) {
      createTable(koeffizientenmatrixTables[i],"#koeffizientenmatrixTable");
      createTable(quantisierungsmatrixTables[i],"#quantisierungsmatrixTable");
      createTable(quantisierteKoeffizientenmatrixTables[i],"#quantisierteKoeffizientenmatrixTable");
      break;
    }
    console.log(btnArray[i]["ebene"],compressionCombo["ebene"]);
  }
}
updateTables();

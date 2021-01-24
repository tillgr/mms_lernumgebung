var dataFields = {
  0: [150, 170, 132, 185, 147, 190, 215, 220],
  1: [165, 185, 130, 190, 175, 196, 223, 199],
  2: [55, 163, 180, 20, 202, 173, 97, 170],
  3: [143, 154, 160, 170, 211, 185, 190, 166],
  4: [130, 140, 172, 190, 193, 150, 180, 140],
  5: [35, 64, 198, 180, 77, 141, 72, 135],
  6: [170, 190, 163, 140, 165, 132, 160, 140],
  7: [160, 40, 145, 35, 170, 199, 190, 29],
  8: [120, 80, 120, 80, 120, 80, 120, 80],
  9: [200, 100, 200, 100, 200, 100, 200, 100],
  10: [255, 0, 255, 0, 255, 0, 255, 0],
  11: [0, 0, 0, 0, 0, 0, 0, 0]
};
var dctInputs;
var dftInputs;
var inputArrays;
var transformationType = {
  0: "DCT",
  1: "DFT"
};
var quantisationType = {
  0: "Keine Quantisierung",
  1: "Teile durch 2",
  2: "Teile durch 5",
  3: "Teile durch 10",
  4: "Teile durch 25",
  5: "Teile durch 50",
  6: "JPEG Standard",
};
var quantisationValues = {
  0: new Array(8).fill(1),
  1: new Array(8).fill(2),
  2: new Array(8).fill(5),
  3: new Array(8).fill(10),
  4: new Array(8).fill(25),
  5: new Array(8).fill(50),
  6: [16, 11, 10, 16, 24, 40, 51, 61]
};

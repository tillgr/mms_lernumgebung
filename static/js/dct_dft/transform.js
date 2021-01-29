function transformation(sfield, quantisefield) {
  var cfield;
  var x, u;
  var N = 8;
  var Cu;
  var sum, cos, sin;
  var sqrt2 = Math.sqrt(2);

  if (currentTransformationType == 0) {
    cfield = new Array(8).fill(0);
    for (u = 0; u < 8; u++) {
      if (u == 0) {
        Cu = 1 / sqrt2;
      } else {
        Cu = 1.0;
      }
      sum = 0;
      for (x = 0; x < 8; x++) {
        sum += (sfield[x] - 128) * Math.cos((2 * x + 1) * u * Math.PI / 16);
      }
      cfield[u] = Math.round(sum * 0.5 * Cu);
    }

    for (u = 0; u < 8; u++) {
      cfield[u] = Math.round(cfield[u] / quantisefield[u]);
    }
  } else if (currentTransformationType == 1) {
    cfield = new Array(16).fill(0);
    for (u = 0; u < 8; u++) {
      cos = 0;
      sin = 0;

      for (x = 0; x < 8; x++) {
        cos += sfield[x] * Math.cos(2 * Math.PI * x * u / N);
        sin -= sfield[x] * Math.sin(2 * Math.PI * x * u / N);
      }

      cfield[u * 2] = Math.round(cos);
      cfield[u * 2 + 1] = Math.round(sin);
    }
  }
  return cfield;
}

function backtransformation(usercfield_original, quantisefield) {
  var usercfield = [...usercfield_original];
  var usersfield = new Array(8).fill(0);
  var x, u;
  var N = 8;
  var Cu = 0;
  var sum, cos, sin;
  var sqrt2 = Math.sqrt(2);

  if (currentTransformationType == 0) {
    // dequantisation
    for (u = 0; u < 8; u++) {
      usercfield[u] *= quantisefield[u];
    }

    // backtransformation // u ist k // 16 ist L
    for (x = 0; x < 8; x++) {
      sum = 0;
      for (u = 0; u < 8; u++) {
        if (u == 0) {
          Cu = 1 / sqrt2;
        } else {
          Cu = 1.0;
        }
        sum += 0.5 * Cu * usercfield[u] * Math.cos((2 * x + 1) * u * Math.PI / 16);
      }
      usersfield[x] = Math.round(sum) + 128;
      if (usersfield[x] > 255) {usersfield[x] = 255;}
      if (usersfield[x] < 0) {usersfield[x] = 0;}
    }
  } else if (currentTransformationType == 1) {
    for (x = 0; x < 8; x++) {
      cos = 0;
      sin = 0;

      for (u = 0; u < 8; u++) {
        cos += usercfield[u * 2] * Math.cos(2 * Math.PI * x * u / N);
        sin += usercfield[u * 2 + 1] * Math.sin(2 * Math.PI * x * u / N);
      }
      usersfield[x] = Math.round((cos - sin) / N);
      if (usersfield[x] > 255) {usersfield[x] = 255;}
      if (usersfield[x] < 0) {usersfield[x] = 0;}
    }
  }

  return usersfield;
}

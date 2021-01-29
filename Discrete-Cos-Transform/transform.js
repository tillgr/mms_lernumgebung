function transformation(sfield, transformationMode, quantisefield) {
    var cfield = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var x, u;
    var N = 8;
    var Cu;
    var sum, real, imagine;
    var sqrt2 = Math.sqrt(2);

    if (transformationMode === 'DCT') {
        for (u = 0; u < 8; u++) {
            if (u == 0) {
                Cu = 1 / sqrt2;
            } else {
                Cu = 1.0;
            }
            sum = 0;
            for (x = 0; x < 8; x++) {
                sum += (sfield[x] - 128) * Math.cos((2*x+1) * u * Math.PI/16);
            }
            cfield[u * 2] = Math.round(sum * 0.5 * Cu);
        }

        for (u = 0; u < 8; u++) {
            cfield[u * 2] = Math.round(cfield[u * 2] / quantisefield[u]);
        }
    } else if (transformationMode === 'DFT') {
        for (u = 0; u < 8; u++) {
            real = 0;
            imagine = 0;

            for (x = 0; x < 8; x++) {
                real += sfield[x] * Math.cos(2 * Math.PI * x * u/N);
                imagine -= sfield[x] * Math.sin(2 * Math.PI * x * u/N);
            }

            cfield[u * 2] = Math.round(real);
            cfield[u*2 + 1] = Math.round(imagine);
        }
    }
    return cfield;
}

function backtransformation(usercfield_tmp, transformationMode, quantisefield) {
    var usercfield = Object.assign([], usercfield_tmp);
    var usersfield = [0, 0, 0, 0, 0, 0, 0, 0];
    var x, u;
    var N = 8;
    var Cu = 0;
    var sum, real, imagine;
    var sqrt2 = Math.sqrt(2);

    if (transformationMode === 'DCT') {
        // dequantisation
        for (u = 0; u < 8; u++) {
            usercfield[u * 2] *= quantisefield[u];
        }

        // backtransformation
        for (x = 0; x < 8; x++) {
            sum = 0;
            for (u = 0; u < 8; u++) {
                if (u == 0) {
                    Cu = 1 / sqrt2;
                } else {
                    Cu = 1.0;
                }
                sum += 0.5 * Cu * usercfield[u * 2] * Math.cos(Cu * (2*x + 1) * u * Math.PI/16);
            }
            usersfield[x] = Math.round(sum) + 128;
        }
    } else if (transformationMode === 'DFT') {
        for (x = 0; x < 8; x++) {
            real = 0;
            imagine = 0;

            for (u = 0; u < 8; u++) {
                real += usercfield[u * 2] * Math.cos(2 * Math.PI * x * u/N);
                imagine += usercfield[u*2 + 1] * Math.sin(2 * Math.PI * x * u/N);
            }
            usersfield[x] = Math.round((real - imagine) / N);
        }
    }

    return usersfield;
}

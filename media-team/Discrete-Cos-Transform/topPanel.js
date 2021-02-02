
let selection = new Selection();


function Selection(){
    let selector = 0;
    //decrement
    this.changeLeft = function (){
        selector > 0 ?  selector -- : selector += 11;
        current_s = selector + 1;
        drawPlot();
        /*console.log(selector);*/
    }
    //increment
    this.changeRight = function () {
        selector = (selector+1)%12;
        current_s = selector + 1;
        drawPlot();
        /*console.log(selector);*/
    }
    Object.defineProperty(this, 'selector', {
        get: function (){
            return selector;
        }
    });
}

//render pairs

function renderPairs(){

    let signalValues = sfield[selection.selector + 1]
        .split(',').map(x=>+x);

    let boxes = document.getElementsByClassName("signalBoxes")[0];
    boxes.innerHTML = '';

    let i = 0;

    for (let val of signalValues){
        /*console.log(val);
        console.log(signalValues.indexOf(val));*/

        let key = document.createElement('div');
        key.innerText = 'x' + i.toString();
        key.className = 'center-text';
        let value = document.createElement('div');
        value.innerText = val.toString();
        value.className = 'center-text';

        let el = document.createElement('span');
        el.appendChild(key);
        el.appendChild(value);
        el.className = 'valueBox';

        boxes.appendChild(el);
        i++;
    }
}
renderPairs()

//create board

function renderBoard(){
    var board = document.getElementById('board');
    var cells = board.childNodes;
    var colors = sfield[current_s].split(',').map(Number).concat(user_sfield);

    for (var i = 0; i < 16; ++i) {
        var el;
        if (cells.length != 16) {
            el = document.createElement('SPAN');
            el.className = 'square';
            board.appendChild(el);
        } else {
            el = cells[i];
        }
        var col = colors[i];
        el.style.backgroundColor = 'rgb(' + col + ', ' + col + ', ' + col + ')';
    }
}

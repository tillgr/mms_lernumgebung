
let selection = new Selection();


function Selection(){
    let selector = 0;
    //decrement
    this.changeLeft = function (){
        selector > 0 ?  selector -- : selector += 11;
        /*console.log(selector);*/
    }
    //increment
    this.changeRight = function () {
        selector = (selector+1)%12;
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

function createBoard(){
    var board = document.getElementById('board');

    var colors = new Array(3);
    var range = 4
    var counter = 0;

    function createRandomColors() {
        for (i = 0 ; i < range; i++) {
            colors[i] = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        }

    }
    createRandomColors()
    function getRandomColor() {

        output = colors[counter];
        counter = (counter+Math.floor(Math.random()*5))%4;

        return output
    }

    const renderBoard = () =>{
        for (var i = 0; i < 24; ++i){
            var el = document.createElement('SPAN')
            el.className = 'square'
            el.style.backgroundColor = getRandomColor()
            board.appendChild(el)
        }
    }
    renderBoard()
}

createBoard()




let matrix = document.getElementsByClassName('matrix')[0];
let lines = matrix.children;
let fields;

/**=== Render Matrices ===**/

let numbers1 = [
    -6, -10, 1, -1, 1, 0, 0, 0,
    2, 2, 0, 1, 0, 0, 0, 0,
    -1, -1, 0, -1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
]
function renderMatrix1(){
    let i = 0;
    for (let line of Array.from(lines)) {
        fields = line.children;
        for (let field of Array.from(fields)){
            field.innerHTML = numbers1[i];
            i++;
        }
    }
}

let numbers2 = [
    30, -4, -5, -2, 4, 0, 2, 0,
    -22, -13, 2, 1, 1, 2, 1, 1,
    -2, 5, 1, 0, 1, 0, 0, 0, 0,
    17, 3, -1, 0, -1, 0, 0, 0,
    17, 2, 0, 0, -1, 0, -1, 0,
    10, 2, 0, 0, -1, 0, -1, 0,
    2, 1, 0, 0, 0, -1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
]
function renderMatrix2(){
    let i = 0;
    for (let line of Array.from(lines)) {
        fields = line.children;
        for (let field of Array.from(fields)){
            field.innerHTML = numbers2[i];
            i++;
        }
    }
}

/**===Start Matrix Animation===**/

function animateMatrix(){

    on();
    setTimeout(off, delayTime);
}

/**=== Animate the fields on/off ===**/
function changeColor(color, field){
    color = !color;
    color ? field.style.backgroundColor = 'gray' : field.style.backgroundColor = 'red';
}

let intervalTime = 234.37500;

let j = 1;
function on(){
    let field = document.getElementById(j.toString());
    changeColor(true, field);
    appendBox(field);
    j++;

    setInterval(
        function () {
            let field = document.getElementById((j%65).toString());
            changeColor(true, field);
            appendBox(field);
            j = (j%64)+1;
        },
        intervalTime);
}

let delayTime = 20;
let k = 1;
let turnComplete = false;
function off(){
    setInterval(
        function () {
            let field = document.getElementById(k.toString());
            changeColor(false, field);
            if (k === 64){
                let fields = document.getElementsByClassName('field');
                    for(let field of fields){
                        field.style.backgroundColor = '#eeeded';
                    }
                turnComplete = true;
            }
            k = (k%64)+1;
        },
        intervalTime);
}

/**===render ZigZag animation===**/
function appendBox(field){
    if (!turnComplete){
        let box = document.createElement('SPAN');
        box.innerText = field.innerText;
        box.className = field.className;
        box.style.marginBottom = '1rem';

        document.getElementById('boxesNode').appendChild(box);
    }
}

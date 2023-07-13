const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
let clicked = false;


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
    // return Math.round(Math.random() * max);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    // console.log(hole);
    if (hole === lastHole) {
        console.log("o_o");
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(1000, 4000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep();
        };
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
        timeUp = true;
    }, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return;
    // e.preventDefault();
    // if (!clicked) {
    //     console.log("click");
    //     clicked = true;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    // }
}

moles.forEach(mole => mole.addEventListener('click', bonk
));

// let button = document.querySelector("#b");
// moles.forEach(mole => mole.addEventListener('click', bonk));
// button.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (!clicked) {
//         console.log("click");
//         clicked = true;
//     }
// });
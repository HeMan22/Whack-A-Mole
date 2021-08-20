const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeleft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result =0;

function randomSquare(){
    square.forEach(className =>{
        className.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // Assgn the ID of randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
}

square.forEach(id =>{
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result +1;
            score.textContent = result;
        }
    });
});

function moveMole(){
    let timeID = null;
    timerID = setInterval(randomSquare, 500);
}

moveMole();
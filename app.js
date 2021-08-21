const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result =0;
let currentTime = timeLeft.textContent;
//console.log(currentTime);
let timerID = null;

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
            hitPosition = null;
        }
    });
});

function moveMole(){
    timerID = setInterval(randomSquare, 500);
}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerID);
        clearInterval(timerID);
        alert('Game Over!! Your Final Score is' + result);
    }
}

let countDownTimerID = setInterval(countDown, 100);
'use strict'

let secretNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    clickFunction(secretNum);
})

document.querySelector('.again').addEventListener('click',function(){
    againFunction();
})

const clickFunction = function (secretNum){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        displayMessage("No Input Found!");
    }
    else if(guess === secretNum){
        displayMessage("Congratulations!");
        highscore = (score>highscore) ? score : highscore;
        document.querySelector(".score").textContent = score;
        document.querySelector(".highscore").textContent = highscore;
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = "rgb(211, 100, 100)";
    }
    else if (guess > secretNum){
        displayMessage("Too High");
        score -= 1;
        document.querySelector(".score").textContent = score;
    }
    else {
        displayMessage("Too Low");
        score -= 1;
        document.querySelector(".score").textContent = score;
    }
         
}

const againFunction = function(){
    document.querySelector(".score").textContent = 20;
    score = 20;
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...")
    secretNum = Number(Math.trunc(Math.random()*20)+1);
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = "#d39b51";
}


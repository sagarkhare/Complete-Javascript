'use strict'

let player0CurrScore = 0;
let player1CurrScore = 0;
const scores = [0,0];
let player0Score = 0;
let player1Score = 0;

const diceEle =  document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');

const currScore0Ele = document.querySelector('#current--0');
const currScore1Ele = document.querySelector('#current--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele  = document.getElementById('score--1');

document.querySelector('.player--active')
let activePlayer = 0;

function rollDice(){
    const diceNum = Math.trunc(Math.random()*6)+1;
    // switch(diceNum){
    //     case 1: src="dice-1.png"; break;
    //     case 2: src="dice-2.png"; break;
    //     case 3: src="dice-3.png"; break;
    //     case 4: src="dice-4.png"; break;
    //     case 5: src="dice-5.png"; break;
    //     case 6: src="dice-6.png"; break;
    // }
    diceEle.src = `dice-${diceNum}.png`;
    diceEle.classList.remove('hidden');
    console.log(diceNum);
    if(diceNum != 1){
        if(activePlayer === 0){
            player0CurrScore += diceNum;
            currScore0Ele.textContent = diceNum;
        }
        else{
            player1CurrScore += diceNum;
            currScore1Ele.textContent = diceNum;
        }
    }
    else{
        activePlayer === 0 ?
        (scores[0] += player0CurrScore,
         activePlayer = 1,
         player0Ele.classList.remove('player--active'),
         player1Ele.classList.add('player--active'),
         score0Ele.textContent=scores[0]):
        (scores[1] += player1CurrScore,
         activePlayer = 0,
         player1Ele.classList.remove('player--active'),
         player0Ele.classList.add('player--active'),
         score1Ele.textContent=scores[1]) ;
    }

}




function displayScore(currScore){
    currScore0Ele.textContent = currScore;
}





btnRoll.addEventListener('click',rollDice);
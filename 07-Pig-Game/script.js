"use strict";

let player0CurrScore = 0;
let player1CurrScore = 0;

const scores = [0, 0];
let currScore = 0;

const diceEle = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const player0Ele = document.querySelector(".player--0");
const player1Ele = document.querySelector(".player--1");

const currScore0Ele = document.querySelector("#current--0");
const currScore1Ele = document.querySelector("#current--1");
const score0Ele = document.querySelector("#score--0");
const score1Ele = document.getElementById("score--1");

let activePlayer = 0;

let playing = true;

function rollDice() {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // switch(diceNum){
    //     case 1: src="dice-1.png"; break;
    //     case 2: src="dice-2.png"; break;
    //     case 3: src="dice-3.png"; break;
    //     case 4: src="dice-4.png"; break;
    //     case 5: src="dice-5.png"; break;
    //     case 6: src="dice-6.png"; break;
    // }
    diceEle.src = `dice-${diceNum}.png`;
    diceEle.classList.remove("hidden");
    console.log(diceNum);
    if (diceNum != 1) {
      // if(activePlayer === 0){
      //     player0CurrScore += diceNum;
      //     currScore0Ele.textContent = player0CurrScore;
      // }
      // else{
      //     player1CurrScore += diceNum;
      //     currScore1Ele.textContent = player1CurrScore;
      // }
      currScore += diceNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currScore;
      btnHold.addEventListener("click", hold);
    } else {
      currScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      playerChange();
    }
  }
}

function hold() {
  if (playing) {
    scores[activePlayer] += currScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    currScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
      if (scores[activePlayer]>=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
        return;
    }
    playerChange();
  }
}

function newGame() {
  scores[0] = 0;
  scores[1] = 0;
  currScore = 0;
  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  currScore0Ele.textContent = 0;
  currScore1Ele.textContent = 0;
  activePlayer === 1
    ? (player1Ele.classList.remove("player--active"),
      player0Ele.classList.add("player--active"),
      (activePlayer = 0))
    : (activePlayer = 0);
  diceEle.classList.add("hidden");
  playing=true;
}

function playerChange() {
  //   activePlayer === 1
  //     ? ((activePlayer = 0),
  //       player1Ele.classList.remove("player--active"),
  //       player0Ele.classList.add("player--active"))
  //     : ((activePlayer = 1),
  //       player0Ele.classList.remove("player--active"),
  //       player1Ele.classList.add("player--active"));
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0Ele.classList.toggle("player--active");
  player1Ele.classList.toggle("player--active");
}

btnNew.addEventListener("click", newGame);
btnRoll.addEventListener("click", rollDice);

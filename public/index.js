
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const options = ['rock', 'paper', 'scissors'];

const result = () => options[random(0,3)];

let counterVictories = 0;
let counterDraw = 0;
let counterLosses = 0;

const operation = (player, machine) => {
   
  let winner = '';
  let message = '';

  let playerMessage = `player won ${player} > ${machine}`;
  let machineMessage = `machine won ${machine} > ${player}`;
 
  if(player == machine) {
    counterDraw++;
    winner = 'draw',
    message = 'draw'
   } else  if(
    player == 'rock'     && machine == 'scissors' ||
    player == 'scissors' && machine == 'paper'    ||
    player == 'paper'    && machine == 'rock'     
  ){
    winner = 'player';
    message = playerMessage;
    counterVictories++;
  } else {

    winner = 'machine';
    message = machineMessage;
    counterLosses++;
  }
  return {
    winner: winner,
    message: message
  }

};


let paperBtn = document.getElementById('paperBtn');
let rockBtn  = document.getElementById('rockBtn');
let scissors = document.getElementById('scissors');


let rockCode = '270A';
let paperCode = '270B';
let scissorsCode = '270C';

let createEmoticon = (nameBtn, code) => nameBtn.innerText = String.fromCodePoint(parseInt(code, 16));


createEmoticon(rockBtn,rockCode);
createEmoticon(paperBtn,paperCode);
createEmoticon(scissorsBtn,scissorsCode);

let messageLocal = document.getElementById('message');
let record = document.getElementById('record');

let counterVictoriesMessage = document.getElementById('counterVictories');
let counterDrawMessage = document.getElementById('counterDraw');
let counterLossesMessage = document.getElementById('counterLosses');



let myFuntion = nameBtn => {
  let machine = result();

  let result2 = operation(nameBtn.value, machine);
  let winner = result2.winner;
  let message = result2.message;
  
  console.log(nameBtn.value);
  
  record.textContent = `${nameBtn.value} vs ${machine}`; 
  messageLocal.textContent = message;

	counterVictoriesMessage.textContent = counterVictories;
 	counterDrawMessage.textContent = counterDraw;
	counterLossesMessage.textContent = counterLosses;

}

rockBtn.onclick = () => myFuntion(rockBtn);
paperBtn.onclick = () => myFuntion(paperBtn);
scissorsBtn.onclick = () => myFuntion(scissorsBtn);

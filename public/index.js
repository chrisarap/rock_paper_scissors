
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const options = ['rock', 'paper', 'scissors'];

const result = () => options[random(0,3)];

const operation = (player, machine) => {
   
  let winner = '';
  let message = '';

  let playerMessage = `player won ${player} > ${machine}`;
  let machineMessage = `machine won ${machine} > ${player}`;
 
  if(player == machine) {
    winner = 'draw',
    message = 'draw'
   } else  if(
    player == 'rock'     && machine == 'scissors' ||
    player == 'scissors' && machine == 'paper'    ||
    player == 'paper'    && machine == 'rock'     
  ){
    winner = 'player';
    message = playerMessage;
  } else {

    winner = 'machine';
    message = machineMessage;
  }
  return {
    winner: winner,
    message: message
  }

};


let paperBtn = document.getElementById('paperBtn');
let rockBtn  = document.getElementById('rockBtn');
let scissors = document.getElementById('scissors');

let messageLocal = document.getElementById('message');
let record = document.getElementById('record');


let myFuntion = nameBtn => {
  let machine = result();

  let result2 = operation(nameBtn.value, machine);
  let winner = result2.winner;
  let message = result2.message;
  
  console.log(nameBtn.value);

  record.textContent = `${nameBtn.value} vs ${machine}`; 
  messageLocal.textContent = message;
}

rockBtn.onclick = () => myFuntion(rockBtn);
paperBtn.onclick = () => myFuntion(paperBtn);
scissorsBtn.onclick = () => myFuntion(scissorsBtn);

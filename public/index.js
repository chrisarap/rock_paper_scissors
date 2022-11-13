
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

module.exports={ result, operation}; 


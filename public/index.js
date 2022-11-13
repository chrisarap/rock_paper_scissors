
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const options = ['rock', 'paper', 'scissors'];

const result = () => options[random(0,3)];

const operation = (player, machine) => {
   
  const playerMessage = `player won ${player} > ${machine}`;

  if(player == machine) return 'draw';
  
  if(player == 'rock' && machine == 'scissors') return playerMessage;
  if(player == 'scissors' && machine == 'paper') return playerMessage;
  if(player == 'paper' && machine == 'rock') return playerMessage; 

  return `machine won ${machine} > ${player}`;

};

module.exports={ result, operation}; 


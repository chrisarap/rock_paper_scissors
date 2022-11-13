
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const options = ['rock', 'paper', 'scissors'];

const result = () => options[random(0,3)];

module.exports={ result}; 


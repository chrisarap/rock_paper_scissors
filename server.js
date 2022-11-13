const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const {result, operation} = require('./public/index.js')
 
let count = {
    player: 0,
    machine: 0,
    draw: 0
  };

let data = {
  playerOption: '',
  machineOption: '',
  winner: '',
  message: ''
}

app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engione', 'pug');


app.get('/', (req, res) => res.render(
  __dirname + '/views/index.pug',
  {
    count: count,
    data: data
  }
));

app.post('/', (req, res) => {

  let userOption = req.body.option;
  let machineOption = result();
  let answer= operation(userOption, machineOption);
  
  if(answer.winner == 'player')  count.player++;
  if(answer.winner == 'machine') count.machine++;
  if(answer.winner == 'draw')    count.draw++;

  data.playerOption = userOption;
  data.machineOption = machineOption;
  data.winner = answer.winner;
  data.message = answer.message;


  console.log(userOption, machineOption, answer.message, count);



  res.redirect('/');
});

app.listen(port, () => console.log(`server listening in ${port}`));

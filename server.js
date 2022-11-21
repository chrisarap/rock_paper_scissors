const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'))
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render(
  __dirname + '/views/index.pug'
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

app.listen(port, () => console.log(`server listening on ${port}`));

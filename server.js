const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const {result} = require('./public/index.js')



app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.post('/', (req, res) => {
  let userOption = req.body.option;

  console.log(userOption, result());

  res.redirect('/');
});

app.listen(port, () => console.log(`server listening in ${port}`));

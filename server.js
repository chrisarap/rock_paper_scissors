const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.post('/', (req, res) => {
  console.log(req.body)
});

app.listen(port, () => console.log(`server listening in ${port}`));

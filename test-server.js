const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const data = req.body.hash;
  console.log('this is data:', data);
  if (data === 'handshake') {
    res.send({ status: 200, until: '2017-04-11T22:51:29.410Z', });
  } else {
    res.send({ status: 400, message: 'Bad Request', });
  }
});

app.listen(3000, () => console.log('http://localhost:3000'));

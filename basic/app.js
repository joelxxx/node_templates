const express = require('express')
const app = express()

function sayHello(response) {
  console.log("In sayHello() function");
  var x = 15;
  debugger;
  x = x + 25;
  console.log("x = ", x);

  response.send('Say Hello World with debugger!');
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello', (req, res) => sayHello(res))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


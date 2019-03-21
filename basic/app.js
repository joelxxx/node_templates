const express = require('express')
const app = express()
const log4js = require('log4js')
var logconf = require('./config.json')

// var logger = log4js.getLogger();
// logger.level = 'info';

// var conf = {
//   appenders: { 
//     cheese: { type: 'file', filename: 'cheese.log' } ,
//     botski: { type: 'file', filename: 'mybot.log'}
//   },
//   categories: { 
//     default: { appenders: ['cheese'], level: 'error' },
//     test2: {appenders: ['botski'], level: 'error'}  
//   }
// };

log4js.configure(logconf);

const logger = log4js.getLogger('cheese');
const botLog = log4js.getLogger('test2');


logger.debug("Some debug messages");


function sayHello(response) {
  console.log("In sayHello() function");
  var x = 15;
  debugger;
  x = x + 25;
  console.log("x = ", x);

  response.send('Say Hello World with debugger!');
}


function therese(response) {
  console.log("In sayHello() function");

  response.send('Say Hello from therese function!');
  logger.debug("Some debug therese");
  botLog.trace('tracing in therese');


}

function changelevel(request, response){

  console.log("Hi I'm change level");
  debugger;
  logger.level='DEBUG';

  //look at request for args for category and new log level
  //programmatically change category's log level
  //default: { appenders: ['cheese'], level: 'error' }
  //change default category to be level debug

  //
  logger.debug('Got some more cheese.');
  response.send('Now see if "got some more cheese" is in the cheese.log file!');

}

function readread_log_settings(request, response){

  console.log("trying to reread log file settings");
  debugger;


  // fs.readFile(require.resolve(path), (err, data) => {
  //   if (err)
  //     cb(err)
  //   else
  //     cb(null, JSON.parse(data))
  // })
  


}

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
botLog.fatal('BattleBot Dead');

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello', (req, res) => sayHello(res))
app.get('/therese', (req, res) => therese(res))
app.get('/changeloglevel', (req, res) => changelevel(req,res))
app.get('/reread-log-settings', (req, res) => readread_log_settings(req,res))

app.get("/speak/:animal", function (req, res){
  var animal = req.params.animal;
  debugger;

  console.log(req.params);
  console.log(req.query);

  var sound;
  if (animal == 'pig'){
      sound = "'Oink'";
  } else if (animal == 'cow'){
      sound = "'Moo'";
  } else if (animal == 'dog'){
      sound = "'Woof Woof'"
  } else if (animal == 'donkey'){
      sound = "'Hee-Haw'";
  } else {
      sound = "'Maow'"
  }
  
  //****  BOOTCAMP SOLUTION
  //to compensate for capi
  // var animal = req.params.animal.toLowerCase();
  // var sounds ={
  //     pig: "'Oink'",
  //     cow: "'Moo'",
  //     dog: "'Woof Woof'",
  //     donkey: "'Hee-haw'",
  //     kitty: "'Maow'",
  // }
  // var sound = sounds[animal];
  
  res.send("The " + animal + " says " + sound);
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))


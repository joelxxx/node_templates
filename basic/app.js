const express = require('express')
const app = express()
const log4js = require('log4js');
// var logconf = require('./config.json')
var fs = require("fs");
var logconf = read_log_settings();
console.log("checking logconf");
console.log(logconf);

// log4js.configure(logconf);


//file to export config obj and reread function
// var logger = require('./logging');
// // var logconf = logger.config;
// // log4js.configure(logger.config);

// console.log("checking logger");
// console.log(logger.config);


// fs.watch("./config.json", (curr, prev) => {
fs.watch("./logging.js", (curr, prev) => {
  console.log("file changed");
  // delete require.cache[require.resolve('./config.json')];
  // logconf = require('./config.json');
  delete require.cache[require.resolve('./logging.js')];
  logconf = require('./logging.js');

  console.log("rerequired");
  console.log(logger.config);
})

const mainLog = log4js.getLogger('cheese');
const botLog = log4js.getLogger('mybot');

function sayHello(response) {
  console.log("In sayHello() function");
  var x = 15;
  debugger;
  x = x + 25;
  console.log("x = ", x);

  response.send('Say Hello World with debugger!');
}

function therese(response) {
  console.log("In therese() function: config check");

  response.send('Say Hello from therese function!');
  mainLog.debug("Some debug therese");
  botLog.trace('tracing in therese');

  // console.log(logger.config);
  console.log("begin logger statements");
  botLog.trace('Therese-trace');
  botLog.debug('Therese-debug');
  botLog.info('Therese-info');
  botLog.warn('Therese-warn');
  botLog.error('Therese-error');
  botLog.fatal('Therese-fatal');

  // fs.readFile('config.json', function (err, data) {
  //   if (err) {
  //     return console.error(err);
  //   }

  //   debugger;
  //   var testData = JSON.parse(data.toString())
  //   console.log('trying new config file');
  //   log4js.configure(testData);
  //   });

}

function changelevel(request, response){

  console.log("Hi I'm change level");
  debugger;
  mainLog.level='DEBUG';

  //look at request for args for category and new log level
  //programmatically change category's log level
  //default: { appenders: ['cheese'], level: 'error' }
  //change default category to be level debug

  //
  mainLog.debug('Got some more cheese.');
  response.send('Now see if "got some more cheese" is in the cheese.log file!');

}

// function readread_log_settings(request, response){
function read_log_settings(){

  console.log("reading logger config");

  // Asynchronous read
  fs.readFile('config.json', function (err, data) {
    if (err) {
      return console.error(err);
    }

    // debugger;
    var testData = JSON.parse(data.toString())
    console.log('reading config: read_log_settings');
    // return JSON.parse(data.toString());
    console.log(testData);
    // log4js.configure(logconf);
    // return testData;
  });

    
    

  
}

mainLog.trace('Entering cheese testing');
mainLog.debug('Got cheese.');
mainLog.info('Cheese is Comté.');
mainLog.warn('Cheese is quite smelly.');
mainLog.error('Cheese is too ripe!');
botLog.fatal('BattleBot Dead');

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello', (req, res) => sayHello(res))
app.get('/therese', (req, res) => therese(res))
app.get('/changeloglevel', (req, res) => changelevel(req,res))
app.get('/reread-log-settings', (req, res) => readread_log_settings(req,res))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


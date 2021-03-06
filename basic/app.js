const express = require('express')
const app = express()
const log4js = require('log4js');
const logconf = require('./config.json')
const fs = require("fs");


log4js.configure(logconf);


fs.watch("./config.json", (curr, prev) => {
  console.log("config.json file changed");
  read_and_apply_new_log_settings();   
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

function readread_log_settings(request, response){

  read_and_apply_new_log_settings();   
  response.send('Read the log settings file!');
}

function read_and_apply_new_log_settings(){

  console.log("reading logger config");

  // Asynchronous read
  fs.readFile('config.json', function (err, data) {
    if (err) {
      return console.error(err);
    }

    // debugger;
    var newconfig = JSON.parse(data.toString())
    console.log('reading config: read_log_settings');
    console.log(newconfig);
    console.log("----------------------------");
    log4js.configure(newconfig);
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


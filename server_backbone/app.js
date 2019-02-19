const express = require('express')
const app = express()

var u = require("underscore");
var _ = require("lodash");
var fs = require('fs');



var rtemp = fs.readFileSync('/Users/JoelS/code/sisyphus/migrate/undertest/index.html','utf8')
var template = _.template(rtemp);
var tdata = {
    listTitle: "Olympic Volleyball Players",
    listItems: [
        {
            name: "Misty May-Treanor",
            hasOlympicGold: true
        },
        {
            name: "Kerri Walsh Jennings",
            hasOlympicGold: true
        },
        {
            name: "Jennifer Kessy",
            hasOlympicGold: false
        },
        {
            name: "April Ross",
            hasOlympicGold: false
        }
    ]  
}

var templateString = template(tdata);

//app.get('/', (req, res) => res.send('Hello World!'))
//app.get('/', (req, res) => res.sendFile('/Users/JoelS/code/sisyphus/migrate/undertest/index.html'))
app.get('/', (req, res) => res.send(templateString));

app.listen(3000, () => console.log('Example app listening on port 3000!'));


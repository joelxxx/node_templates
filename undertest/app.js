const express = require('express')
const app = express()

let u = require("underscore");
let _ = require("lodash");
let fs = require('fs');
let port = 3000;


let rtemp = fs.readFileSync('/Users/curtismorice/Documents/node_templates/undertest/index.html','utf8')
let template = _.template(rtemp);
let tdata = {
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
        },
        {
            name:  "Curtis Morice",
            hasOlympicGold: true
        },
        {
            name:  "Curtis Morice",
            hasOlympicGold: true
        },
        {
            name:  "Curtis Morice",
            hasOlympicGold: true
        },
        {
            name:  "Curtis Morice",
            hasOlympicGold: true
        },
        {
            name:  "Curtis Morice",
            hasOlympicGold: true
        },
        {
            name:  "Curtis Morice",
            hasOlympicGold: true
        },
        {
            name:  "Curtis Morice",
            hasOlympicGold: true
        },
        
    ]  
}

let templateString = template(tdata);

app.use(express.static('undertest'));

app.get('/', (req, res) => res.send(templateString));

app.listen(port, () => console.log(`Example app listening on port 3000:${port}`));



//app.get('/', (req, res) => res.send('Hello World!'))
//app.get('/', (req, res) => res.sendFile('/Users/JoelS/code/sisyphus/migrate/undertest/index.html'))
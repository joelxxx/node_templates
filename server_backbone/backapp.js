const express = require('express')
const app = express()

var u = require("underscore");
var _ = require("lodash");
var fs = require('fs');

var Backbone  = require('backbone');
var models = require('./models.js');


var rtemp = fs.readFileSync('backbone.html','utf8')
var template = _.template(rtemp);


var OView = Backbone.View.extend({
    model: models.members,
    initialize: function() {
        this.template = template;
    },
    render: function() {
        return this.template(this.model.toJSON());
    }
});

// var ov = new OView();


var tdata = {
    listTitle: "Olympic Volleyball Players",
    listItems: [
        {
            name: "Misty May-Treanor",
            hasOlympicGold: true
        },
        {
            name: "Kerri Walsh Jakis",
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

app.get('/one', (req, res) => res.send(OView.render()))
app.listen(3000, () => console.log('Example app listening on port 3000!'));


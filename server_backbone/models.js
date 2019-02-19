
var Backbone  = require('backbone');

var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    subject: ''
  }
});

var Olympian = Backbone.Model.extend({
  defaults: {
    name: '',
    hasOlympicGold: false
  }

});


var Members = Backbone.Collection.extend({

});

var o1 = new Olympian ({
  name:  'Misty May-Treanor',
  hasOlympicGold: true
});


var o2 = new Olympian ({
  name:  'Kerri Walsh Jennings',
  hasOlympicGold: true
});

var members = new Members([o1,o2]);





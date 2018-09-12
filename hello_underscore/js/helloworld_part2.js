// Backbone.js
$(document).ready(function(){
    // Create Model Class = where the data goes
    var Greeting = Backbone.Model.extend({
        // return data defaults of model wrapped in a function so the
        // defaults are returned each time a model instance is created
        defaults: function(){
            return {
                title: "default"
            };
        }
    });

    // Create an instance of the model
    var greeting = new Greeting({
        title: "Hello World!"
    });

    // Create the View Class to render in HTML
    // Views communicate with Models and let them know if the data in the Models
    // have changed due to user interaction, etc
    var GreetingView = Backbone.View.extend({
            // add properties to the GreetingView constructor
            // we are defining the div tag as the container that our view
            // will go into - you can choose a different one as you like
            tagName: "div",
            // and here is the id we will use for our template in the
            // render function which the view self renders by using return this
            template: $("#greeting-template").html(),

        render: function(){
            // create the greeting_template variable to hold the underscore
            // template function _.template with the argument of our template
            // property we created earlier.
            var greeting_template = _.template(this.template);
            // now we'll give this function some arguments that will render
            // our view template from our model data and updates this.el with
            // the new HTML - remember that the View let's the model know
            // if any of the data has changed due to user interaction
            this.$el.html(greeting_template(this.model.attributes));
            return this;
        }
    });

    // Create a new view instance
    var greetingView = new GreetingView({
        model: greeting
    });

    // call the render function
    // selects the id test and inserts the greetingView view instance
    // chaining the render method to the top level DOM element .el
    $('#test').html(greetingView.render().el);

});

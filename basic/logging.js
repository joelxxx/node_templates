var loggerConfig = {
    "appenders": { 
      "cheese": { "type": "file", "filename": "cheese.log" } ,
      "botski": { "type": "file", "filename": "mybot.log"}
    },
    "categories": { 
      "default": { "appenders": ["cheese"], "level": "error" },
      "test2": {"appenders": ["botski"], "level": "debug"}  
    }
}


module.exports.config = loggerConfig;
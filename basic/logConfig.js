{
appenders: { 
    cheese: { type: 'file', filename: 'cheese.log' } ,
    botski: { type: 'file', filename: 'mybot.log'}
},
categories: { 
    default: { appenders: ['cheese'], level: 'info' },
    test2: {appenders: ['botski'], level: 'trace'}  
}
}
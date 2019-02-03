var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var environment = require('serve-static');

app = express();

console.log(process.env.NODE_ENV);

var morgan = require('morgan')
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
} else {
    app.use(morgan('short'))
}

app.use(serveStatic(__dirname + "/build"));

var port = process.env.PORT || 5000;
process.env.NODE_ENV = 'production';

app.listen(port);

console.log('');
console.log('**************************************');
console.log('* Express.js server started          *');
console.log('* Port: '+port+'                         *');
console.log('* Listening on http://localhost:'+port+' *');
console.log('**************************************');
console.log('');
import express from 'express';
import path from 'path';

const server = express(); // Create new server

// DEV MIDDLEWARE
const webpack = require('webpack'); // Grab webpack
const config = require('../../config/webpack.dev.js'); // Grab webpack configuration
const compiler = webpack(config); // Create a compiler using webpack + configuration
const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer // 
);
server.use(webpackDevMiddleware);

// HOT RELOADING MIDDLEWARE
const webpackHotMiddleware = require('webpack-hot-middleware')(
    compiler
);
server.use(webpackHotMiddleware);

// STATIC MIDDLEWARE
const staticMiddleware = express.static('dist') // Declare root directory of the web server
server.use(staticMiddleware); // Use declared root

server.listen(8080, () => { // Lsten to localhost:8080
    console.log('server is listening');
})
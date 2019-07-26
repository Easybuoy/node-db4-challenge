const express = require('express');

const Recipe = require('./routes/recipe');

const server = express();

server.use(express.json());

server.use('/api/recipes', Recipe);

module.exports = server;
const express = require('express');
const server = express();

//PORT FOR HEROKU || LOCALHOST
const PORT = process.env.PORT || 4000;

//ROUTING 
const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

server.use(express.json());
server.use('api/projects', projectRouter);
server.use('api/actions', actionRouter);

server.listen(PORT, () => {
    console.log(`***Server is listening on ${PORT}***`);
});


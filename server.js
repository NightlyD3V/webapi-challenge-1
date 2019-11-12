const express = require('express');
const server = express();

//PORT FOR HEROKU || LOCALHOST
const PORT = process.env.PORT || 4000;

//ROUTING 
const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

server.use(express.json());
server.use(logger);
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Root directory</h2>`)
});

server.listen(PORT, () => {
    console.log(`***Server is listening on ${PORT}***`);
});

//LOGGER MIDDLEWARE
function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} 
      to ${req.url} from ${req.get('Origin')}` //origin not working?
    )
    next()
  };

module.exports = server;


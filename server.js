const express = require('express');
const server = express();

//PORT FOR HEROKU || LOCALHOST
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`***Server is listening on ${PORT}`);
});


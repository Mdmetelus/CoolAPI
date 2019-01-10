const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// Global middleware
module.export = server => {


// a peice of middle ware that is used to provide some basic/default security to onnonimze the headers
server.use(helmet());

// how we use /implement preset middleware into out server.
server.use(express.json()); // built in

server.use(morgan('short')); // logging middleware,  //kind of a tracer

// helps stop issues accross domains, it is a security feature
server.use(cors());




};
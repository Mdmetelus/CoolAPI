const express = require('express');
const configureMiddleware = require('../config/middleware');
const doubler = require('../common/doubleMiddleware');
const apiRouter = require('../api/apiRouter');


const server = express();


// Global middleware
configureMiddleware(server);

// // a peice of middle ware that is used to provide some basic/default security to onnonimze the headers
// server.use(helmet());

// // how we use /implement preset middleware into out server.
// server.use(express.json()); // built in

// server.use(morgan('short')); // logging middleware,  //kind of a tracer

// // helps stop issues accross domains, it is a security feature
// server.use(cors());


// const double = require();
// server.use(doubler);


// middleware
configureMiddleware(server);
server.use('/api', apiRouter);


//routes
server.get('orders', (req, res) => {
    res.send(`GET /orders endpoint`);
});

server.get('/', (req, res) => {
    res.send(` check success double: ${req.double}`);
});


server.get('/double', doubler, (req, res) => {
    res.send(`server alive!
    the value is ${req.body.number} !
    and the doubler is ${req.double} !`);
});

server.get('/:id', (req, res) => {
    res.send(`check success, id: ${req.params.id}`);
});

// with your endpoint rougt  you want the most specific firs and the mor general routes after.
// specific routeserver dfsaasadfas fist, catch all routes at the end.
module.exports = server;



`http://localhost:5000/?number=3`;

// // public stuff
// module.exports = {
//     greet,
//     secret: 'shhhhh'
//   };
  
//   function greet() {
//     console.log('\nserver.js\n');
//   }
  
//   // local to file stuff
  
  
  
  
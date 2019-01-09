const express = require('express');
const morgan = require('morgan');

const server = express();

// Global middleware
// how we use /implement preset middleware into out server.
server.use(express.json()); // built in
server.use(morgan('short')); // logging middleware, 
//kind of a tracer

server.use(doubler);


function doubler(req,res, next) {
    const value= req.body.number || 0;

    req.double = value *2;


    next();
}


//routes
server.get('/', (req,res) => {
    res.send('server alive');
});
module.exports = server;





// // public stuff
// module.exports = {
//     greet,
//     secret: 'shhhhh'
//   };
  
//   function greet() {
//     console.log('\nserver.js\n');
//   }
  
//   // local to file stuff
  
  
  
  
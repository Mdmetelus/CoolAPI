const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// Global middleware

// a peice of middle ware that is used to provide some basic/default security to onnonimze the headers
server.use(helmet());

// how we use /implement preset middleware into out server.
server.use(express.json()); // built in

server.use(morgan('short')); // logging middleware,  //kind of a tracer

// helps top issues accross domains, it is a security feature
server.use(cors());



server.use(doubler);


function doubler(req,res, next) {
    const value= req.query.number || 0;

    if (value) {
        req.double = value * 2;

    } else {
        res.status(400).send('please provide a number');
    }



    next();
}


//routes
server.get('/', (req, res) => {
    res.send(`sanity check success`);
});


server.get('/double', doubler, (req, res) => {
    res.send(`server alive!
    the value is ${req.body.number} !
    and the doubler is ${req.double} !`);
});

server.get('/;id', (req, res) => {
    res.send(`check success id: ${req.params.id}`);
});

// with your endpoint rougt  you want the most specific firs and the mor general routes after.
// specific routes fist, catch all routes at the end.
module.exports = server;



// http://localhost:5000/?number=3

// // public stuff
// module.exports = {
//     greet,
//     secret: 'shhhhh'
//   };
  
//   function greet() {
//     console.log('\nserver.js\n');
//   }
  
//   // local to file stuff
  
  
  
  
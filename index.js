const server = require('./server.js');


// enable dynamic ports for hosting provider
const port = process.env.PORT || 5678;
server.listen(5000, () => console.log('The Server is listening on port 5ooo, 5k'));

// console.log('\nindex.js\n');

// server.greet();

// console.log(server.secret);
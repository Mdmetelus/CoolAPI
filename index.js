const server = require('./api/server.js');


// enable dynamic ports for hosting provider
const port = process.env.PORT || 5678;
server.listen(port, () => console.log(`The Server is listening on port ${port}.`));

// console.log('\nindex.js\n');

// server.greet();

// console.log(server.secret);